import { Component, input, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { findProductById } from '../../helpers/products';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  id = input.required<string>();

  private router = inject(Router);

  product = computed(() => {
    return findProductById(this.id());
  });

  ngOnInit() {
    if(!this.product()) {
      this.router.navigate(['/404']);
    }
    console.log('Product ID:', this.product());
  }
}
