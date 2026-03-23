import { Component, NgModule } from '@angular/core';
import { products, categories, type CategoryId } from '../../../data/products';
import { Card } from '../../shared/components/card/card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { filterProductsByName, filterProductsByCategory } from '../../helpers/products';
import { Select } from "../../shared/components/select/select";
@Component({
  selector: 'app-products',
  imports: [Card, SearchInput, Select],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = products;
  categories = categories;

  onSearch(searchTerm: string) {
    this.products = filterProductsByName(searchTerm);
    console.log('Search term received in Products component:', searchTerm, this.products);
  }

  onCategorySelected(categoryId: CategoryId | '') {
    this.products = categoryId ? filterProductsByCategory(categoryId) : products;
    console.log('Selected category ID in Products component:', categoryId, this.products);
  }
}
