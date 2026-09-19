const fs = require('fs');

let content = fs.readFileSync('src/constants.ts', 'utf-8');

// We want to replace the breakfast items at the start of MENU_ITEMS with the exact user requested order and descriptions.
const newBreakfastItems = `  {
    "id": "b_chamali",
    "name": "Ftour Chamali",
    "description": "Œufs brouillés avec charcuterie et fromage blanc, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "48dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b_capp7",
    "name": "Cappuccino7 Breakfast",
    "description": "Croque monsieur, hotdog, fromage blanc, salade (verte, tomate, maïs), crêpe Nutella, salade de fruits, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "68dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b_turkie",
    "name": "Turkie",
    "description": "Œufs au plat brouillés, hash browns, tomate grillée.",
    "price": "68dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b_occidental",
    "name": "Occidental",
    "description": "Deux viennoiseries, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "38dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b_amazigh",
    "name": "Amazigh",
    "description": "Beghrir, harcha, meloui, betbout, amlou, fromage, miel, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b_fassi",
    "name": "Ftour Fassi",
    "description": "Œufs au khlii, huile d’olive, olives noires, panier de pain, jus d'orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "45dh",
    "category": "Breakfast",
    "image": ""
  },
  {
    "id": "b_healthy",
    "name": "Healthy Breakfast",
    "description": "Toast avocat & œufs, bol d’avoine (banane, chia, fruits secs), fruits de saison, yaourt, jus d’orange, balboula, boisson chaude au choix, eau minérale.",
    "price": "60dh",
    "category": "Breakfast",
    "image": ""
  },`;

// Find where MENU_ITEMS starts and replace the existing breakfast items or insert them at the top of MENU_ITEMS
const startIndex = content.indexOf('export const MENU_ITEMS: MenuItem[] = [');
if (startIndex !== -1) {
  const bracketIndex = content.indexOf('[', startIndex);
  // Let's insert right after the opening bracket
  const before = content.substring(0, bracketIndex + 1);
  const after = content.substring(bracketIndex + 1);
  
  // Also keep the other breakfast items (like Gourmand, Omlette spéciale, Anglais) if needed, or replace b1 to b10
  // Let's find where category != Breakfast or after the first 10 items
  // Actually let's just replace all breakfast items from b1 to b10 with these 7 plus Gourmand, Omlette spéciale, Anglais at the end of Breakfast category.
  
  // Let's inspect the exact substring from bracketIndex to the end of breakfast items
  // Or we can just rewrite MENU_ITEMS cleanly. Let's do a clean replacement of the breakfast items block.
  
  // Let's find the end of the Breakfast items (before category: "Brunch")
  const brunchIndex = content.indexOf('"category": "Brunch"');
  // We can replace everything from the start of MENU_ITEMS up to before "Brunch"
  const brunchItemStart = content.lastIndexOf('{', brunchIndex);
  
  const rest = content.substring(brunchItemStart);
  
  const updated = before + '\n' + newBreakfastItems + '\n' + rest;
  fs.writeFileSync('src/constants.ts', updated);
  console.log('Constants updated successfully!');
} else {
  console.error('Could not find MENU_ITEMS');
}
