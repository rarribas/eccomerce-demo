import { Component, NgModule } from '@angular/core';
import { products } from '../../../data/products';
import { Card } from '../../shared/components/card/card';
@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = products;
}
