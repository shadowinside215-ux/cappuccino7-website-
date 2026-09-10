import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /className=\{`w-full h-full object-cover scale-\[1\.15\] translate-y-\[2%\] origin-center transition-opacity/g,
  'className={`w-full h-full object-cover object-[center_top] scale-[1.10] md:scale-[1.15] transition-opacity'
);

writeFileSync(heroPath, heroContent);
