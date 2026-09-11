import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

// The Hero block is:
// {isAdmin && !isUploading && (
//   <div className="absolute inset-0 bg-black/40 flex flex-row items-center justify-center gap-8 opacity-0 hover:opacity-100 transition-all text-white z-10">
// ...
//   </div>
// )}
heroContent = heroContent.replace(/\{isAdmin && !isUploading && \([\s\S]*?<div[\s\S]*?<span[\s\S]*?<\/div>[\s\S]*?<\/div>\s*\)\}/, '');
writeFileSync(heroPath, heroContent);

let aboutPath = 'src/components/About.tsx';
let aboutContent = readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(/\{isAdmin && \([\s\S]*?Change Atmosphere Photo[\s\S]*?\}\)\}/, '');
aboutContent = aboutContent.replace(/\{isAdmin && \([\s\S]*?<Edit2[\s\S]*?\}\)\}/, '');
writeFileSync(aboutPath, aboutContent);
