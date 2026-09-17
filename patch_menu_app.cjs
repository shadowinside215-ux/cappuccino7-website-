const fs = require('fs');

let i18n = fs.readFileSync('src/lib/i18n.tsx', 'utf-8');
i18n = i18n.replace(/'menu\.app': 'Open Cappuccino 7 App',/g, "'menu.app': 'Cappuccino 7 App',");
i18n = i18n.replace(/'menu\.app': 'Ouvrir l\\'App Cappuccino 7',/g, "'menu.app': 'App Cappuccino 7',");
i18n = i18n.replace(/'menu\.app': 'افتح تطبيق كابتشينو 7',/g, "'menu.app': 'تطبيق كابتشينو 7',");
fs.writeFileSync('src/lib/i18n.tsx', i18n);

console.log('patched menu.app');
