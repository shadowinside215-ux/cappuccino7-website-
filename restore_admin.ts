import { readFileSync, writeFileSync } from 'fs';

// 1. Restore Footer Admin Login button
let footerPath = 'src/components/Footer.tsx';
let footerContent = readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(
  /\{\/\* <button onClick=\{\(\) => \(window as any\)\.toggleAdmin\(\)\} className="hover:text-espresso-dark transition-colors">Admin Login<\/button> \*\/\}/g,
  '<button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin Login</button>'
);
writeFileSync(footerPath, footerContent);

// 2. Restore setIsAdmin in About, Hero, Gallery
const componentsToFix = ['src/components/About.tsx', 'src/components/Hero.tsx', 'src/components/Gallery.tsx'];

componentsToFix.forEach(path => {
  let content = readFileSync(path, 'utf8');
  content = content.replace(/setIsAdmin\(false \/\* !!user \*\/\);/g, 'setIsAdmin(!!user);');
  writeFileSync(path, content);
});

console.log('Restored admin features.');
