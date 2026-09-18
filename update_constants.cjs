const fs = require('fs');

let text = fs.readFileSync('src/constants.ts', 'utf-8');

// I will just replace the entire MENU_ITEMS array with the full menu from the PDF!
