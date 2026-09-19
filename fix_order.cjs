const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf-8');

app = app.replace(
  `<MenuSection />\n          <LoyaltySection />\n          <Services />\n          <Gallery />\n          <Reviews />`,
  `<MenuSection />\n          <Services />\n          <Gallery />\n          <Reviews />\n          <LoyaltySection />`
);

fs.writeFileSync('src/App.tsx', app);
console.log('Order fixed!');
