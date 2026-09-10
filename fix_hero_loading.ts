import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /import \{ Camera, Video \} from 'lucide-react';/,
  "import { Camera, Video, Coffee } from 'lucide-react';"
);

heroContent = heroContent.replace(
  /const image = settings\?\.heroImage \|\| localStorage\.getItem\('heroImage'\) \|\| 'https:\/\/images\.unsplash\.com\/photo-[^']+';/,
  "const image = settings?.heroImage || localStorage.getItem('heroImage') || '';"
);

heroContent = heroContent.replace(
  /const title = settings\?\.heroTitle \|\| t\('hero\.title'\);/,
  `if (loading) {
    return (
      <div className="h-screen bg-espresso-dark flex flex-col items-center justify-center">
        <Coffee className="w-16 h-16 text-coffee-brown animate-spin" />
      </div>
    );
  }

  const title = settings?.heroTitle || t('hero.title');`
);

writeFileSync(heroPath, heroContent);
