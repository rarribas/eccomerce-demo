import { Routes } from '@angular/router';
import { Products } from './features/products/products';
import { Product } from './features/product/product';
import { NotFound } from './features/not-found/not-found';
export const routes: Routes = [
  { path: 'products', component: Products }, 
  { path: 'products/:id', component: Product },
  { path: '404', component: NotFound },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];
