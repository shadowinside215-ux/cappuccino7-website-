const fs = require('fs');
let content = fs.readFileSync('src/components/LoyaltySection.tsx', 'utf-8');

content = content.replace(
  `<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">\n              {t('loyalty.title')} <br />\n              <span className="text-coffee-brown">{t('loyalty.subtitle')}</span>\n            </h2>`,
  `<div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">\n              <AnimatedHeading text={t('loyalty.title')} tag="h2" className="text-white" />\n              <span className="text-coffee-brown">{t('loyalty.subtitle')}</span>\n            </div>`
);

if (!content.includes('AnimatedHeading')) {
  content = "import AnimatedHeading from './AnimatedHeading';\n" + content;
}

fs.writeFileSync('src/components/LoyaltySection.tsx', content);
