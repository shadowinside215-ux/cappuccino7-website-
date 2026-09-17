const fs = require('fs');
let text = fs.readFileSync('src/components/Hero.tsx', 'utf-8');

text = text.replace(
  "const objPos = isMobile ? `${settings?.mobileVideoPositionX ?? 15}% center` : 'center top';",
  "const objPos = isMobile ? `${settings?.mobileVideoPositionX ?? 15}% center` : 'center top';\n  const objectFit = (isMobile && settings?.mobileVideoFit === 'contain') ? 'contain' : 'cover';"
);

text = text.replace(
  /className=\{`w-full h-full object-cover/g,
  "className={`w-full h-full " + "${objectFit === 'contain' ? 'object-contain bg-black' : 'object-cover'} "
);

fs.writeFileSync('src/components/Hero.tsx', text);
