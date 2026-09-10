import { readFileSync, writeFileSync } from 'fs';

function hideAdmin(filePath: string) {
  let content = readFileSync(filePath, 'utf8');
  content = content.replace(/setIsAdmin\(!!user\)/g, 'setIsAdmin(false /* !!user */)');
  writeFileSync(filePath, content);
}

hideAdmin('src/components/About.tsx');
hideAdmin('src/components/Gallery.tsx');
hideAdmin('src/components/Hero.tsx');

let footerPath = 'src/components/Footer.tsx';
let footerContent = readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(
  /<button onClick=\{\(\) => \(window as any\)\.toggleAdmin\(\)\} className="hover:text-espresso-dark transition-colors">Admin Login<\/button>/,
  '{/* <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin Login</button> */}'
);
writeFileSync(footerPath, footerContent);

