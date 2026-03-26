import { Injectable } from '@angular/core';
import { Product, Category, CATEGORIES } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { delay, tap } from 'rxjs/operators';
@Injectable({providedIn: 'root'})

export class ProductService {
  private API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  private categories: Category[] = [
    { id: 'electronics', label: CATEGORIES.electronics },
    { id: 'furniture', label: CATEGORIES.furniture },
    { id: 'wearables', label: CATEGORIES.wearables },
    { id: 'clothing', label: CATEGORIES.clothing },
    { id: 'home', label: CATEGORIES.home },
    { id: 'kitchen', label: CATEGORIES.kitchen },
    { id: 'accessories', label: CATEGORIES.accessories },
    { id: 'sports', label: CATEGORIES.sports },
  ];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }

  // getAllProductsApi() {
    // return this.http.get<Product[]>(`${this.API_URL}/products`).pipe(
    //   tap(() => console.log('API called')),
    //   delay(1500)
    // );
  // }

  getProductById(id: string): Observable<Product>  {
    return this.http.get<Product>(`${this.API_URL}/products/${id}`);
  }
  
  filterProductsByName(query: string, products: Product[]): Product[] {
    if (!query.trim()) {
      return products;
    }
    const lowerQuery = query.toLowerCase();
    return products.filter((product) => product.title.toLowerCase().includes(lowerQuery));
  }

  filterProductsByCategory(categoryId: string, products: Product[]): Product[] {
    return products.filter((product) => product.categoryId === categoryId);
  }
}