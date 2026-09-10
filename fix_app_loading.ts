import { readFileSync, writeFileSync } from 'fs';

let appPath = 'src/App.tsx';
let appContent = readFileSync(appPath, 'utf8');

appContent = appContent.replace(
  /import \{ useDocument \} from '.\/lib\/hooks';/,
  "import { useDocument } from './lib/hooks';\nimport { Coffee } from 'lucide-react';"
);

appContent = appContent.replace(
  /const \{ data: settings \} = useDocument<any>\('settings', 'global'\);/,
  "const { data: settings, loading } = useDocument<any>('settings', 'global');"
);

appContent = appContent.replace(
  /<div className="min-h-screen selection:bg-coffee-brown selection:text-white">\n\s*\{isAdminOpen && <AdminDashboard onClose=\{.*?\} \/>\}\n\s*<Navbar \/>\n\s*<main>/,
  `<div className="min-h-screen selection:bg-coffee-brown selection:text-white">
        {loading ? (
          <div className="h-screen w-full bg-espresso-dark flex flex-col items-center justify-center fixed inset-0 z-50">
            <Coffee className="w-16 h-16 text-coffee-brown animate-spin" />
          </div>
        ) : null}
        {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}
        
        <Navbar />
        <main>`
);

writeFileSync(appPath, appContent);

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

heroContent = heroContent.replace(
  /if \(loading\) \{\n\s*return \(\n\s*<div className="h-screen bg-espresso-dark flex flex-col items-center justify-center">\n\s*<Coffee className="w-16 h-16 text-coffee-brown animate-spin" \/>\n\s*<\/div>\n\s*\);\n\s*\}/,
  ""
);

writeFileSync(heroPath, heroContent);
