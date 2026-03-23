import { products, categories } from '../../data/products';
import { Product, CategoryId } from '../../data/products';

export function findProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function filterProductsByName(query: string): Product[] {
  if (!query.trim()) {
    return products;
  }
  const lowerQuery = query.toLowerCase();
  return products.filter((product) => product.title.toLowerCase().includes(lowerQuery));
}

export function findCategoryById(id: CategoryId) {
  return categories.find((category) => category.id === id);
}

export function filterProductsByCategory(categoryId: CategoryId): Product[] {
  return products.filter((product) => product.categoryId === categoryId);
}
