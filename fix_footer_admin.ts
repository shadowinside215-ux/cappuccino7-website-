import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Footer.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /<div className={`flex space-x-6 text-\[10px\] uppercase tracking-widest font-bold text-gray-400 \$\{isRTL \? 'space-x-reverse' : ''\}`}>[\s\S]*?<\/div>/,
  '<div className={`flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-400 ${isRTL ? \'space-x-reverse\' : \'\'}`}>\n            <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin Login</button>\n          </div>'
);

writeFileSync(path, content);
