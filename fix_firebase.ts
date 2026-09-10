import { readFileSync, writeFileSync } from 'fs';

const path = 'src/lib/firebase.ts';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /\/\/ Check infrastructure status\nasync function checkStatus\(\) \{\n[\s\S]*?checkStatus\(\);\n/,
  ''
);

writeFileSync(path, content);
