const fs = require('fs');

let text = fs.readFileSync('src/App.tsx', 'utf-8');

text = text.replace("  const [showAdmin, setShowAdmin] = useState(false);\n  // Make toggle globally available\n  useEffect(() => {\n    (window as any).toggleAdmin = () => setShowAdmin(p => !p);\n  }, []);", '');

fs.writeFileSync('src/App.tsx', text);
