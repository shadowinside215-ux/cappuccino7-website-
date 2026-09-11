import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Gallery.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(/\\\`/g, '`');
content = content.replace(/\\\$/g, '$');

writeFileSync(path, content);
