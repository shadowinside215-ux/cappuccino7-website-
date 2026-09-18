const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  `<main>`,
  `<main className="relative">\n          <AmbientGlow />`
);

if (!content.includes('AmbientGlow')) {
  content = "import AmbientGlow from './components/AmbientGlow';\n" + content;
}

fs.writeFileSync('src/App.tsx', content);
