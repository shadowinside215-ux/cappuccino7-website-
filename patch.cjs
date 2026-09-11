const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
code = code.replace(
  '            <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin</button>',
  ''
);
fs.writeFileSync('src/components/Footer.tsx', code);
console.log('patched successfully');
