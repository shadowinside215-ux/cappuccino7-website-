const fs = require('fs');
let text = fs.readFileSync('src/lib/cloudinary.ts', 'utf-8');

text = text.replace(
  "const resourceType = isPdf ? 'image' : 'auto';",
  "const resourceType = 'auto';" // Just use auto for everything
);

fs.writeFileSync('src/lib/cloudinary.ts', text);
