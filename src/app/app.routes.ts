import { Routes } from '@angular/router';
import { Products } from './features/products/products';
import { Product } from './features/product/product';
export const routes: Routes = [
  { path: 'products', component: Products }, 
  { path: 'products/:id', component: Product },

  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
