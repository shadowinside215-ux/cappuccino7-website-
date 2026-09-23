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
    "id": "boi1",
    "name": "Lait chaude",
    "description": "",
    "price": "14dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi2",
    "name": "Espresso",
    "description": "",
    "price": "14dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi3",
    "name": "Café americain",
    "description": "",
    "price": "15dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi4",
    "name": "Lait parfumé",
    "description": "",
    "price": "14dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi5",
    "name": "Café créme",
    "description": "",
    "price": "15dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi6",
    "name": "Nespresso",
    "description": "",
    "price": "15dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi7",
    "name": "Latté Macchiato",
    "description": "",
    "price": "16dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi8",
    "name": "Double Espresso",
    "description": "",
    "price": "18dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi9",
    "name": "Cappuccino Italien",
    "description": "",
    "price": "18dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi10",
    "name": "Chocolat chaud",
    "description": "",
    "price": "18dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi11",
    "name": "Cappuccino viennois",
    "description": "",
    "price": "25dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "boi12",
    "name": "Café au miel",
    "description": "",
    "price": "18dh",
    "category": "Les boissons",
    "image": ""
  },
  {
    "id": "the1",
    "name": "Thé à la menthe",
    "description": "",
    "price": "14dh",
    "category": "Thé & infusions",
    "image": ""
  },
  {
    "id": "the2",
    "name": "Lipton",
    "description": "",
    "price": "14dh",
    "category": "Thé & infusions",
    "image": ""
  },
  {
    "id": "the3",
    "name": "Verviene",
    "description": "",
    "price": "14dh",
    "category": "Thé & infusions",
    "image": ""
  },
  {
    "id": "the4",
    "name": "Infusion thé bio",
    "description": "",
    "price": "16dh",
    "category": "Thé & infusions",
    "image": ""
  },
  {
    "id": "shd1",
    "name": "Mocaccino",
    "description": "",
    "price": "20dh",
    "category": "Special hot drinks",
    "image": ""
  },
  {
    "id": "shd2",
    "name": "Noisette Macchiato",
    "description": "",
    "price": "20dh",
    "category": "Special hot drinks",
    "image": ""
  },
  {
    "id": "shd3",
    "name": "Caramel Macchiato",
    "description": "",
    "price": "22dh",
    "category": "Special hot drinks",
    "image": ""
  },
  {
    "id": "shd4",
    "name": "Chocolat viennois",
    "description": "",
    "price": "22dh",
    "category": "Special hot drinks",
    "image": ""
  },
  {
    "id": "shd5",
    "name": "Chocolat Fondu",
    "description": "",
    "price": "28dh",
    "category": "Special hot drinks",
    "image": ""
  },
  {
    "id": "shd6",
    "name": "Chocolat Bresilien",
    "description": "",
    "price": "30dh",
    "category": "Special hot drinks",
    "image": ""
  },
  {
    "id": "ild1",
    "name": "Caramel & cream",
    "description": "",
    "price": "25dh",
    "category": "Iced latté",
    "image": ""
  },
  {
    "id": "ild2",
    "name": "Noisette",
    "description": "",
    "price": "25dh",
    "category": "Iced latté",
    "image": ""
  },
  {
    "id": "ild3",
    "name": "Happy moka",
    "description": "",
    "price": "25dh",
    "category": "Iced latté",
    "image": ""
  },
  {
    "id": "jus1",
    "name": "Orange",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus2",
    "name": "Citron",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus3",
    "name": "Carotte",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus4",
    "name": "Pomme",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus5",
    "name": "Banane",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus6",
    "name": "Mangue",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus7",
    "name": "Fraise",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus8",
    "name": "Ananas",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus9",
    "name": "Kiwi",
    "description": "",
    "price": "25dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus10",
    "name": "Panaché",
    "description": "",
    "price": "35dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus11",
    "name": "Avocat fruits secs",
    "description": "",
    "price": "30dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "jus12",
    "name": "Zaazaa",
    "description": "",
    "price": "48dh",
    "category": "Jus",
    "image": ""
  },
  {
    "id": "frap1",
    "name": "Caramel & Cream",
    "description": "",
    "price": "35dh",
    "category": "Frappuccinos coffee",
    "image": ""
  },
  {
    "id": "frap2",
    "name": "Caramel Beurre salé",
    "description": "",
    "price": "35dh",
    "category": "Frappuccinos coffee",
    "image": ""
  },
  {
    "id": "frap3",
    "name": "Moka Chocolate",
    "description": "",
    "price": "35dh",
    "category": "Frappuccinos coffee",
    "image": ""
  },
  {
    "id": "frap4",
    "name": "Noisette",
    "description": "",
    "price": "35dh",
    "category": "Frappuccinos coffee",
    "image": ""
  },
  {
    "id": "frap5",
    "name": "Amaretto",
    "description": "",
    "price": "35dh",
    "category": "Frappuccinos coffee",
    "image": ""
  },
  {
    "id": "milk1",
    "name": "Carmel Shake",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "milk2",
    "name": "Orange shake",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "milk3",
    "name": "Mixed berries (fruits rouges)",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "milk4",
    "name": "Mango Alphonso",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "milk5",
    "name": "Chocolat Oreo",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "milk6",
    "name": "Fruit dela passion",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "milk7",
    "name": "Fraise",
    "description": "",
    "price": "40dh",
    "category": "Milkshakes",
    "image": ""
  },
  {
    "id": "smooth1",
    "name": "Detox Maison",
    "description": "Betterave,pomme,gingembre,feuilles de menthe et orange",
    "price": "35dh",
    "category": "Smoothies",
    "image": ""
  },
  {
    "id": "smooth2",
    "name": "Berry Explosion",
    "description": "Blue berry,Fraise,Yaourt et menthe",
    "price": "35dh",
    "category": "Smoothies",
    "image": ""
  },
  {
    "id": "smooth3",
    "name": "Mango Madness",
    "description": "Mangue,Banane,yaourt et passion",
    "price": "35dh",
    "category": "Smoothies",
    "image": ""
  },
  {
    "id": "smooth4",
    "name": "Tropical paradise",
    "description": "Ananas,pêche,passion et yaourt",
    "price": "35dh",
    "category": "Smoothies",
    "image": ""
  },
  {
    "id": "moj1",
    "name": "Classique",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj2",
    "name": "Mango mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj3",
    "name": "Berries mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj4",
    "name": "Passion mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj5",
    "name": "Ananas mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj6",
    "name": "Blue mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj7",
    "name": "Concomre mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "moj8",
    "name": "Starwberry mojito",
    "description": "",
    "price": "25dh",
    "category": "Mojitos",
    "image": ""
  },
  {
    "id": "gauf1",
    "name": "Caramel",
    "description": "",
    "price": "30dh",
    "category": "Gaufres",
    "image": ""
  },
  {
    "id": "gauf2",
    "name": "Miel & Noix",
    "description": "",
    "price": "30dh",
    "category": "Gaufres",
    "image": ""
  },
  {
    "id": "gauf3",
    "name": "Nutella",
    "description": "",
    "price": "35dh",
    "category": "Gaufres",
    "image": ""
  },
  {
    "id": "gauf4",
    "name": "Miel aux fruits secs",
    "description": "",
    "price": "49dh",
    "category": "Gaufres",
    "image": ""
  },
  {
    "id": "panc1",
    "name": "Caramel",
    "description": "",
    "price": "30dh",
    "category": "Pancakes",
    "image": ""
  },
  {
    "id": "panc2",
    "name": "Miel & Noix",
    "description": "",
    "price": "30dh",
    "category": "Pancakes",
    "image": ""
  },
  {
    "id": "panc3",
    "name": "Nutella",
    "description": "",
    "price": "35dh",
    "category": "Pancakes",
    "image": ""
  },
  {
    "id": "panc4",
    "name": "Miel aux fruits secs",
    "description": "",
    "price": "49dh",
    "category": "Pancakes",
    "image": ""
  },
  {
    "id": "aft1",
    "name": "Formule Patisserie",
    "description": "Patisserie avec une Boisson chaude au choix",
    "price": "35dh",
    "category": "Afternoon Tea",
    "image": ""
  },
  {
    "id": "aft2",
    "name": "Formule Beldi",
    "description": "Beghri avec Amlou et une Boisson chaude au choix",
    "price": "35dh",
    "category": "Afternoon Tea",
    "image": ""
  },
  {
    "id": "aft3",
    "name": "Formule Crêpe sucrée",
    "description": "Crêpe Nutella avec une Boisson chaude au choix",
    "price": "40dh",
    "category": "Afternoon Tea",
    "image": ""
  },
  {
    "id": "aft4",
    "name": "Formule Crêpe Salée",
    "description": "Cêpe Dinde fumée avec une Boisson chaude au choix",
    "price": "48dh",
    "category": "Afternoon Tea",
    "image": ""
  },
  {
    "id": "aft5",
    "name": "Formule Gourmet",
    "description": "Cêpe Poulet Champignon avec une Boisson chaude au choix",
    "price": "55dh",
    "category": "Afternoon Tea",
    "image": ""
  },
  {
    "id": "ft1",
    "name": "Formule Ghriyba",
    "description": "Ghriyba avec 2 Fequasse avec une Boisson chaude au choix",
    "price": "25dh",
    "category": "Formule Tea",
    "image": ""
  },
  {
    "id": "ft2",
    "name": "Formule Cake",
    "description": "Cacke fait maison avec une Boisson chaude au choix",
    "price": "25dh",
    "category": "Formule Tea",
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
