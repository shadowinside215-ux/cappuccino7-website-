import { readFileSync, writeFileSync } from 'fs';

let path = 'src/App.tsx';
let content = readFileSync(path, 'utf8');

// Fix the import path to match the directory structure
content = content.replace(
  /import AdminErrorBoundary from '\.\/components\/AdminErrorBoundary';/,
  `import AdminErrorBoundary from './components/ErrorBoundary';`
);

writeFileSync(path, content);
