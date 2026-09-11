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
  { id: 'c1', name: 'Espresso', description: '', price: '15dh', category: 'Coffee', image: '' },
  { id: 'c2', name: 'Cappuccino', description: '', price: '25dh', category: 'Coffee', image: '' },
  { id: 'c3', name: 'Latte', description: '', price: '25dh', category: 'Coffee', image: '' },

  // BREAKFAST
  { id: 'b1', name: 'Occidental', description: "Deux viennoiseries, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '38dh', category: 'Breakfast', image: '' },
  { id: 'b2', name: 'Amazigh', description: "Beghrir, harcha, meloui, betbout, amlou, fromage, miel, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '45dh', category: 'Breakfast', image: '' },
  { id: 'b3', name: 'Gourmand', description: "Œufs au plat brouillés avec ou sans fromage, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '48dh', category: 'Breakfast', image: '' },
  { id: 'b4', name: 'Ftour Fassi', description: "Œufs au khlii, huile d’olive, olives noires, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '45dh', category: 'Breakfast', image: '' },
  { id: 'b5', name: 'Ftour Chamali', description: "Œufs brouillés avec charcuterie et fromage blanc, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '58dh', category: 'Breakfast', image: '' },
  { id: 'b6', name: 'Omelette Spéciale', description: "Œufs brouillés avec tomate cerise, oignons, dinde fumée, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '48dh', category: 'Breakfast', image: '' },
  { id: 'b7', name: 'Cappuccino7 Breakfast', description: "Croque monsieur, hotdog, fromage blanc, salade (verte, tomate, maïs), crêpe Nutella, salade de fruits, jus d'orange, balboula, boisson chaude au choix, eau minérale.", price: '68dh', category: 'Breakfast', image: '' },
  { id: 'b8_healthy', name: 'Healthy Breakfast', description: "Toast avocat & œufs, bol d’avoine (banane, chia, fruits secs), fruits de saison, yaourt, jus d’orange, balboula, boisson chaude au choix, eau minérale.", price: '60dh', category: 'Breakfast', image: '' },
  { id: 'b9', name: 'Turkie', description: "Œufs au plat brouillés, hash browns, tomate grillée.", price: '68dh', category: 'Breakfast', image: '' },
  { id: 'b10', name: 'Anglais', description: "Œufs au plat, fromages (rouge, blanc, cheddar), concombre, salade tomate, olives, huile d’olive, jambon, beurre, confiture, pain, jus d’orange, balboula, boisson chaude, eau minérale.", price: '85dh', category: 'Breakfast', image: '' },

  // JUICES
  { id: 'j1', name: 'Fresh Orange Juice', description: '', price: '25dh', category: 'Juices', image: '' },
  { id: 'j2', name: 'Avocado Milkshake', description: '', price: '35dh', category: 'Juices', image: '' },
  { id: 'j3', name: 'Strawberry Juice', description: '', price: '25dh', category: 'Juices', image: '' },

  // BRUNCH
  { id: 'br1', name: 'Brunch (1 personne)', description: "Includes: grillades, pain, beghrir, harcha, meloui, betbout, miel, amlou, huile d’olive, fromage, dinde fumée, olives, confiture, beurre, jus d’orange, salade de fruits, pancakes Nutella, yaourt, boisson chaude, eau minérale", price: '87dh', category: 'Brunch', image: '' },
  { id: 'br2', name: 'Brunch (2 personnes)', description: "Includes: grillades, pain, beghrir, harcha, meloui, betbout, miel, amlou, huile d’olive, fromage, dinde fumée, olives, confiture, beurre, jus d’orange, salade de fruits, pancakes Nutella, yaourt, boisson chaude, eau minérale", price: '150dh', category: 'Brunch', image: '' },

  // PIZZA
  { id: 'p1', name: 'Margherita', description: 'Sauce tomate, fromage, olives noires, poivrons, oignon, mozzarella.', price: '30dh', category: 'Pizza', image: '' },
  { id: 'p2', name: 'Thon', description: 'Sauce tomate, fromage, thon, oignon, olives noires, poivrons, mozzarella.', price: '35dh', category: 'Pizza', image: '' },
  { id: 'p3', name: 'Poulet', description: 'Sauce tomate, fromage, poulet, oignon, olives noires, poivrons, mozzarella.', price: '40dh', category: 'Pizza', image: '' },
  { id: 'p4', name: 'Viande Hachée', description: 'Sauce tomate, fromage, viande hachée, oignon, olives noires, poivrons, mozzarella.', price: '45dh', category: 'Pizza', image: '' },
  { id: 'p5', name: 'Quatre Saisons', description: 'Sauce tomate, fromage, poulet, viande hachée, charcuterie, hotdog, thon, oignon, olives noires, poivrons, mozzarella.', price: '50dh', category: 'Pizza', image: '' },

  // CRÊPES SALÉES
  { id: 'cs1', name: 'Fromage', description: '', price: '42dh', category: 'Crêpes Salées', image: '' },
  { id: 'cs2', name: 'Dinde fumée', description: '', price: '48dh', category: 'Crêpes Salées', image: '' },
  { id: 'cs3', name: 'Poulet Champignon', description: '', price: '54dh', category: 'Crêpes Salées', image: '' },

  // CRÊPES SUCRÉES
  { id: 'css1', name: 'Nature', description: '', price: '20dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css2', name: 'Confiture', description: '', price: '25dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css3', name: 'Nutella', description: '', price: '30dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css4', name: 'Nutella Banane', description: '', price: '37dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css5', name: 'Miel & Noix', description: '', price: '35dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css6', name: 'Royal', description: '', price: '40dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css7', name: 'Exotique', description: '', price: '48dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css8', name: 'Brésilienne', description: '', price: '48dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css9', name: 'Brésilienne Nutella Banane + glace vanille', description: '', price: '48dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css10', name: 'Cappuccino7', description: '', price: '52dh', category: 'Crêpes Sucrées', image: '' },
  { id: 'css11', name: 'Miel & fruits secs', description: '', price: '49dh', category: 'Crêpes Sucrées', image: '' },

  // GAUFRES
  { id: 'g1', name: 'Caramel', description: '', price: '30dh', category: 'Gaufres', image: '' },
  { id: 'g2', name: 'Miel & Noix', description: '', price: '30dh', category: 'Gaufres', image: '' },
  { id: 'g3', name: 'Nutella', description: '', price: '35dh', category: 'Gaufres', image: '' },
  { id: 'g4', name: 'Miel & fruits secs', description: '', price: '49dh', category: 'Gaufres', image: '' },

  // PANCAKES
  { id: 'pan1', name: 'Caramel', description: '', price: '30dh', category: 'Pancakes', image: '' },
  { id: 'pan2', name: 'Miel & Noix', description: '', price: '30dh', category: 'Pancakes', image: '' },
  { id: 'pan3', name: 'Nutella', description: '', price: '35dh', category: 'Pancakes', image: '' },
  { id: 'pan4', name: 'Miel & fruits secs', description: '', price: '49dh', category: 'Pancakes', image: '' },

  // STAMPS / LOYALTY

  // LES BOISSONS
  { id: 'lb1', name: 'Lait chaude', description: '', price: '14dh', category: 'Les boissons', image: '' },
  { id: 'lb2', name: 'Espresso', description: '', price: '14dh', category: 'Les boissons', image: '' },
  { id: 'lb3', name: 'Café américain', description: '', price: '15dh', category: 'Les boissons', image: '' },
  { id: 'lb4', name: 'Lait parfumé', description: '', price: '14dh', category: 'Les boissons', image: '' },
  { id: 'lb5', name: 'Café crème', description: '', price: '15dh', category: 'Les boissons', image: '' },
  { id: 'lb6', name: 'Nespresso', description: '', price: '15dh', category: 'Les boissons', image: '' },
  { id: 'lb7', name: 'Latté Macchiato', description: '', price: '16dh', category: 'Les boissons', image: '' },
  { id: 'lb8', name: 'Double Espresso', description: '', price: '18dh', category: 'Les boissons', image: '' },
  { id: 'lb9', name: 'Cappuccino Italien', description: '', price: '18dh', category: 'Les boissons', image: '' },
  { id: 'lb10', name: 'Chocolat chaud', description: '', price: '18dh', category: 'Les boissons', image: '' },
  { id: 'lb11', name: 'Cappuccino viennois', description: '', price: '25dh', category: 'Les boissons', image: '' },
  { id: 'lb12', name: 'Café au miel', description: '', price: '18dh', category: 'Les boissons', image: '' },

  // THÉ & INFUSIONS
  { id: 'ti1', name: 'Thé à la menthe', description: '', price: '14dh', category: 'Thé & infusions', image: '' },
  { id: 'ti2', name: 'Lipton', description: '', price: '14dh', category: 'Thé & infusions', image: '' },
  { id: 'ti3', name: 'Verveine', description: '', price: '14dh', category: 'Thé & infusions', image: '' },
  { id: 'ti4', name: 'Infusion thé bio', description: '', price: '16dh', category: 'Thé & infusions', image: '' },

  // SPECIAL HOT DRINKS
  { id: 'shd1', name: 'Mocaccino', description: '', price: '20dh', category: 'Special hot drinks', image: '' },
  { id: 'shd2', name: 'Noisette Macchiato', description: '', price: '20dh', category: 'Special hot drinks', image: '' },
  { id: 'shd3', name: 'Caramel Macchiato', description: '', price: '22dh', category: 'Special hot drinks', image: '' },
  { id: 'shd4', name: 'Chocolat viennois', description: '', price: '22dh', category: 'Special hot drinks', image: '' },
  { id: 'shd5', name: 'Chocolat Fondu', description: '', price: '28dh', category: 'Special hot drinks', image: '' },
  { id: 'shd6', name: 'Chocolat Brésilien', description: '', price: '30dh', category: 'Special hot drinks', image: '' },

  // ICED LATTÉ
  { id: 'il1', name: 'Caramel & cream', description: '', price: '25dh', category: 'Iced latté', image: '' },
  { id: 'il2', name: 'Noisette', description: '', price: '25dh', category: 'Iced latté', image: '' },
  { id: 'il3', name: 'Happy moka', description: '', price: '25dh', category: 'Iced latté', image: '' },

  // ICE TEA
  { id: 'it1', name: 'Pêche', description: '', price: '30dh', category: 'Ice Tea', image: '' },
  { id: 'it2', name: 'Citron', description: '', price: '30dh', category: 'Ice Tea', image: '' },
  { id: 'it3', name: 'Framboise', description: '', price: '30dh', category: 'Ice Tea', image: '' },

  // JUS
  { id: 'js1', name: 'Orange', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js2', name: 'Citron', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js3', name: 'Carotte', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js4', name: 'Pomme', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js5', name: 'Banane', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js6', name: 'Mangue', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js7', name: 'Fraise', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js8', name: 'Ananas', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js9', name: 'Kiwi', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'js10', name: 'Panaché', description: '', price: '35dh', category: 'Jus', image: '' },
  { id: 'js11', name: 'Avocat fruits secs', description: '', price: '30dh', category: 'Jus', image: '' },
  { id: 'js12', name: 'Zaazaa', description: '', price: '48dh', category: 'Jus', image: '' },

  // FRAPPUCCINOS COFFEE
  { id: 'fc1', name: 'Caramel & Cream', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc2', name: 'Caramel Beurre salé', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc3', name: 'Moka Chocolate', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc4', name: 'Noisette', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc5', name: 'Amaretto', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },

  // MILKSHAKES
  { id: 'ms1', name: 'Carmel Shake', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms2', name: 'Orange shake', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms3', name: 'Mixed berries (fruits rouges)', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms4', name: 'Mango Alphonso', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms5', name: 'Chocolat Oreo', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms6', name: 'Fruit de la passion', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms7', name: 'Fraise', description: '', price: '40dh', category: 'Milkshakes', image: '' },

  // SMOOTHIES
  { id: 'sm1', name: 'Detox Maison', description: 'citron, pomme, gingembre, feuilles de menthe', price: '35dh', category: 'Smoothies', image: '' },
  { id: 'sm2', name: 'Berry Explosion', description: 'fruits rouges, fruits de saison, menthe', price: '35dh', category: 'Smoothies', image: '' },
  { id: 'sm3', name: 'Mango Madness', description: 'mangue, banane, fruit de la passion', price: '35dh', category: 'Smoothies', image: '' },
  { id: 'sm4', name: 'Tropical paradise', description: 'ananas, pêche, melon et yaourt', price: '35dh', category: 'Smoothies', image: '' },

  // MOJITOS
  { id: 'mj1', name: 'Classique', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj2', name: 'Mango mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj3', name: 'Berries mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj4', name: 'Passion mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj5', name: 'Ananas mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj6', name: 'Blue mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj7', name: 'Concombre mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mj8', name: 'Strawberry mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
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
