const fs = require('fs');
let text = fs.readFileSync('src/components/Hero.tsx', 'utf-8');

// Find the object position logic. The current code has:
// className={\`w-full h-full object-cover object-[15%_center] md:object-[center_top] ...
// I will extract it to a style tag or inline style.

text = text.replace(
  'object-[15%_center] md:object-[center_top]',
  ''
);
text = text.replace(
  'object-[15%_center] md:object-[center_top]',
  ''
);

const positionX = "settings?.mobileVideoPositionX ?? 15";

text = text.replace(
  '<video',
  `<video\n            style={{ objectPosition: \`\${${positionX}}% center\` }}`
);

text = text.replace(
  '<img',
  `<img\n            style={{ objectPosition: \`\${${positionX}}% center\` }}`
);

fs.writeFileSync('src/components/Hero.tsx', text);
