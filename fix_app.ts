import { readFileSync, writeFileSync } from 'fs';

const path = 'src/App.tsx';
let content = readFileSync(path, 'utf8');

// Add import
content = content.replace(
  /import MenuSection from '\.\/components\/Menu';/,
  `import MenuSection from './components/Menu';\nimport LoyaltySection from './components/LoyaltySection';`
);

// Add component below MenuSection
content = content.replace(
  /<MenuSection \/>/,
  `<MenuSection />\n          <LoyaltySection />`
);

writeFileSync(path, content);
