import { Component, input, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../products/products.service';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  id = input.required<string>();

  private router = inject(Router);
  private productService = inject(ProductService);
  
  product = computed(() => {
    return this.productService.getProductById(this.id());
  });

  ngOnInit() {
    if(!this.product()) {
      this.router.navigate(['/404']);
    }
    console.log('Product ID:', this.product());
  }
}
