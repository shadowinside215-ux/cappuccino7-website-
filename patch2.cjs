const fs = require('fs');

// 1. Update i18n
let i18n = fs.readFileSync('src/lib/i18n.tsx', 'utf-8');
i18n = i18n.replace(/The Best Coffee Experience in Sale el jadida/g, 'The Best Coffee Experience in Sala el jadida');
i18n = i18n.replace(/in the heart of Salé/g, 'in the heart of Sala');
i18n = i18n.replace(/Voices of Salé/g, 'Voices of sala el jadida');
i18n = i18n.replace(/Mahaj Salé/g, 'Mahaj Sala');
i18n = i18n.replace(/doorstep in Salé/g, 'doorstep in Sala');

i18n = i18n.replace(/café à Salé el jadida/g, 'café à Sala el jadida');
i18n = i18n.replace(/au cœur de Salé/g, 'au cœur de Sala');
i18n = i18n.replace(/Les Voix de Salé/g, 'Voices of sala el jadida'); // French 'Les Voix de Salé' to requested text
i18n = i18n.replace(/Mahaj Salé/g, 'Mahaj Sala');
i18n = i18n.replace(/porte à Salé/g, 'porte à Sala');

i18n = i18n.replace(/أصوات من سلا/g, 'أصوات من سلا الجديدة');
i18n = i18n.replace(/في قلب مدينة سلا/g, 'في قلب مدينة سلا الجديدة');
i18n = i18n.replace(/مهاج سلا/g, 'مهاج سلا الجديدة');
i18n = i18n.replace(/عتبة دارك في سلا/g, 'عتبة دارك في سلا الجديدة');
fs.writeFileSync('src/lib/i18n.tsx', i18n);

// 2. Update Location.tsx
let loc = fs.readFileSync('src/components/Location.tsx', 'utf-8');
loc = loc.replace(/\+212777305155/g, '0672219136');
loc = loc.replace(/\+212 7 77 30 51 55/g, '06 72 21 91 36');
loc = loc.replace(/query=Cappuccino\+7,\+Salé\+El\+Jadida/g, 'query=Cappuccino+7,+Sala+El+Jadida');
fs.writeFileSync('src/components/Location.tsx', loc);

// 3. Update Navbar.tsx
let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');
nav = nav.replace(/\+212777305155/g, '0672219136');
fs.writeFileSync('src/components/Navbar.tsx', nav);

// 4. Restore Admin button in Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
const adminBtn = '<button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin</button>';
if (!footer.includes('toggleAdmin()')) {
  footer = footer.replace(
    /<div className={`flex space-x-6 text-\[10px\] uppercase tracking-widest font-bold text-gray-400 \${isRTL \? 'space-x-reverse' : ''}`}>\s*<\/div>/,
    `<div className={\`flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-400 \${isRTL ? 'space-x-reverse' : ''}\`}>\n            ${adminBtn}\n          </div>`
  );
  fs.writeFileSync('src/components/Footer.tsx', footer);
}

console.log('patched2 successfully');
