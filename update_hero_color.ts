import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /className="font-serif text-3xl md:text-5xl text-coffee-brown font-bold leading-tight mb-6 drop-shadow-2xl max-w-2xl text-left"/,
  'className="font-serif text-3xl md:text-5xl text-green-500 font-bold leading-tight mb-6 drop-shadow-2xl max-w-2xl text-left"'
);

writeFileSync(heroPath, heroContent);
