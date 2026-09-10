import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Menu.tsx';
let content = readFileSync(path, 'utf8');

// Replace the AnimatePresence block that checks for 'Loyalty'
content = content.replace(
  /\{activeCategory === 'Loyalty' \? \([\s\S]*?\) : \([\s\S]*?filteredItems\.map\(\(item: MenuItem\) => \(\n                <div key=\{item\.id\}>\n                  <MenuCard item=\{item\} \/>\n                <\/div>\n              \)\)\n            \)\}/,
  `{filteredItems.map((item: MenuItem) => (
              <div key={item.id}>
                <MenuCard item={item} />
              </div>
            ))}`
);

// We can also remove `const loyaltyImg = settings?.loyaltyImage || "/input_file_1.png";`
content = content.replace(/const loyaltyImg = settings\?\.loyaltyImage \|\| "\/input_file_1\.png";\n  /, '');

writeFileSync(path, content);
