import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let content = readFileSync(heroPath, 'utf8');

const targetBlock = `<span className="inline-block text-beige-light font-medium uppercase tracking-[0.3em] text-xs mb-6 drop-shadow-md">
            Salé's Finest Coffee Shop
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-2xl">
            {title}
          </h1>`;

const replaceBlock = `<img 
            src={settings?.logoUrl || "/input_file_1.png"} 
            alt="Cappuccino 7" 
            className="h-32 md:h-48 w-auto mx-auto mb-6 drop-shadow-2xl" 
            referrerPolicy="no-referrer" 
          />
          <h2 className="font-serif text-2xl md:text-4xl text-white font-bold leading-tight mb-8 drop-shadow-2xl max-w-3xl mx-auto">
            The Best Coffee Experience in Salé El Jadida
          </h2>`;

content = content.replace(targetBlock, replaceBlock);
writeFileSync(heroPath, content);
