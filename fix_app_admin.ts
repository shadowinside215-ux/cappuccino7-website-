import { readFileSync, writeFileSync } from 'fs';

let path = 'src/App.tsx';
let content = readFileSync(path, 'utf8');

if (!content.includes('const [showAdmin, setShowAdmin] = useState(false);')) {
  // Add Admin components import
  content = content.replace(
    /import \{ Coffee \} from 'lucide-react';/,
    `import { Coffee } from 'lucide-react';\nimport AdminErrorBoundary from './components/AdminErrorBoundary';`
  );

  // Add state
  content = content.replace(
    /const \{ data: settings, loading \} = useDocument<any>\('settings', 'global'\);/,
    `const { data: settings, loading } = useDocument<any>('settings', 'global');\n  const [showAdmin, setShowAdmin] = useState(false);\n\n  // Make toggle globally available\n  useEffect(() => {\n    (window as any).toggleAdmin = () => setShowAdmin(p => !p);\n  }, []);`
  );

  // Ensure AdminErrorBoundary is added right before Navbar if showAdmin is true
  content = content.replace(
    /<Navbar \/>/,
    `{showAdmin && <AdminErrorBoundary onClose={() => setShowAdmin(false)} />}\n        <Navbar />`
  );
  
  writeFileSync(path, content);
}
