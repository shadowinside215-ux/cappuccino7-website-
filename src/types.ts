export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Coffee' | 'Breakfast' | 'Crepes & Snacks' | 'Juices';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
