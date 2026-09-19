const fs = require('fs');

let content = fs.readFileSync('src/constants.ts', 'utf-8');

// Let's rewrite MENU_ITEMS cleanly in src/constants.ts
const newMenuItems = `export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "b5",
    "name": "Ftour Chamali",
    "description": "Oeufs brouillés avec charcuterie et fromage blan, Panier de pain, Jus d'orange, Belboula, Boisson chaude au choix, Eau minérale.",
    "price": "48dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b7",
    "name": "Cappuccino7 Breakfast",
    "description": "croque Monsieur, Hotdog, Fromage blanc, (salade verte, tomate et maïs), Crêpes Nutella, salade fruits, jus d'orange, Belboula, Boisson chaude au choix, Eau ménirale.",
    "price": "68dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b9",
    "name": "Turkie",
    "description": "Oeufs au plat, Fromage Rouge, Fromage Blanc, Fromage Cheddar, Concombre, Salade Tomate, olives, hu ile d'olives,jambon, beurre, confiture, pain, Jus d'orange, Balboula, Boisson chaude au choix, Eau minerale.",
    "price": "68dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b1",
    "name": "Occidental",
    "description": "Deux viennoiseries, Jus d'orange, Balboula, Boisson chaude au choix, Eau minérale.",
    "price": "38dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b2",
    "name": "Amazigh",
    "description": "Beghrir, Harcha, Meloui, Betbout, Amlou, Fromage, Miel, Jus d'orange, Balboula, Boisson chaude au choix, Eau minérale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b4",
    "name": "Ftour Fassi",
    "description": "Oeufs au khlii, Huile d'olive, Olives noires, Panier de pain, Jus d'orange, Belboula, Boisson chaude au choix,Eau minérale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b8",
    "name": "Healthy Breakfast",
    "description": "Toast a la puree d'avocat et oeufs, Bol d'avoie à la bana ne, chia et fruits secs, Assortiment de fruits de saison, yaourt, Jus d'orane, Balboula, Boisson chaude au choix, Eau minerale.",
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
  },`;

// Find where Brunch starts in original content
const brunchIdx = content.indexOf('"category": "Brunch"');
const brunchStart = content.lastIndexOf('{', brunchIdx);

const endPart = content.substring(brunchStart);

// Also find where MENU_ITEMS starts
const menuItemsStart = content.indexOf('export const MENU_ITEMS: MenuItem[] = [');

const newContent = content.substring(0, menuItemsStart) + newMenuItems + '\n  ' + endPart;

fs.writeFileSync('src/constants.ts', newContent);
console.log('constants.ts cleaned up successfully!');
