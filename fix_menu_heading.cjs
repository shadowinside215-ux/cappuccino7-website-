const fs = require('fs');
let content = fs.readFileSync('src/components/Menu.tsx', 'utf-8');

content = content.replace(
  `<h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-espresso-dark">\n            {t('menu.title')}\n          </h2>`,
  `<div className="font-serif text-4xl md:text-5xl font-bold mb-6 text-espresso-dark flex justify-center">\n            <AnimatedHeading text={t('menu.title')} tag="h2" className="text-espresso-dark justify-center" />\n          </div>`
);

if (!content.includes('AnimatedHeading')) {
  content = "import AnimatedHeading from './AnimatedHeading';\n" + content;
}

fs.writeFileSync('src/components/Menu.tsx', content);
