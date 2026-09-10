import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

const match = /\{settings\?\.heroVideo \? \([\s\S]*?\}\)/;
const replacement = `{settings?.heroVideo ? (
              <video src={settings.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920'} className="w-full h-full object-cover" />
            )}`;

content = content.replace(match, replacement);

writeFileSync(path, content);
