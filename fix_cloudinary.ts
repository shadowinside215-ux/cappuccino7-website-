import { readFileSync, writeFileSync } from 'fs';

const path = 'src/lib/cloudinary.ts';
let content = readFileSync(path, 'utf8');

content = content.replace(/uploadImage/g, 'uploadMedia');

writeFileSync(path, content);
