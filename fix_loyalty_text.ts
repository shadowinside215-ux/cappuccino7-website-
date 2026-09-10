import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/LoyaltySection.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /Join Our Loyalty App/,
  `{t('menu.loyalty.title')}`
);

content = content.replace(
  /\{t\('menu\.loyalty\.title'\) \|\| 'Cappuccino7 Loyalty'\}/,
  `{t('menu.app')}`
);

content = content.replace(
  /\{t\('menu\.loyalty\.desc'\) \|\| 'Collect stamps and get free drinks! Download our app today and enjoy exclusive rewards tailored just for you\.'\}/,
  `{t('menu.loyalty.desc')}`
);

writeFileSync(path, content);
