import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Footer.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /<h5 className="text-\[10px\] uppercase tracking-\[0\.2em\] font-bold text-gray-400 mb-6">Quick Links<\/h5>/,
  '<h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">{t(\'footer.quickLinks\')}</h5>'
);

content = content.replace(
  /<p className="text-xs text-gray-400 tracking-wider uppercase font-medium">\s*© \{currentYear\} Cappuccino 7\. All Rights Reserved\.\s*<\/p>/,
  '<p className="text-xs text-gray-400 tracking-wider uppercase font-medium">{t(\'footer.rights\')}</p>'
);

writeFileSync(path, content);
