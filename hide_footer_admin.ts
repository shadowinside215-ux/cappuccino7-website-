import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Footer.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /<button onClick=\{\(\) => \(window as any\)\.toggleAdmin\(\)\} className="hover:text-espresso-dark transition-colors">Admin Login<\/button>/,
  '{/* <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin Login</button> */}'
);

writeFileSync(path, content);
