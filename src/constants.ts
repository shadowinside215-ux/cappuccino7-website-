import { MenuItem, Review, GalleryImage } from './types';

export const COLORS = {
  primary: '#5A3E2B', // Coffee brown
  secondary: '#D7B49E', // Latte cream
  accent: '#E6CCB2', // Light beige
  bg: '#F5F5F0', // Warm off-white
  ink: '#2C1810', // Dark espresso
};

export const MENU_ITEMS: MenuItem[] = [];

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

export const GALLERY_IMAGES: GalleryImage[] = [];
