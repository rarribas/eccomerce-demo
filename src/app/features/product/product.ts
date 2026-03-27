import { Component, input, inject, signal, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService, Product as ProductModel } from '@features/products';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  id = input.required<string>();
  product = signal<ProductModel | null>(null);
  isLoading = signal(true);

  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.productService
      .getProductById(this.id())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (product) => {
          this.product.set(product);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error loading product:', err);
          this.isLoading.set(false);
          this.router.navigate(['/404']);
        },
      });
  }
}
