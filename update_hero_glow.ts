import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /className="font-serif text-3xl md:text-5xl text-green-800 font-bold leading-tight mb-6 drop-shadow-2xl max-w-2xl text-left"/,
  'className="font-serif text-3xl md:text-5xl text-coffee-brown font-bold leading-tight mb-6 drop-shadow-[0_0_15px_rgba(183,110,35,0.8)] max-w-2xl text-left" style={{ textShadow: "0 0 15px rgba(183,110,35,0.8), 0 0 30px rgba(183,110,35,0.6)" }}'
);

writeFileSync(heroPath, heroContent);
