import { Component, signal, inject } from '@angular/core';
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
  allProducts: Product[] = [];
  products: Product[] = [];
  categories: Category[] = [];
  isLoading = signal(true);

  searchTerm: string = '';
  selectedCategoryId: CategoryId | '' = '';

  private router = inject(Router);
  private subscription?: Subscription;

  constructor(private productService: ProductService) {
    this.categories = productService.getAllCategories();
  }

  ngOnInit() {
    this.subscription = this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts = products;
        this.products = products;
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
    this.searchTerm = searchTerm;
    this.applyFilters();
  }

  onCategorySelected(categoryId: CategoryId | '') {
    this.selectedCategoryId = categoryId;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.allProducts;
    if (this.selectedCategoryId) {
      filtered = this.productService.filterProductsByCategory(this.selectedCategoryId, filtered);
    }

    if (this.searchTerm) {
      filtered = this.productService.filterProductsByName(this.searchTerm, filtered);
    }

    this.products = filtered;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategoryId = '';
    this.products = this.allProducts;
  }
}
