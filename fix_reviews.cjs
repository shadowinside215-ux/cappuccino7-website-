const fs = require('fs');
let content = fs.readFileSync('src/components/Reviews.tsx', 'utf-8');

content = content.replace(
  `<h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">\n            {t('reviews.title')}\n          </h2>`,
  `<div className="font-serif text-4xl md:text-5xl font-bold mb-4 flex justify-center">\n            <AnimatedHeading text={t('reviews.title')} tag="h2" className="text-white justify-center" />\n          </div>`
);

if (!content.includes('AnimatedHeading')) {
  content = "import AnimatedHeading from './AnimatedHeading';\n" + content;
}

fs.writeFileSync('src/components/Reviews.tsx', content);
