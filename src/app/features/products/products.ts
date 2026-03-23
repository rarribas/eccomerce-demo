import { Component, NgModule } from '@angular/core';
import { products } from '../../../data/products';
import { Card } from '../../shared/components/card/card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { filterProductsByName } from '../../helpers/products';
@Component({
  selector: 'app-products',
  imports: [Card, SearchInput],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = products;

  onSearch(searchTerm: string) {
    this.products = filterProductsByName(searchTerm);
    console.log('Search term received in Products component:', searchTerm, this.products);
  }
}
