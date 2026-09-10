import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /if \(!confirm\('This will import all default menu items into the database so you can edit them. Proceed\?'\)\) return;/g,
  ''
);

content = content.replace(
  /if \(confirm\('Delete this item\?'\)\) \{/g,
  'if (true) {'
);

writeFileSync(path, content);
