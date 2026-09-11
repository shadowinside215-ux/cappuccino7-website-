import { readFileSync, writeFileSync } from 'fs';

// 1. Fix Navbar
let navPath = 'src/components/Navbar.tsx';
let navContent = readFileSync(navPath, 'utf8');

navContent = navContent.replace(
  '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">',
  '<div className="w-full px-2 md:px-6 flex items-center justify-between">'
);

navContent = navContent.replace(
  'className="h-12 w-auto md:h-14 transition-transform group-hover:scale-105"',
  'className="h-16 w-auto md:h-20 transition-transform group-hover:scale-105"'
);

writeFileSync(navPath, navContent);

// 2. Fix Hero
let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  '<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start mt-32 md:mt-40">',
  '<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start mt-[45vh] md:mt-[50vh]">'
);

writeFileSync(heroPath, heroContent);
