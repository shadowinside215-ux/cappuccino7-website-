import { readFileSync, writeFileSync } from 'fs';

let aboutPath = 'src/components/About.tsx';
let aboutContent = readFileSync(aboutPath, 'utf8');

aboutContent = aboutContent.replace(/\{isAdmin && \([\s\S]*?<Camera[\s\S]*?<\/div>\s*\)\}/, '');
aboutContent = aboutContent.replace(/\{isAdmin && \([\s\S]*?<Edit2[\s\S]*?<\/button>\s*\)\}/, '');

writeFileSync(aboutPath, aboutContent);
