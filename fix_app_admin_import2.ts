import { readFileSync, writeFileSync } from 'fs';

let path = 'src/App.tsx';
let content = readFileSync(path, 'utf8');

// Replace ErrorBoundary import with AdminDashboard
content = content.replace(
  /import AdminErrorBoundary from '\.\/components\/ErrorBoundary';/,
  `import AdminDashboard from './components/Admin/AdminDashboard';`
);

// Replace component tag
content = content.replace(
  /<AdminErrorBoundary onClose/g,
  `<AdminDashboard onClose`
);

writeFileSync(path, content);
