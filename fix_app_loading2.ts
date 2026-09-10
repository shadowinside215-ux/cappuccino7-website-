import { readFileSync, writeFileSync } from 'fs';

let appPath = 'src/App.tsx';
let appContent = readFileSync(appPath, 'utf8');

appContent = appContent.replace(
  /z-50/,
  "z-[9999]"
);

writeFileSync(appPath, appContent);
