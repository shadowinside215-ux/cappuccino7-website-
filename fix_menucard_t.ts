import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Menu.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /const \{ isRTL \} = useTranslation\(\);/,
  'const { t, isRTL } = useTranslation();'
);

writeFileSync(path, content);
