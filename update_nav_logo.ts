import { readFileSync, writeFileSync } from 'fs';
let navPath = 'src/components/Navbar.tsx';
let navContent = readFileSync(navPath, 'utf8');

navContent = navContent.replace(
  'className="h-16 w-auto md:h-20 transition-transform group-hover:scale-105"',
  'className="h-16 w-auto md:h-24 md:-ml-2 md:-mt-4 transition-transform group-hover:scale-105"'
);
writeFileSync(navPath, navContent);
