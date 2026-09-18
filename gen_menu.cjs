const fs = require('fs');

const menuItems = [
  // BREAKFAST
  { id: 'b1', name: 'Occidental', description: "Deux viennoiseries, Jus d'orange, Balboula, Boisson chaude au choix, Eau minérale.", price: '38dh', category: 'Breakfast', image: '' },
  { id: 'b2', name: 'Amazigh', description: "Beghrir, Harcha, Meloui, Betbout, Amlou, Fromage, Miel, Jus d'orange, Balboula, Boisson chaude au choix, Eau minérale.", price: '45dh', category: 'Breakfast', image: '' },
  { id: 'b3', name: 'Gourmand', description: "Oeufs au plat brouilés avec ou sans fromage, panier de pain, jus d'orange, Belboula, Boisson chaude au choix, Eau ménirale.", price: '45dh', category: 'Breakfast', image: '' },
  { id: 'b4', name: 'Ftour Fassi', description: "Oeufs au khlii, Huile d'olive, Olives noires, Panier de pain, Jus d'orange, Belboula, Boisson chaude au choix,Eau minérale.", price: '58dh', category: 'Breakfast', image: '' },
  { id: 'b5', name: 'Ftour Chamali', description: "Oeufs brouillés avec charcuterie et fromage blan, Panier de pain, Jus d'orange, Belboula, Boisson chaude au choix, Eau minérale.", price: '48dh', category: 'Breakfast', image: '' },
  { id: 'b6', name: 'Omlette spéciale', description: "Oeufs brouillés avec tomate cerise, Oignons, Dinde fumée, panier de pain, jus d'orange, Belboula, Boisson chaude au choix, Eau ménirale.", price: '48dh', category: 'Breakfast', image: '' },
  { id: 'b7', name: 'Cappuccino7 Breakfast', description: "croque Monsieur, Hotdog, Fromage blanc, (salade verte, tomate et maïs), Crêpes Nutella, salade fruits, jus d'orange, Belboula, Boisson chaude au choix, Eau ménirale.", price: '68dh', category: 'Breakfast', image: '' },
  { id: 'b8', name: 'Healthy Breakfast', description: "Toast a la puree d'avocat et oeufs, Bol d'avoie à la bana ne, chia et fruits secs, Assortiment de fruits de saison, yaourt, Jus d'orane, Balboula, Boisson chaude au choix, Eau minerale.", price: '60dh', category: 'Breakfast', image: '' },
  { id: 'b9', name: 'Turkie', description: "Oeufs au plat, Fromage Rouge, Fromage Blanc, Fromage Cheddar, Concombre, Salade Tomate, olives, hu ile d'olives,jambon, beurre, confiture, pain, Jus d'orange, Balboula, Boisson chaude au choix, Eau minerale.", price: '68dh', category: 'Breakfast', image: '' },
  { id: 'b10', name: 'Anglais', description: "Oeufs au plat brouilles, Hash brownes, Tomate grille, Boul des haricots, Fromage, dinde fumee,champignion saute, pain grille, saucice, sa iade fruits, salade variee,jus d'orange, yaourt, eau minerale, Boisson chaude au choix", price: '85dh', category: 'Breakfast', image: '' },
  
  // BRUNCH
  { id: 'br1', name: 'Brunch (1 personne)', description: "Omlette plat, plat grillardes ( brochette de saucisses), Panier de pain, Beghrir, Harcha, Meloui, Betbout, Miel, Amlou, Huile d'olive, Fromage, dnde fumee, luncheon, olives noires, confiture, beurre, Jus d'orange, sa iade de fruits, pancakenutella, Yaourt, Boisson chaude au choix, Eau minerale", price: '87dh', category: 'Brunch', image: '' },
  { id: 'br2', name: 'Brunch (2 personne)', description: "Omlette plat, plat grillardes ( brochette de saucisses), Panier de pain, Beghrir, Harcha, Meloui, Betbout, Miel, Amlou, Huile d'olive, Fromage, dnde fumee, luncheon, olives noires, confiture, beurre, Jus d'orange, sa iade de fruits, pancakenutella, Yaourt, Boisson chaude au choix, Eau minerale", price: '150dh', category: 'Brunch', image: '' },
  
  // PETITES FAIMS
  { id: 'pf1', name: 'Omlette nature', description: '', price: '20dh', category: 'Petites faims', image: '' },
  { id: 'pf2', name: 'Omlette Fromage', description: '', price: '25dh', category: 'Petites faims', image: '' },
  { id: 'pf3', name: 'Omlette Fromage Champignion', description: '', price: '28dh', category: 'Petites faims', image: '' },
  { id: 'pf4', name: 'Beghrir Amlou', description: '', price: '30dh', category: 'Petites faims', image: '' },
  { id: 'pf5', name: 'Croque Monsieur', description: '', price: '35dh', category: 'Petites faims', image: '' },
  { id: 'pf6', name: 'Croque Madame', description: '', price: '35dh', category: 'Petites faims', image: '' },

  // LES EXTRAS
  { id: 'ex1', name: 'Eau minérale', description: '', price: '5dh', category: 'Les extras', image: '' },
  { id: 'ex2', name: 'Dinde fumée', description: '', price: '15dh', category: 'Les extras', image: '' },
  { id: 'ex3', name: 'Amlou', description: '', price: '10dh', category: 'Les extras', image: '' },
  { id: 'ex4', name: 'Nutella', description: '', price: '12dh', category: 'Les extras', image: '' },
  { id: 'ex5', name: 'Confiture et miel', description: '', price: '10dh', category: 'Les extras', image: '' },
  { id: 'ex6', name: 'Jben', description: '', price: '10dh', category: 'Les extras', image: '' },
  { id: 'ex7', name: 'Fromage rouge', description: '', price: '15dh', category: 'Les extras', image: '' },
  { id: 'ex8', name: 'Huile d\'olive', description: '', price: '10dh', category: 'Les extras', image: '' },

  // LES BOISSONS
  { id: 'lb1', name: 'Lait chaude', description: '', price: '14dh', category: 'Les boissons', image: '' },
  { id: 'lb2', name: 'Espresso', description: '', price: '14dh', category: 'Les boissons', image: '' },
  { id: 'lb3', name: 'Café americain', description: '', price: '15dh', category: 'Les boissons', image: '' },
  { id: 'lb4', name: 'Lait parfumé', description: '', price: '14dh', category: 'Les boissons', image: '' },
  { id: 'lb5', name: 'Café créme', description: '', price: '15dh', category: 'Les boissons', image: '' },
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
  { id: 'ti3', name: 'Verviene', description: '', price: '14dh', category: 'Thé & infusions', image: '' },
  { id: 'ti4', name: 'Infusion thé bio', description: '', price: '16dh', category: 'Thé & infusions', image: '' },

  // SPECIAL HOT DRINKS
  { id: 'shd1', name: 'Mocaccino', description: '', price: '20dh', category: 'Special hot drinks', image: '' },
  { id: 'shd2', name: 'Noisette Macchiato', description: '', price: '20dh', category: 'Special hot drinks', image: '' },
  { id: 'shd3', name: 'Caramel Macchiato', description: '', price: '22dh', category: 'Special hot drinks', image: '' },
  { id: 'shd4', name: 'Chocolat viennois', description: '', price: '22dh', category: 'Special hot drinks', image: '' },
  { id: 'shd5', name: 'Chocolat Fondu', description: '', price: '28dh', category: 'Special hot drinks', image: '' },
  { id: 'shd6', name: 'Chocolat Bresilien', description: '', price: '30dh', category: 'Special hot drinks', image: '' },

  // ICED LATTÉ
  { id: 'il1', name: 'Caramel & cream', description: '', price: '25dh', category: 'Iced latté', image: '' },
  { id: 'il2', name: 'Noisette', description: '', price: '25dh', category: 'Iced latté', image: '' },
  { id: 'il3', name: 'Happy moka', description: '', price: '25dh', category: 'Iced latté', image: '' },

  // ICE TEA
  { id: 'it1', name: 'Pêche', description: '', price: '30dh', category: 'Ice Tea', image: '' },
  { id: 'it2', name: 'Citron', description: '', price: '30dh', category: 'Ice Tea', image: '' },
  { id: 'it3', name: 'Framboise', description: '', price: '30dh', category: 'Ice Tea', image: '' },

  // JUS
  { id: 'j1', name: 'Orange', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j2', name: 'Citron', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j3', name: 'Carotte', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j4', name: 'Pomme', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j5', name: 'Banane', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j6', name: 'Mangue', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j7', name: 'Fraise', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j8', name: 'Ananas', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j9', name: 'Kiwi', description: '', price: '25dh', category: 'Jus', image: '' },
  { id: 'j10', name: 'Panaché', description: '', price: '35dh', category: 'Jus', image: '' },
  { id: 'j11', name: 'Avocat fruits secs', description: '', price: '30dh', category: 'Jus', image: '' },
  { id: 'j12', name: 'Zaazaa', description: '', price: '48dh', category: 'Jus', image: '' },

  // FRAPPUCCINOS COFFEE
  { id: 'fc1', name: 'Caramel & Cream', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc2', name: 'Caramel Beurre salé', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc3', name: 'Moka Chocolate', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc4', name: 'Noisette', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },
  { id: 'fc5', name: 'Amaretto', description: '', price: '35dh', category: 'Frappuccinos coffee', image: '' },

  // MILKSHAKES
  { id: 'ms1', name: 'Carmel Shake', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms2', name: 'Orange shake', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms3', name: 'Mixed berries(fruits rouges)', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms4', name: 'Mango Alphonso', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms5', name: 'Chocolat Oreo', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms6', name: 'Fruit dela passion', description: '', price: '40dh', category: 'Milkshakes', image: '' },
  { id: 'ms7', name: 'Fraise', description: '', price: '40dh', category: 'Milkshakes', image: '' },

  // SMOOTHIES
  { id: 'sm1', name: 'Detox Maison', description: 'Betterave, pomme, gingembre, feuilles de menthe et orange', price: '35dh', category: 'Smoothies', image: '' },
  { id: 'sm2', name: 'Berry Explosion', description: 'Blue berry, Fraise, Yaourt et menthe', price: '35dh', category: 'Smoothies', image: '' },
  { id: 'sm3', name: 'Mango Madness', description: 'Mangue, Banane, yaourt et passion', price: '35dh', category: 'Smoothies', image: '' },
  { id: 'sm4', name: 'Tropical paradise', description: 'Ananas, pêche, passion et yaourt', price: '35dh', category: 'Smoothies', image: '' },

  // MOJITOS
  { id: 'mo1', name: 'Classique', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo2', name: 'Mango mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo3', name: 'Berries mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo4', name: 'Passion mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo5', name: 'Ananas mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo6', name: 'Blue mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo7', name: 'Concomre mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },
  { id: 'mo8', name: 'Starwberry mojito', description: '', price: '25dh', category: 'Mojitos', image: '' },

  // CRÊPE SALÉES
  { id: 'csa1', name: 'Fromage', description: 'Mozzarella et fromage rouge', price: '42dh', category: 'Crêpe salées', image: '' },
  { id: 'csa2', name: 'Dinde fumée', description: 'Sauce blanche, dinde fumée, fromage', price: '48dh', category: 'Crêpe salées', image: '' },
  { id: 'csa3', name: 'Poulet Champignon', description: 'Sauce champignon, poulet, fromage', price: '54dh', category: 'Crêpe salées', image: '' },

  // CRÊPE SUCRÉES
  { id: 'csu1', name: 'Nature', description: '', price: '20dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu2', name: 'Confiture', description: '', price: '25dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu3', name: 'Nutella', description: '', price: '30dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu4', name: 'Nutella et Banane', description: '', price: '37dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu5', name: 'Miel & Noix', description: '', price: '35dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu6', name: 'Royal', description: 'Caramel & fruits secs & créme chantilly', price: '40dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu7', name: 'Exotique', description: '', price: '48dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu8', name: 'Brésilienne', description: '', price: '48dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu9', name: 'Brésilienne Nutella Banane', description: 'Boule de glace vanille', price: '48dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu10', name: 'Cappuccino7 Nutella', description: 'Boule de glace au choix, Oréo, Kitkat, Noix', price: '52dh', category: 'Crêpe sucrées', image: '' },
  { id: 'csu11', name: 'Miel et fruit sec', description: '', price: '49dh', category: 'Crêpe sucrées', image: '' },

  // PANCAKES
  { id: 'pan1', name: 'Caramel', description: '', price: '30dh', category: 'Pancakes', image: '' },
  { id: 'pan2', name: 'Miel & Noix', description: '', price: '30dh', category: 'Pancakes', image: '' },
  { id: 'pan3', name: 'Nutella', description: '', price: '35dh', category: 'Pancakes', image: '' },
  { id: 'pan4', name: 'Miel aux fruits secs', description: '', price: '49dh', category: 'Pancakes', image: '' },

  // GAUFRES
  { id: 'ga1', name: 'Caramel', description: '', price: '30dh', category: 'Gaufres', image: '' },
  { id: 'ga2', name: 'Miel & Noix', description: '', price: '30dh', category: 'Gaufres', image: '' },
  { id: 'ga3', name: 'Nutella', description: '', price: '35dh', category: 'Gaufres', image: '' },
  { id: 'ga4', name: 'Miel aux fruits secs', description: '', price: '49dh', category: 'Gaufres', image: '' },

  // AFTERNOON TEA
  { id: 'at1', name: 'Formule Patisserie', description: 'Patisserie avec une Boisson chaude au choix', price: '35dh', category: 'Afternoon Tea', image: '' },
  { id: 'at2', name: 'Formule Beldi', description: 'Beghri avec Amlou et une Boisson chaude au choix', price: '35dh', category: 'Afternoon Tea', image: '' },
  { id: 'at3', name: 'Formule Crêpe sucrée', description: 'Crêpe Nutella avec une Boisson chaude au choix', price: '40dh', category: 'Afternoon Tea', image: '' },
  { id: 'at4', name: 'Formule Crêpe Salée', description: 'Cêpe Dinde fumée avec une Boisson chaude au choix', price: '48dh', category: 'Afternoon Tea', image: '' },
  { id: 'at5', name: 'Formule Gourmet', description: 'Cêpe Poulet Champignon avec une Boisson chaude au choix', price: '55dh', category: 'Afternoon Tea', image: '' },

  // FORMULE TEA
  { id: 'ft1', name: 'Formule Ghriyba', description: 'Ghriyba avec 2 Fequasse avec une Boisson chaude au choix', price: '25dh', category: 'Formule Tea', image: '' },
  { id: 'ft2', name: 'Formule Cacke', description: 'Cacke fait maison avec une Boisson chaude au choix', price: '25dh', category: 'Formule Tea', image: '' },

  // ICE-CREAM
  { id: 'ic1', name: 'Une Boule', description: '', price: '18 dh', category: 'Ice-cream', image: '' },
  { id: 'ic2', name: 'Deux Boule', description: '', price: '32 dh', category: 'Ice-cream', image: '' },
  { id: 'ic3', name: 'Trois Boule', description: '', price: '45 dh', category: 'Ice-cream', image: '' },
  { id: 'ic4', name: 'Coupe Banana Split', description: '4 boules au choix, Biscuit, Oreo, Topping au choix', price: '55 dh', category: 'Ice-cream', image: '' },
  { id: 'ic5', name: 'Coupe Cappuccino7', description: '4 boules au choix, Biscuit, Oreo, Topping au choix', price: '65 dh', category: 'Ice-cream', image: '' },

  // PATISSERIE
  { id: 'pt1', name: 'Patisserie', description: 'Voir notre plateau', price: 'à partir de 25dh', category: 'Patisserie', image: '' },

  // SALADES
  { id: 'sa1', name: 'Salade Marocaine', description: 'Concombre, Tomates, Laitue, Oignon', price: '35dh', category: 'Salades', image: '' },
  { id: 'sa2', name: 'Salade Thon', description: 'Assortiment de salade, Thon, Maïs, Tomates, Oignon', price: '40dh', category: 'Salades', image: '' },
  { id: 'sa3', name: 'Salade Royale', description: 'Laitue, Avocat, Crevettes, Tomates, Oignon, Persil, Jus de Citron', price: '55dh', category: 'Salades', image: '' },
  { id: 'sa4', name: 'Salade Niçoise', description: 'Laitue, Riz, Oeuf, Maïs, Olives noir, Thon, tomates, Concombre, Carote, Pomme de terre Beterave', price: '42dh', category: 'Salades', image: '' },
  { id: 'sa5', name: 'Salade du Chef', description: 'Avocat, tomate cerise, Laitue, surimi, Maïs, champignons, Fromage, Croûtons, Poulet, sauce chef', price: '65dh', category: 'Salades', image: '' },

  // PLATS GOURMANDS
  { id: 'pg1', name: 'Émincé de Boeuf', description: 'Boeuf avec sauce du chef et garniture légumes sautee', price: '55dh', category: 'Plats gourmands', image: '' },
  { id: 'pg2', name: 'Émincé de Poulet', description: 'Poulet avec créme champignons et garniture légumes sautée', price: '45dh', category: 'Plats gourmands', image: '' },
  { id: 'pg3', name: 'Pasticcio Poulet', description: '', price: '37dh', category: 'Plats gourmands', image: '' },
  { id: 'pg4', name: 'Pasticcio Dinde Fumé', description: '', price: '32dh', category: 'Plats gourmands', image: '' },

  // TAGLIATÉLLE SPAGHETTI PENNÉ
  { id: 'pa1', name: 'ALFREDO', description: 'Poulet champignon fromage', price: '48dh', category: 'Pâtes', image: '' },
  { id: 'pa2', name: 'NAPOLITAINE', description: 'Sauce pistou', price: '48dh', category: 'Pâtes', image: '' },
  { id: 'pa3', name: 'BOLOGNAISE', description: '', price: '42dh', category: 'Pâtes', image: '' },
  { id: 'pa4', name: 'CARBONARA', description: '', price: '52dh', category: 'Pâtes', image: '' },
  { id: 'pa5', name: 'LASAGNE BOLONAISE', description: '', price: '68dh', category: 'Pâtes', image: '' },

  // BURGER
  { id: 'bu1', name: 'Burger Furri', description: 'Viande hachée, Jambon, Fromage, Tomate, Oignon, Laitue, Sauce blanche Eau minérale', price: '45dh', category: 'Burger', image: '' },
  { id: 'bu2', name: 'Burger Viande hachée', description: 'Viande hachée, laitue, Fromage, Tomate, Oignon, Laitue', price: '45dh', category: 'Burger', image: '' },
  { id: 'bu3', name: 'Chiken Burger', description: 'Poulet haché, Fromage, tomate, oignon, Laitue + Soda ou Eau minérale', price: '40dh', category: 'Burger', image: '' },
  { id: 'bu4', name: 'Chiken kids Burger (mini burger)', description: 'Poulet haché, Fromage, Tomate, Oignon, Laitue', price: '35dh', category: 'Burger', image: '' },
  { id: 'bu5', name: 'Beef Kids Burger (mini burger)', description: 'Viande hachée, Fromage, Tomate, Laitue', price: '38dh', category: 'Burger', image: '' },

  // SANDWICH
  { id: 'sw1', name: 'Sandwich Thon (froids)', description: 'Oignon, laitue, tomate, fromage, sauce fraicheur', price: '35dh', category: 'Sandwich', image: '' },
  { id: 'sw2', name: 'Sandwich Jambon (froids)', description: 'Laitue, tomate, fromage, sauce, mayonaise,moutarde', price: '35dh', category: 'Sandwich', image: '' },
  { id: 'sw3', name: 'Sandwich viande hachée (chauds)', description: 'Viande hachée, fromage, tomate, laitue sauce fromage créme', price: '45dh', category: 'Sandwich', image: '' },
  { id: 'sw4', name: 'Sandwich Poulet (chauds)', description: 'Poulet, tomate, laitue, oignon, olives verts, sauce, pistou', price: '40dh', category: 'Sandwich', image: '' },

  // PIZZA
  { id: 'pz1', name: 'MARGHERITA', description: 'Sauce tomate, fromage, Olives noires poivrons, oignon, mozzarella', price: '30dh', category: 'Pizza', image: '' },
  { id: 'pz2', name: 'THON', description: 'Sauce tomate, fromage, thon,oignon, olives noires, poivrons, mozzarella', price: '35dh', category: 'Pizza', image: '' },
  { id: 'pz3', name: 'POULET', description: 'Sauce tomate, fromage, poulet,oignon, olives noires, poivrons, mozzarella', price: '40dh', category: 'Pizza', image: '' },
  { id: 'pz4', name: 'VIANDE HACHÉE', description: 'Sauce tomate, fromage, viande hachée oignon, olives noires, poivrons, mozzarella', price: '45dh', category: 'Pizza', image: '' },
  { id: 'pz5', name: 'QUATRE SAISONS', description: 'Sauce tomate, fromage, poulet, viande hachée, charcuterie, hotdog, thon, oignon, olives noires, poivrons, mozzarella', price: '50dh', category: 'Pizza', image: '' }
];

let raw = fs.readFileSync('src/constants.ts', 'utf-8');
const startIdx = raw.indexOf('export const MENU_ITEMS: MenuItem[] = [');
const endIdx = raw.indexOf('export const REVIEWS: Review[] = [');

const before = raw.substring(0, startIdx);
const after = raw.substring(endIdx);

const newArrStr = 'export const MENU_ITEMS: MenuItem[] = ' + JSON.stringify(menuItems, null, 2) + ';\n\n';

fs.writeFileSync('src/constants.ts', before + newArrStr + after);
console.log('Done!');
