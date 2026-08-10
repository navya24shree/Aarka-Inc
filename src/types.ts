export interface Product {
  id: string;
  name: string;
  category: 'Relay Modules' | 'Generators' | 'Meters' | 'Sensors' | 'Lighting' | 'Fans';
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  onSale?: boolean;
  isNew?: boolean;
  discountPercentage?: number;
  specs?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  searchQuery: string;
  categories: string[];
  minPrice: string;
  maxPrice: string;
  sortBy: 'featured' | 'low-high' | 'high-low' | 'newest';
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date?: string;
}
