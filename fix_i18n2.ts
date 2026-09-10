import { readFileSync, writeFileSync } from 'fs';

let i18nPath = 'src/lib/i18n.tsx';
let i18nContent = readFileSync(i18nPath, 'utf8');
i18nContent = i18nContent.replace(
  /'hero\.title': 'La meilleure expérience café à Salé',/,
  "'hero.title': 'La meilleure expérience café à Salé el jadida',"
);
i18nContent = i18nContent.replace(
  /'hero\.title': 'أفضل تجربة قهوة في سلا',/,
  "'hero.title': 'أفضل تجربة قهوة في سلا الجديدة'," // Salé el jadida in Arabic
);
writeFileSync(i18nPath, i18nContent);
