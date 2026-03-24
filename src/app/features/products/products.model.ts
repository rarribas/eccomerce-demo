export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES = {
  electronics: 'Electronics',
  furniture: 'Furniture',
  wearables: 'Wearables',
  clothing: 'Clothing',
  home: 'Home',
  kitchen: 'Kitchen',
  accessories: 'Accessories',
  sports: 'Sports',
} as const;

export type CategoryId = keyof typeof CATEGORIES;
export type CategoryLabel = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export interface Product {
  id: string;
  title: string;
  miniDescription: string;
  categoryId: CategoryId;
  price: number;
  imageUrl: string;
}