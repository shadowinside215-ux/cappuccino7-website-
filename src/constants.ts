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
    "id": "b5",
    "name": "Ftour Chamali",
    "description": "Œufs brouillés avec charcuterie et fromage blanc, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "48dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b7",
    "name": "Cappuccino7 Breakfast",
    "description": "Croque monsieur, hotdog, fromage blanc, salade (verte, tomate, maïs), crêpe Nutella, salade de fruits, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "68dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b9",
    "name": "Turkie",
    "description": "Œufs au plat brouillés, hash browns, tomate grillée.",
    "price": "68dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b1",
    "name": "Occidental",
    "description": "Deux viennoiseries, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "38dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b2",
    "name": "Amazigh",
    "description": "Beghrir, harcha, meloui, betbout, amlou, fromage, miel, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b4",
    "name": "Ftour Fassi",
    "description": "Œufs au khlii, huile d’olive, olives noires, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b8",
    "name": "Healthy Breakfast",
    "description": "Toast avocat & œufs, bol d’avoine (banane, chia, fruits secs), fruits de saison, yaourt, jus d’orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "60dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b3",
    "name": "Gourmand",
    "description": "Oeufs au plat brouilés avec ou sans fromage, panier de pain, jus d'orange, Belboula, Boisson chaude au choix, Eau ménirale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b6",
    "name": "Omlette spéciale",
    "description": "Oeufs brouillés avec tomate cerise, Oignons, Dinde fumée, panier de pain, jus d'orange, Belboula, Boisson chaude au choix, Eau ménirale.",
    "price": "48dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b10",
    "name": "Anglais",
    "description": "Oeufs au plat brouilles, Hash brownes, Tomate grille, Boul des haricots, Fromage, dinde fumee,champignion saute, pain grille, saucice, sa iade fruits, salade variee,jus d'orange, yaourt, eau minerale, Boisson chaude au choix",
    "price": "85dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "br1",
    "name": "Brunch (1 personne)",
    "description": "Omlette plat, plat grillardes ( brochette de saucisses), Panier de pain, Beghrir, Harcha, Meloui, Betbout, Miel, Amlou, Huile d'olive, Fromage, dnde fumee, luncheon, olives noires, confiture, beurre, Jus d'orange, sa iade de fruits, pancakenutella, Yaourt, Boisson chaude au choix, Eau minerale",
    "price": "87dh",
    "category": "Brunch",
    "image": ""
  },
  {
    "id": "br2",
    "name": "Brunch (2 personne)",
    "description": "Omlette plat, plat grillardes ( brochette de saucisses), Panier de pain, Beghrir, Harcha, Meloui, Betbout, Miel, Amlou, Huile d'olive, Fromage, dnde fumee, luncheon, olives noires, confiture, beurre, Jus d'orange, sa iade de fruits, pancakenutella, Yaourt, Boisson chaude au choix, Eau minerale",
    "price": "150dh",
    "category": "Brunch",
    "image": ""
  },
  {
    "id": "pf1",
    "name": "Omlette nature",
    "description": "",
    "price": "20dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf2",
    "name": "Omlette Fromage",
    "description": "",
    "price": "25dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf3",
    "name": "Omlette Khlii",
    "description": "",
    "price": "32dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf4",
    "name": "Omlette Thon / Dinde fumée",
    "description": "",
    "price": "28dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf5",
    "name": "Pancake",
    "description": "",
    "price": "25dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf6",
    "name": "Crêpe Nutella",
    "description": "",
    "price": "25dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf7",
    "name": "Msemen ou Harcha ou Beghrir avec Miel / Confiture / Fromage / Amlou",
    "description": "",
    "price": "15dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "pf8",
    "name": "Assortiment Beldi (Msemen, Harcha, Beghrir, Miel, Fromage, Amlou)",
    "description": "",
    "price": "35dh",
    "category": "Petites faims",
    "image": ""
  },
  {
    "id": "tp1",
    "name": "Café Noir",
    "description": "",
    "price": "12dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp2",
    "name": "Café Cassé",
    "description": "",
    "price": "13dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp3",
    "name": "Café au Lait",
    "description": "",
    "price": "15dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp4",
    "name": "Café Viennois",
    "description": "",
    "price": "20dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp5",
    "name": "Chocolat Chaud",
    "description": "",
    "price": "20dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp6",
    "name": "Thé Marocain",
    "description": "",
    "price": "12dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp7",
    "name": "Lait Amande",
    "description": "",
    "price": "22dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp8",
    "name": "Verre de Lait",
    "description": "",
    "price": "10dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "tp9",
    "name": "Infusion (Verveine / Thé vert)",
    "description": "",
    "price": "12dh",
    "category": "Boissons chaudes",
    "image": ""
  },
  {
    "id": "bc1",
    "name": "Jus d'Orange Pressé",
    "description": "",
    "price": "18dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc2",
    "name": "Jus Panaché",
    "description": "",
    "price": "22dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc3",
    "name": "Jus d'Avocat Amande",
    "description": "",
    "price": "25dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc4",
    "name": "Milkshake Chocolat / Vanille / Fraise",
    "description": "",
    "price": "28dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc5",
    "name": "Mojito Classique",
    "description": "",
    "price": "30dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc6",
    "name": "Mojito Fraise",
    "description": "",
    "price": "33dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc7",
    "name": "Smoothie Exotique",
    "description": "",
    "price": "32dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "bc8",
    "name": "Ice Coffee",
    "description": "",
    "price": "25dh",
    "category": "Boissons froides",
    "image": ""
  },
  {
    "id": "sa1",
    "name": "Salade Verte",
    "description": "Laitue, Concombre, Tomates, Oignon",
    "price": "30dh",
    "category": "Salades",
    "image": ""
  },
  {
    "id": "sa2",
    "name": "Salade Marocaine",
    "description": "Tomates, Oignon",
    "price": "40dh",
    "category": "Salades",
    "image": ""
  },
  {
    "id": "sa3",
    "name": "Salade Royale",
    "description": "Laitue, Avocat, Crevettes, Tomates, Oignon, Persil, Jus de Citron",
    "price": "55dh",
    "category": "Salades",
    "image": ""
  },
  {
    "id": "sa4",
    "name": "Salade Niçoise",
    "description": "Laitue, Riz, Oeuf, Maïs, Olives noir, Thon, tomates, Concombre, Carote, Pomme de terre Beterave",
    "price": "42dh",
    "category": "Salades",
    "image": ""
  },
  {
    "id": "sa5",
    "name": "Salade du Chef",
    "description": "Avocat, tomate cerise, Laitue, surimi, Maïs, champignons, Fromage, Croûtons, Poulet, sauce chef",
    "price": "65dh",
    "category": "Salades",
    "image": ""
  },
  {
    "id": "pg1",
    "name": "Émincé de Boeuf",
    "description": "Boeuf avec sauce du chef et garniture légumes sautee",
    "price": "55dh",
    "category": "Plats gourmands",
    "image": ""
  },
  {
    "id": "pg2",
    "name": "Émincé de Poulet",
    "description": "Poulet avec créme champignons et garniture légumes sautée",
    "price": "45dh",
    "category": "Plats gourmands",
    "image": ""
  },
  {
    "id": "pg3",
    "name": "Pasticcio Poulet",
    "description": "",
    "price": "37dh",
    "category": "Plats gourmands",
    "image": ""
  },
  {
    "id": "pg4",
    "name": "Pasticcio Dinde Fumé",
    "description": "",
    "price": "32dh",
    "category": "Plats gourmands",
    "image": ""
  },
  {
    "id": "pa1",
    "name": "ALFREDO",
    "description": "Poulet champignon fromage",
    "price": "48dh",
    "category": "Pâtes",
    "image": ""
  },
  {
    "id": "pa2",
    "name": "NAPOLITAINE",
    "description": "Sauce pistou",
    "price": "48dh",
    "category": "Pâtes",
    "image": ""
  },
  {
    "id": "pa3",
    "name": "BOLOGNAISE",
    "description": "",
    "price": "42dh",
    "category": "Pâtes",
    "image": ""
  },
  {
    "id": "pa4",
    "name": "CARBONARA",
    "description": "",
    "price": "52dh",
    "category": "Pâtes",
    "image": ""
  },
  {
    "id": "pa5",
    "name": "LASAGNE BOLONAISE",
    "description": "",
    "price": "68dh",
    "category": "Pâtes",
    "image": ""
  },
  {
    "id": "bu1",
    "name": "Burger Furri",
    "description": "Viande hachée, Jambon, Fromage, Tomate, Oignon, Laitue, Sauce blanche Eau minérale",
    "price": "45dh",
    "category": "Burger",
    "image": ""
  },
  {
    "id": "bu2",
    "name": "Burger Viande hachée",
    "description": "Viande hachée, laitue, Fromage, Tomate, Oignon, Laitue",
    "price": "45dh",
    "category": "Burger",
    "image": ""
  },
  {
    "id": "bu3",
    "name": "Chiken Burger",
    "description": "Poulet haché, Fromage, tomate, oignon, Laitue + Soda ou Eau minérale",
    "price": "40dh",
    "category": "Burger",
    "image": ""
  },
  {
    "id": "bu4",
    "name": "Chiken kids Burger (mini burger)",
    "description": "Poulet haché, Fromage, Tomate, Oignon, Laitue",
    "price": "35dh",
    "category": "Burger",
    "image": ""
  },
  {
    "id": "bu5",
    "name": "Beef Kids Burger (mini burger)",
    "description": "Viande hachée, Fromage, Tomate, Laitue",
    "price": "38dh",
    "category": "Burger",
    "image": ""
  },
  {
    "id": "sw1",
    "name": "Sandwich Thon (froids)",
    "description": "Oignon, laitue, tomate, fromage, sauce fraicheur",
    "price": "35dh",
    "category": "Sandwich",
    "image": ""
  },
  {
    "id": "sw2",
    "name": "Sandwich Jambon (froids)",
    "description": "Laitue, tomate, fromage, sauce, mayonaise,moutarde",
    "price": "35dh",
    "category": "Sandwich",
    "image": ""
  },
  {
    "id": "sw3",
    "name": "Sandwich viande hachée (chauds)",
    "description": "Viande hachée, fromage, tomate, laitue sauce fromage créme",
    "price": "45dh",
    "category": "Sandwich",
    "image": ""
  },
  {
    "id": "sw4",
    "name": "Sandwich Poulet (chauds)",
    "description": "Poulet, tomate, laitue, oignon, olives verts, sauce, pistou",
    "price": "40dh",
    "category": "Sandwich",
    "image": ""
  },
  {
    "id": "pz1",
    "name": "MARGHERITA",
    "description": "Sauce tomate, fromage, Olives noires poivrons, oignon, mozzarella",
    "price": "30dh",
    "category": "Pizza",
    "image": ""
  },
  {
    "id": "pz2",
    "name": "THON",
    "description": "Sauce tomate, fromage, thon,oignon, olives noires, poivrons, mozzarella",
    "price": "35dh",
    "category": "Pizza",
    "image": ""
  },
  {
    "id": "pz3",
    "name": "POULET",
    "description": "Sauce tomate, fromage, poulet,oignon, olives noires, poivrons, mozzarella",
    "price": "40dh",
    "category": "Pizza",
    "image": ""
  },
  {
    "id": "pz4",
    "name": "VIANDE HACHÉE",
    "description": "Sauce tomate, fromage, viande hachée oignon, olives noires, poivrons, mozzarella",
    "price": "45dh",
    "category": "Pizza",
    "image": ""
  },
  {
    "id": "pz5",
    "name": "QUATRE SAISONS",
    "description": "Sauce tomate, fromage, poulet, viande hachée, charcuterie, hotdog, thon, oignon, olives noires, poivrons, mozzarella",
    "price": "50dh",
    "category": "Pizza",
    "image": ""
  }
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
    author: 'RXF BEN',    rating: 5,
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
