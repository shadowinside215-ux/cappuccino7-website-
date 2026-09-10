import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /className=\{`w-full h-full object-cover transition-opacity duration-500 \$\{isUploading \? 'opacity-50' : 'opacity-100'\} pointer-events-none`\}/g,
  'className={`w-full h-full object-cover scale-[1.05] md:scale-[1.10] origin-center transition-opacity duration-500 ${isUploading ? \'opacity-50\' : \'opacity-100\'} pointer-events-none`}'
);

writeFileSync(heroPath, heroContent);
