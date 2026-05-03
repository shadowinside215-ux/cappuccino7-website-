import { MenuItem, Review, GalleryImage } from './types';

export const COLORS = {
  primary: '#5A3E2B', // Coffee brown
  secondary: '#D7B49E', // Latte cream
  accent: '#E6CCB2', // Light beige
  bg: '#F5F5F0', // Warm off-white
  ink: '#2C1810', // Dark espresso
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  { id: 'c1', name: 'Espresso', description: '', price: '15dh', category: 'Coffee', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800' },
  { id: 'c2', name: 'Cappuccino', description: '', price: '25dh', category: 'Coffee', image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&q=80&w=800' },
  { id: 'c3', name: 'Latte', description: '', price: '25dh', category: 'Coffee', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800' },

  // BREAKFAST
  { id: 'b1', name: 'Occidental', description: "Deux viennoiseries, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '38dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800' },
  { id: 'b2', name: 'Amazigh', description: "Beghrir, harcha, meloui, betbout, amlou, fromage, miel, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '45dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=80&w=800' },
  { id: 'b3', name: 'Gourmand', description: "Œufs au plat brouillés avec ou sans fromage, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '48dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800' },
  { id: 'b4', name: 'Ftour Fassi', description: "Œufs au khlii, huile d’olive, olives noires, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '45dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=800' },
  { id: 'b5', name: 'Ftour Chamali', description: "Œufs brouillés avec charcuterie et fromage blanc, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '58dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?auto=format&fit=crop&q=80&w=800' },
  { id: 'b6', name: 'Omelette Spéciale', description: "Œufs brouillés avec tomate cerise, oignons, dinde fumée, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '48dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800' },
  { id: 'b7', name: 'Cappuccino7 Breakfast', description: "Croque monsieur, hotdog, fromage blanc, salade (verte, tomate, maïs), crêpe Nutella, salade de fruits, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '68dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?auto=format&fit=crop&q=80&w=800' },
  { id: 'b8', name: 'Healthy Breakfast', description: "Toast avocat & œufs, bol d’avoine (banane, chia, fruits secs), fruits de saison, yaourt, jus d’orange, balboula, boisson chaude au choix, eau minérale.", price: '60dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800' },
  { id: 'b9', name: 'Turkie', description: "Œufs au plat brouillés, hash browns, tomate grillée.", price: '68dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&q=80&w=800' },
  { id: 'b10', name: 'Anglais', description: "Œufs au plat, fromages (rouge, blanc, cheddar), concombre, salade tomate, olives, huile d’olive, jambon, beurre, confiture, pain, jus d’orange, balboula, boisson chaude, eau minérale.", price: '85dh', category: 'Breakfast', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800' },

  // JUICES
  { id: 'j1', name: 'Fresh Orange Juice', description: '', price: '25dh', category: 'Juices', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800' },
  { id: 'j2', name: 'Avocado Milkshake', description: '', price: '35dh', category: 'Juices', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800' },
  { id: 'j3', name: 'Strawberry Juice', description: '', price: '25dh', category: 'Juices', image: 'https://images.unsplash.com/photo-1589733901241-5e39127a5182?auto=format&fit=crop&q=80&w=800' },

  // BRUNCH
  { id: 'br1', name: 'Brunch (1 personne)', description: "Includes: grillades, pain, beghrir, harcha, meloui, betbout, miel, amlou, huile d’olive, fromage, dinde fumée, olives, confiture, beurre, jus d’orange, salade de fruits, pancakes Nutella, yaourt, boisson chaude, eau minérale", price: '87dh', category: 'Brunch', image: 'https://images.unsplash.com/photo-1467453222764-e1252b14618e?auto=format&fit=crop&q=80&w=800' },
  { id: 'br2', name: 'Brunch (2 personnes)', description: "Includes: grillades, pain, beghrir, harcha, meloui, betbout, miel, amlou, huile d’olive, fromage, dinde fumée, olives, confiture, beurre, jus d’orange, salade de fruits, pancakes Nutella, yaourt, boisson chaude, eau minérale", price: '150dh', category: 'Brunch', image: 'https://images.unsplash.com/photo-1467453222764-e1252b14618e?auto=format&fit=crop&q=80&w=800' },

  // PIZZA
  { id: 'p1', name: 'Margherita', description: 'Sauce tomate, fromage, olives noires, poivrons, oignon, mozzarella.', price: '30dh', category: 'Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=800' },
  { id: 'p2', name: 'Thon', description: 'Sauce tomate, fromage, thon, oignon, olives noires, poivrons, mozzarella.', price: '35dh', category: 'Pizza', image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800' },
  { id: 'p3', name: 'Poulet', description: 'Sauce tomate, fromage, poulet, oignon, olives noires, poivrons, mozzarella.', price: '40dh', category: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800' },
  { id: 'p4', name: 'Viande Hachée', description: 'Sauce tomate, fromage, viande hachée, oignon, olives noires, poivrons, mozzarella.', price: '45dh', category: 'Pizza', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800' },
  { id: 'p5', name: 'Quatre Saisons', description: 'Sauce tomate, fromage, poulet, viande hachée, charcuterie, hotdog, thon, oignon, olives noires, poivrons, mozzarella.', price: '50dh', category: 'Pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800' },

  // CRÊPES SALÉES
  { id: 'cs1', name: 'Fromage', description: '', price: '42dh', category: 'Crêpes Salées', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800' },
  { id: 'cs2', name: 'Dinde fumée', description: '', price: '48dh', category: 'Crêpes Salées', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800' },
  { id: 'cs3', name: 'Poulet Champignon', description: '', price: '54dh', category: 'Crêpes Salées', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800' },

  // CRÊPES SUCRÉES
  { id: 'css1', name: 'Nature', description: '', price: '20dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css2', name: 'Confiture', description: '', price: '25dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css3', name: 'Nutella', description: '', price: '30dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css4', name: 'Nutella Banane', description: '', price: '37dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css5', name: 'Miel & Noix', description: '', price: '35dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css6', name: 'Royal', description: '', price: '40dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css7', name: 'Exotique', description: '', price: '48dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css8', name: 'Brésilienne', description: '', price: '48dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css9', name: 'Brésilienne Nutella Banane + glace vanille', description: '', price: '48dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css10', name: 'Cappuccino7', description: '', price: '52dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },
  { id: 'css11', name: 'Miel & fruits secs', description: '', price: '49dh', category: 'Crêpes Sucrées', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800' },

  // GAUFRES
  { id: 'g1', name: 'Caramel', description: '', price: '30dh', category: 'Gaufres', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800' },
  { id: 'g2', name: 'Miel & Noix', description: '', price: '30dh', category: 'Gaufres', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800' },
  { id: 'g3', name: 'Nutella', description: '', price: '35dh', category: 'Gaufres', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800' },
  { id: 'g4', name: 'Miel & fruits secs', description: '', price: '49dh', category: 'Gaufres', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800' },

  // PANCAKES
  { id: 'pan1', name: 'Caramel', description: '', price: '30dh', category: 'Pancakes', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800' },
  { id: 'pan2', name: 'Miel & Noix', description: '', price: '30dh', category: 'Pancakes', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800' },
  { id: 'pan3', name: 'Nutella', description: '', price: '35dh', category: 'Pancakes', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800' },
  { id: 'pan4', name: 'Miel & fruits secs', description: '', price: '49dh', category: 'Pancakes', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800' },

  // STAMPS / LOYALTY
  { id: 'loy1', name: 'Cappuccino7 Loyalty', description: 'Collect stamps and get free drinks!', price: 'Free', category: 'Loyalty', image: '/input_file_1.png' },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Rayane Memdouh',
    rating: 5,
    comment: "I've been to this restaurant several times and it's the best experience I could ever ask for, the food is freshly prepared with a great variety of dishes and meals to choose from, the service is friendly and fast.",
    date: '1 month ago',
  },
  {
    id: 'r2',
    author: 'sammyluxurouis',
    rating: 5,
    comment: 'Beautiful coffee spot with a really relaxing atmosphere. The place is clean, the coffee tastes great, and it’s perfect for chilling or working for a bit. Definitely one of my favorite spots.',
    date: '1 month ago',
  },
  {
    id: 'r3',
    author: 'Youssef Tabia',
    rating: 2,
    comment: 'First visit, and the experience was surprising. Nice spot but a bit different from what I expected based on other reviews. Still worth a visit for the coffee.',
    date: '2 months ago',
  },
  {
    id: 'r4',
    author: 'Imad Douk',
    rating: 5,
    comment: 'Excellent service together with amazing food ❤️❤️',
    date: '3 months ago',
  },
  {
    id: 'r5',
    author: 'Hajar Erguigue',
    rating: 5,
    comment: 'This is my first time visiting this Café after seeing their high ratings on Google. The experience turned out to be exactly as described by many customers. The place is absolutely amazing!',
    date: '2 months ago',
  },
  {
    id: 'r6',
    author: 'farah chaibi',
    rating: 5,
    comment: 'One of the best places in Sala Al Jadida, the owner is super customer centered. We love it here!',
    date: '2 months ago',
  },
  {
    id: 'r7',
    author: 'Farouk El Maarouf',
    rating: 5,
    comment: 'Great service and wide variety of menu options. Youssef was especially friendly and attentive, deserves a good raise :)',
    date: '2 months ago',
  },
  {
    id: 'r8',
    author: 'Amd Ayub (Shiro)',
    rating: 5,
    comment: 'The best place ever ❤️😫',
    date: '3 months ago',
  },
  {
    id: 'r9',
    author: 'Akram Berradi',
    rating: 5,
    comment: 'I\'ve had a great time at this wonderful cafe on this wonderful spot. I can\'t say enough about the quality of food, ambiance and the friendliness of the staff.',
    date: '3 months ago',
  },
  {
    id: 'r10',
    author: 'Othman Elamriche',
    rating: 5,
    comment: 'Calm vibe and great service',
    date: '2 months ago',
  },
  {
    id: 'r11',
    author: 'Adnan Soumair',
    rating: 5,
    comment: 'A big thank you to the entire team for the excellent service and high-quality food. The welcome is warm and the service is fast and professional.',
    date: '2 months ago',
  },
  {
    id: 'r12',
    author: 'sarah santarelli',
    rating: 5,
    comment: 'The food was really fresh and well presented and plentiful. Our waiter saw me struggling to use Darija and switched over to English which was very thoughtful.',
    date: '3 months ago',
  },
  {
    id: 'r13',
    author: 'RXF BEN',
    rating: 5,
    comment: 'Amazing and fast service top ❤️🔥',
    date: '2 months ago',
  },
  {
    id: 'r14',
    author: 'Mohamed Erguigue',
    rating: 5,
    comment: 'Amazing place and delicious food. Above all, the ambience is mesmerizing!!',
    date: '3 months ago',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [];
