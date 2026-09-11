import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/i18n.tsx';
let content = readFileSync(path, 'utf8');

// en
content = content.replace(
  /'hero\.cta': 'Explore Menu',/,
  "'hero.cta': 'Explore Menu',\n    'hero.visit': 'Visit Us',\n    'nav.callUs': 'Call Us',\n    'nav.callUsNow': 'Call Us Now',\n    'footer.quickLinks': 'Quick Links',\n    'footer.rights': '© 2026 Cappuccino 7. All Rights Reserved.',"
);

// fr
content = content.replace(
  /'hero\.cta': 'Explorer le menu',/,
  "'hero.cta': 'Explorer le menu',\n    'hero.visit': 'Nous trouver',\n    'nav.callUs': 'Appelez-nous',\n    'nav.callUsNow': 'Appelez-nous maintenant',\n    'footer.quickLinks': 'Liens Rapides',\n    'footer.rights': '© 2026 Cappuccino 7. Tous Droits Réservés.',"
);

// ar
content = content.replace(
  /'hero\.cta': 'اكتشف القائمة',/,
  "'hero.cta': 'اكتشف القائمة',\n    'hero.visit': 'موقعنا',\n    'nav.callUs': 'اتصل بنا',\n    'nav.callUsNow': 'اتصل بنا الآن',\n    'footer.quickLinks': 'روابط سريعة',\n    'footer.rights': '© 2026 كابتشينو 7. جميع الحقوق محفوظة.',"
);

writeFileSync(path, content);
