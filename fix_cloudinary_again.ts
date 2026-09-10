import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/cloudinary.ts';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /https:\/\/api\.cloudinary\.com\/v1_1\/\$\{cloudName\}\/auto\/upload/,
  'https://api.cloudinary.com/v1_1/${cloudName}/${file.type.startsWith(\'video/\') ? \'video\' : \'image\'}/upload'
);

writeFileSync(path, content);
