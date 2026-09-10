import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/LoyaltySection.tsx';
let content = readFileSync(path, 'utf8');

const regex = /\s*\{\/\* Simulated app UI element \*\/\}[\s\S]*?<\/div>\n\s*<\/div>/;
// Wait, the regex needs to match just the inner block and leave the closing tag for the screen content.

// Let's replace the exact block:
content = content.replace(
  /\s*\{\/\* Simulated app UI element \*\/\}[\s\S]*?MEMBER<\/span>\n\s*<\/div>\n\s*<\/div>/,
  ''
);

writeFileSync(path, content);
