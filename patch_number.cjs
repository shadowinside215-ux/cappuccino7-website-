const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  'if (data.mobileVideoPositionX) data.mobileVideoPositionX = Number(data.mobileVideoPositionX);',
  'if (data.mobileVideoPositionX) (data as any).mobileVideoPositionX = Number(data.mobileVideoPositionX);'
);
fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
