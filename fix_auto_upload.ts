import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/cloudinary.ts';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /\$\{file\.type\.startsWith\('video\/'\) \? 'video' : 'image'\}/g,
  'auto'
);

writeFileSync(path, content);
