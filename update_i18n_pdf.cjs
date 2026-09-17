const fs = require('fs');
let text = fs.readFileSync('src/lib/i18n.tsx', 'utf-8');

text = text.replace(
  "'menu.title': 'Notre Menu',",
  "'menu.title': 'Notre Menu',\n    'menu.download_pdf': 'Télécharger le Menu PDF',"
);

text = text.replace(
  "'menu.title': 'Our Menu',",
  "'menu.title': 'Our Menu',\n    'menu.download_pdf': 'Download Menu PDF',"
);

text = text.replace(
  "'menu.title': 'قائمة الطعام',",
  "'menu.title': 'قائمة الطعام',\n    'menu.download_pdf': 'تحميل قائمة الطعام PDF',"
);

fs.writeFileSync('src/lib/i18n.tsx', text);
