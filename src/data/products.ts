export interface Product {
  id: string;
  title: string;
  miniDescription: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    miniDescription: 'Premium sound quality with active noise cancellation',
    category: 'Electronics',
    price: 199.99,
  },
  {
    id: '2',
    title: 'Ergonomic Office Chair',
    miniDescription: 'Comfortable mesh chair with lumbar support',
    category: 'Furniture',
    price: 349.99,
  },
  {
    id: '3',
    title: 'Smart Fitness Watch',
    miniDescription: 'Track your health and fitness goals with precision',
    category: 'Wearables',
    price: 149.99,
  },
  {
    id: '4',
    title: 'Organic Cotton T-Shirt',
    miniDescription: 'Soft and sustainable everyday wear',
    category: 'Clothing',
    price: 29.99,
  },
  {
    id: '5',
    title: 'Ceramic Coffee Mug Set',
    miniDescription: 'Elegant handcrafted mugs for your morning coffee',
    category: 'Home',
    price: 45.99,
  },
];
