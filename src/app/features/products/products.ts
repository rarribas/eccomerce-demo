import { Component, NgModule } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { Select } from "../../shared/components/select/select";
import { List } from '../../shared/components/list/list';
import { ListHeader } from '../../shared/components/list/list-header/list-header';
import { ListEmpty } from "../../shared/components/list/list-empty/list-empty";
import { ProductService } from './products.service';
import { Product, Category, CategoryId } from './products.model';
@Component({
  selector: 'app-products',
  imports: [Card, SearchInput, Select, List, ListHeader, ListEmpty],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService) {
    this.products = productService.getAllProducts();
    this.categories = productService.getAllCategories();
  }

  onSearch(searchTerm: string) {
    this.products = this.productService.filterProductsByName(searchTerm);
  }

  onCategorySelected(categoryId: CategoryId | '') {
    this.products = categoryId ? this.productService.filterProductsByCategory(categoryId) : this.products;
  }
}
