import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Services.tsx';
let content = readFileSync(path, 'utf8');

// The delivery item is the third item in the array
content = content.replace(
  /,\s*\{\s*icon:\s*<Truck size=\{32\} className="text-coffee-brown" \/>,\s*title:\s*t\('services.s3_title'\),\s*description:\s*t\('services.s3_desc'\)\s*\}/,
  ''
);

// We should also change grid-cols-3 to grid-cols-2 because there are now 2 items
content = content.replace(/grid-cols-1 md:grid-cols-3/, 'grid-cols-1 md:grid-cols-2');

writeFileSync(path, content);
