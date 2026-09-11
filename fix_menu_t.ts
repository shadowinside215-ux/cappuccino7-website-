import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Menu.tsx';
let content = readFileSync(path, 'utf8');

// In MenuCard
content = content.replace(
  /\{item\.name\}/,
  '{t(item.name) || item.name}'
);
content = content.replace(
  /\{item\.description\}/,
  '{t(item.description) || item.description}'
);

// For categories filter
content = content.replace(
  /\{cat\}/,
  '{t(cat) || cat}'
);

writeFileSync(path, content);
