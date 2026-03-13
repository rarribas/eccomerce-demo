import { Routes } from '@angular/router';
import { Products } from './features/products/products';
export const routes: Routes = [
  { path: 'products', component: Products }, 
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
