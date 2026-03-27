import { Component, signal, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from '../../shared/components/card/card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { Select } from '../../shared/components/select/select';
import { List } from '../../shared/components/list/list';
import { ListHeader } from '../../shared/components/list/list-header/list-header';
import { ListEmpty } from '../../shared/components/list/list-empty/list-empty';
import { ProductService } from './products.service';
import { Product, Category, CategoryId } from './products.model';
import { Button } from '../../shared/components/button/button';
import { Loading } from '../loading/loading';
@Component({
  selector: 'app-products',
  imports: [Card, SearchInput, Select, List, ListHeader, ListEmpty, Button, Loading],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  categories: Category[] = [];
  isLoading = signal(true);
  allProducts = signal<Product[]>([]);
  searchTerm = signal('');
  selectedCategoryId = signal<CategoryId | ''>('');

  private router = inject(Router);
  private subscription?: Subscription;

  constructor(private productService: ProductService) {
    this.categories = productService.getAllCategories();
  }

  ngOnInit() {
    this.subscription = this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts.set(products);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.isLoading.set(false);
        this.router.navigate(['/404']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  onSearch(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  onCategorySelected(categoryId: CategoryId | '') {
    this.selectedCategoryId.set(categoryId);
  }

  // When signals of products, searchTerm or selectedCategoryId change, 
  // we want to re-apply the filters to get the new list of products to display
  filteredProducts = computed(() => {
    let products  = this.allProducts();
    if (this.selectedCategoryId()) {
      products = this.productService.filterProductsByCategory(this.selectedCategoryId(), products);
    }

    if (this.searchTerm()) {
      products = this.productService.filterProductsByName(this.searchTerm(), products);
    }

    return products;
  });

  clearFilters() {
    this.searchTerm.set('');
    this.selectedCategoryId.set('');
  }
}
