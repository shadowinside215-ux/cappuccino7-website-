const fs = require('fs');
let text = fs.readFileSync('src/lib/cloudinary.ts', 'utf-8');

text = text.replace(
  "if (url && url.includes('/upload/')) {",
  "if (url && url.includes('/upload/') && !url.endsWith('.pdf')) {"
);

fs.writeFileSync('src/lib/cloudinary.ts', text);
