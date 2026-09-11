import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let content = readFileSync(heroPath, 'utf8');

const targetBlock = `<h2 className="font-serif text-2xl md:text-4xl text-white font-bold leading-tight mb-8 drop-shadow-2xl max-w-3xl mx-auto">
            The Best Coffee Experience in Salé El Jadida
          </h2>`;

const replaceBlock = `<h2 className="font-serif text-2xl md:text-3xl text-white font-bold leading-tight mb-8 drop-shadow-2xl max-w-3xl mx-auto">
            {title === "The best experience in sale el jadida" ? "The Best Coffee Experience in Salé El Jadida" : title}
          </h2>`;

content = content.replace(targetBlock, replaceBlock);
writeFileSync(heroPath, content);
