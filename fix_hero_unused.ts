import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /const \{ data: settings, loading \} = useDocument<any>\('settings', 'global'\);/,
  "const { data: settings } = useDocument<any>('settings', 'global');"
);

heroContent = heroContent.replace(
  /import \{ Camera, Video, Coffee \} from 'lucide-react';/,
  "import { Camera, Video } from 'lucide-react';"
);

writeFileSync(heroPath, heroContent);
