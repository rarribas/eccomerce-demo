import { products } from '../../data/products';
import { Product } from '../../data/products';

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
