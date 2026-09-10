import { readFileSync, writeFileSync } from 'fs';

let footerPath = 'src/components/Footer.tsx';
let footerContent = readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(
  /<a href="#" className="hover:text-espresso-dark transition-colors">Privacy Policy<\/a>\n\s*<a href="#" className="hover:text-espresso-dark transition-colors">Terms of Service<\/a>/,
  ''
);
writeFileSync(footerPath, footerContent);

let i18nPath = 'src/lib/i18n.tsx';
let i18nContent = readFileSync(i18nPath, 'utf8');
i18nContent = i18nContent.replace(
  /'hero\.title': 'The Best Coffee Experience in Salé',/,
  "'hero.title': 'The Best Coffee Experience in Salé el jadida',"
);
writeFileSync(i18nPath, i18nContent);
