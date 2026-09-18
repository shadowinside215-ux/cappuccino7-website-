const fs = require('fs');

const filesToUpdate = [
  { path: 'src/App.tsx', importStr: "import AmbientGlow from './components/AmbientGlow';\n" },
  { path: 'src/components/Gallery.tsx', importStr: "import AnimatedHeading from './AnimatedHeading';\n" },
  { path: 'src/components/Location.tsx', importStr: "import AnimatedHeading from './AnimatedHeading';\n" },
  { path: 'src/components/LoyaltySection.tsx', importStr: "import AnimatedHeading from './AnimatedHeading';\n" },
  { path: 'src/components/Menu.tsx', importStr: "import AnimatedHeading from './AnimatedHeading';\n" },
  { path: 'src/components/Reviews.tsx', importStr: "import AnimatedHeading from './AnimatedHeading';\n" }
];

filesToUpdate.forEach(f => {
  let content = fs.readFileSync(f.path, 'utf-8');
  if (!content.includes(f.importStr.trim())) {
    content = f.importStr + content;
    fs.writeFileSync(f.path, content);
  }
});

