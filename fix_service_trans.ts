import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/i18n.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(/'about\.stat2': 'Happy Guests',/g, "'about.stat2': 'Happy Guests',\n    'about.service': 'Daily Service',");
content = content.replace(/'about\.stat2': 'Clients heureux',/g, "'about.stat2': 'Clients heureux',\n    'about.service': 'Service quotidien',");
content = content.replace(/'about\.stat2': 'ضيوف سعداء',/g, "'about.stat2': 'ضيوف سعداء',\n    'about.service': 'الخدمة اليومية',");

writeFileSync(path, content);

let aboutPath = 'src/components/About.tsx';
let aboutContent = readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(/label: 'Service'/, "label: t('about.service')");
writeFileSync(aboutPath, aboutContent);
