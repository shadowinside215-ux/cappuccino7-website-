import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/i18n.tsx';
let content = readFileSync(path, 'utf8');

// en
content = content.replace(/'about\.stat2': 'Happy Guests',/g, "'about.stat2': 'Happy Guests',\n    'loyalty.title': 'Your Coffee,',\n    'loyalty.subtitle': 'Rewarded.',\n    'loyalty.stamps': '11 stamps = 1 free drink or dish',\n    'loyalty.points': 'Earn Elite Points',\n    'loyalty.pointsDesc': 'Every Dirham counts towards elite gifts',\n    'loyalty.access': 'Access Web App',");
// fr
content = content.replace(/'about\.stat2': 'Clients heureux',/g, "'about.stat2': 'Clients heureux',\n    'loyalty.title': 'Votre Café,',\n    'loyalty.subtitle': 'Récompensé.',\n    'loyalty.stamps': '11 timbres = 1 boisson ou plat gratuit',\n    'loyalty.points': 'Gagnez des points Elite',\n    'loyalty.pointsDesc': 'Chaque dirham compte pour des cadeaux VIP',\n    'loyalty.access': 'Accéder à l\\'application',");
// ar
content = content.replace(/'about\.stat2': 'ضيوف سعداء',/g, "'about.stat2': 'ضيوف سعداء',\n    'loyalty.title': 'قهوتك،',\n    'loyalty.subtitle': 'مكافآت.',\n    'loyalty.stamps': '11 طابع = مشروب أو طبق مجاني',\n    'loyalty.points': 'اكسب نقاط النخبة',\n    'loyalty.pointsDesc': 'كل درهم يساهم في هدايا النخبة',\n    'loyalty.access': 'ادخل للتطبيق',");

writeFileSync(path, content);

let loyaltyPath = 'src/components/LoyaltySection.tsx';
let loyaltyContent = readFileSync(loyaltyPath, 'utf8');

loyaltyContent = loyaltyContent.replace(/Your Coffee,/g, "{t('loyalty.title')}");
loyaltyContent = loyaltyContent.replace(/Rewarded\./g, "{t('loyalty.subtitle')}");
loyaltyContent = loyaltyContent.replace(/11 stamps = 1 free drink or dish/g, "{t('loyalty.stamps')}");
loyaltyContent = loyaltyContent.replace(/Earn Elite Points/g, "{t('loyalty.points')}");
loyaltyContent = loyaltyContent.replace(/Every Dirham counts towards elite gifts/g, "{t('loyalty.pointsDesc')}");
loyaltyContent = loyaltyContent.replace(/>\{t\('menu\.app'\) \|\| 'Access Web App'\}</g, ">{t('loyalty.access')}<");

writeFileSync(loyaltyPath, loyaltyContent);
