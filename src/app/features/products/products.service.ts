import { Injectable } from '@angular/core';
import { Product, Category, CATEGORIES } from './products.model';

@Injectable({providedIn: 'root'})

export class ProductService {
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

  private products: Product[] = [
    {
      id: '1',
      title: 'Wireless Bluetooth Headphones',
      miniDescription: 'Premium sound quality with active noise cancellation',
      categoryId: 'electronics',
      price: 199.99,
      imageUrl: 'https://loremflickr.com/400/300/headphones,bluetooth,wireless',
    },
    {
      id: '2',
      title: 'Ergonomic Office Chair',
      miniDescription: 'Comfortable mesh chair with lumbar support',
      categoryId: 'furniture',
      price: 349.99,
      imageUrl: 'https://loremflickr.com/400/300/office,chair,furniture',
    },
    {
      id: '3',
      title: 'Smart Fitness Watch',
      miniDescription: 'Track your health and fitness goals with precision',
      categoryId: 'wearables',
      price: 149.99,
      imageUrl: 'https://loremflickr.com/400/300/smartwatch,fitness,wearable',
    },
    {
      id: '4',
      title: 'Organic Cotton T-Shirt',
      miniDescription: 'Soft and sustainable everyday wear',
      categoryId: 'clothing',
      price: 29.99,
      imageUrl: 'https://loremflickr.com/400/300/tshirt,cotton,clothing',
    },
    {
      id: '5',
      title: 'Ceramic Coffee Mug Set',
      miniDescription: 'Elegant handcrafted mugs for your morning coffee',
      categoryId: 'home',
      price: 45.99,
      imageUrl: 'https://loremflickr.com/400/300/coffee,mug,ceramic',
    },
    {
      id: '6',
      title: 'Stainless Steel Water Bottle',
      miniDescription: 'Insulated keeps drinks cold for 24 hours',
      categoryId: 'kitchen',
      price: 34.99,
      imageUrl: 'https://loremflickr.com/400/300/water,bottle,steel',
    },
    {
      id: '7',
      title: 'Leather Messenger Bag',
      miniDescription: 'Handcrafted genuine leather laptop bag',
      categoryId: 'accessories',
      price: 129.99,
      imageUrl: 'https://loremflickr.com/400/300/leather,bag,messenger',
    },
    {
      id: '8',
      title: 'Portable Bluetooth Speaker',
      miniDescription: 'Waterproof speaker with 360-degree sound',
      categoryId: 'electronics',
      price: 79.99,
      imageUrl: 'https://loremflickr.com/400/300/speaker,bluetooth,music',
    },
    {
      id: '9',
      title: 'Mechanical Gaming Keyboard',
      miniDescription: 'RGB backlit keyboard with Cherry MX switches',
      categoryId: 'electronics',
      price: 159.99,
      imageUrl: 'https://loremflickr.com/400/300/keyboard,mechanical,gaming',
    },
    {
      id: '10',
      title: 'Yoga Mat Premium',
      miniDescription: 'Non-slip eco-friendly mat for home workouts',
      categoryId: 'sports',
      price: 49.99,
      imageUrl: 'https://loremflickr.com/400/300/yoga,mat,exercise',
    },
  ];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
  
  filterProductsByName(query: string): Product[] {
    if (!query.trim()) {
      return this.products;
    }
    const lowerQuery = query.toLowerCase();
    return this.products.filter((product) => product.title.toLowerCase().includes(lowerQuery));
  }

  filterProductsByCategory(categoryId: string): Product[] {
    return this.products.filter((product) => product.categoryId === categoryId);
  }
}