import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

// I will add scale-[1.15] to the video tag's className in Hero.tsx
// It's currently: className={`w-full h-full object-cover transition-opacity duration-500 ${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none`}

heroContent = heroContent.replace(
  /<video\s*src=\{video\}\s*autoPlay\s*loop\s*muted\s*playsInline\s*className=\{`w-full h-full object-cover/g,
  '<video\n            src={video}\n            autoPlay\n            loop\n            muted\n            playsInline\n            className={`w-full h-full object-cover scale-[1.15] translate-y-[2%] origin-center'
);

writeFileSync(heroPath, heroContent);
