import { Component, signal, inject, computed, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Card, SearchInput, Select, List, ListHeader, ListEmpty, Button } from '@shared/components';
import { ProductService, Product, Category, CategoryId } from '@features/products';
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

  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.categories = this.productService.getAllCategories();
  }

  ngOnInit() {
    this.productService
      .getAllProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (products) => {
          this.allProducts.set(products);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error loading product:', err);
          this.isLoading.set(false);
          this.router.navigate(['/404']);
        },
      });
  }

  onSearch(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  onCategorySelected(categoryId: CategoryId | '') {
    this.selectedCategoryId.set(categoryId);
  }

  filteredProducts = computed(() => {
    let products = this.allProducts();
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
