import { MenuItem, Review, GalleryImage } from './types';

export const COLORS = {
  primary: '#5A3E2B', // Coffee brown
  secondary: '#D7B49E', // Latte cream
  accent: '#E6CCB2', // Light beige
  bg: '#F5F5F0', // Warm off-white
  ink: '#2C1810', // Dark espresso
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'c1',
    name: 'Classic Espresso',
    description: 'Rich, intense, and full-bodied coffee shot.',
    price: '15 MAD',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510707577719-eaef09506642?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'c2',
    name: 'Cappuccino 7 Special',
    description: 'Double espresso with smooth foamed milk and a touch of cocoa.',
    price: '28 MAD',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'c3',
    name: 'Vanilla Latte',
    description: 'Creamy latte infused with premium vanilla bean.',
    price: '32 MAD',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'b1',
    name: 'Moroccan Breakfast',
    description: 'Traditional Beldi breakfast with olives, honey, cheese, and Harcha.',
    price: '45 MAD',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 's1',
    name: 'Chocolate Nutella Crepe',
    description: 'Thin Moroccan-style crepe filled with generous Nutella.',
    price: '35 MAD',
    category: 'Crepes & Snacks',
    image: 'https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'j1',
    name: 'Fresh Orange Juice',
    description: 'Squeezed to order from local Moroccan oranges.',
    price: '20 MAD',
    category: 'Juices',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Amine T.',
    rating: 5,
    comment: 'The best place for breakfast in Salé. The atmosphere is so relaxing and the staff is incredibly friendly.',
    date: '2 weeks ago',
  },
  {
    id: 'r2',
    author: 'Sara K.',
    rating: 4.8,
    comment: 'Love their Cappuccino! It is my daily stop before work. Very clean and professional environment.',
    date: '1 month ago',
  },
  {
    id: 'r3',
    author: 'Yassir B.',
    rating: 5,
    comment: 'Great spot for meetings or just reading a book. The WiFi is fast and the coffee is consistent.',
    date: '3 days ago',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', alt: 'Cafe Interior' },
  { id: '2', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', alt: 'Coffee Brewing' },
  { id: '3', url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800', alt: 'Outdoor Seating' },
  { id: '4', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800', alt: 'Pastry Selection' },
];
