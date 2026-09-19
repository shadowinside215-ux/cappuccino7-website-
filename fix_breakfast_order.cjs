const fs = require('fs');

let content = fs.readFileSync('src/constants.ts', 'utf-8');

const newMenuItems = `export const MENU_ITEMS: MenuItem[] = [
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
  },`;

const brunchIdx = content.indexOf('"category": "Brunch"');
const brunchStart = content.lastIndexOf('{', brunchIdx);

const endPart = content.substring(brunchStart);
const menuItemsStart = content.indexOf('export const MENU_ITEMS: MenuItem[] = [');

const newContent = content.substring(0, menuItemsStart) + newMenuItems + '\n  ' + endPart;
fs.writeFileSync('src/constants.ts', newContent);
console.log('Breakfast order fixed!');
