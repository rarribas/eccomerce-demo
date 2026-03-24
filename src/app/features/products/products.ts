import { Component, NgModule } from '@angular/core';
import { products, categories, type CategoryId } from '../../../data/products';
import { Card } from '../../shared/components/card/card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { filterProductsByName, filterProductsByCategory } from '../../helpers/products';
import { Select } from "../../shared/components/select/select";
import { List } from '../../shared/components/list/list';
import { ListHeader } from '../../shared/components/list/list-header/list-header';
import { ListEmpty } from "../../shared/components/list/list-empty/list-empty";
@Component({
  selector: 'app-products',
  imports: [Card, SearchInput, Select, List, ListHeader, ListEmpty],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = products;
  categories = categories;

  onSearch(searchTerm: string) {
    this.products = filterProductsByName(searchTerm);
  }

  onCategorySelected(categoryId: CategoryId | '') {
    this.products = categoryId ? filterProductsByCategory(categoryId) : products;
  }
}
