const fs = require('fs');

// Gallery
let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf-8');
gallery = gallery.replace(
  `<h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso-dark">\n              {t('gallery.title')}\n            </h2>`,
  `<div className="font-serif text-4xl md:text-5xl font-bold text-espresso-dark">\n              <AnimatedHeading text={t('gallery.title')} tag="h2" className="text-espresso-dark" />\n            </div>`
);
if (!gallery.includes('AnimatedHeading')) {
  gallery = "import AnimatedHeading from './AnimatedHeading';\n" + gallery;
}
fs.writeFileSync('src/components/Gallery.tsx', gallery);

// Location
let location = fs.readFileSync('src/components/Location.tsx', 'utf-8');
location = location.replace(
  `<h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-espresso-dark">\n              {t('location.title')}\n            </h2>`,
  `<div className="font-serif text-4xl md:text-5xl font-bold mb-8 text-espresso-dark">\n              <AnimatedHeading text={t('location.title')} tag="h2" className="text-espresso-dark" />\n            </div>`
);
if (!location.includes('AnimatedHeading')) {
  location = "import AnimatedHeading from './AnimatedHeading';\n" + location;
}
fs.writeFileSync('src/components/Location.tsx', location);
