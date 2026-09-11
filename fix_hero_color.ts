import { readFileSync, writeFileSync } from 'fs';
let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /<h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight mb-6 drop-shadow-2xl max-w-2xl text-left">/,
  '<h2 className="font-serif text-3xl md:text-5xl text-coffee-brown font-bold leading-tight mb-6 drop-shadow-2xl max-w-2xl text-left">'
);

writeFileSync(heroPath, heroContent);
