import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Hero.tsx';
let content = readFileSync(path, 'utf8');

const regex = /\/\/ Create FormData explicitly[\s\S]*?const url = data\.secure_url;/;
const replacement = `const url = await uploadMedia(file, cloudName, uploadPreset);`;

content = content.replace(regex, replacement);

writeFileSync(path, content);
