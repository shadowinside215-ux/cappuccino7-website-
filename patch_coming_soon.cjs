const fs = require('fs');

let i18n = fs.readFileSync('src/lib/i18n.tsx', 'utf-8');
i18n = i18n.replace(/'loyalty\.access': 'Access Web App',/, "'loyalty.access': 'Coming Soon',");
i18n = i18n.replace(/'loyalty\.access': 'Accéder à l\\'application',/, "'loyalty.access': 'Bientôt disponible',");
i18n = i18n.replace(/'loyalty\.access': 'ادخل للتطبيق',/, "'loyalty.access': 'قريباً',");
fs.writeFileSync('src/lib/i18n.tsx', i18n);

console.log('patched i18n');
