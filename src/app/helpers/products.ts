import { products } from '../../data/products';
import { Product } from '../../data/products';

export function findProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
