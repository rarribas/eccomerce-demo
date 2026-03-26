import { Component, input, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../products/products.service';
import { Product as ProductI } from '../products/products.model';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  id = input.required<string>();
  product = signal<ProductI | null>(null);
  isLoading = signal(true);

  private router = inject(Router);
  private productService = inject(ProductService);
  
  ngOnInit() {
    this.productService.getProductById(this.id()).subscribe({
      next: (product) => {
        this.product.set(product);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.isLoading.set(false);
        this.router.navigate(['/404']);
      }
    });
  }
}
