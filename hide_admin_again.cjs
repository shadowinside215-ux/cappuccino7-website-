const fs = require('fs');

// 1. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace("import AdminDashboard from './components/Admin/AdminDashboard';\n", '');
app = app.replace("  const [showAdmin, setShowAdmin] = useState(false);\n  useEffect(() => {\n    (window as any).toggleAdmin = () => setShowAdmin(p => !p);\n  }, []);", '');
app = app.replace("{showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}\n        ", '');
app = app.replace("{showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}", '');
fs.writeFileSync('src/App.tsx', app);

// 2. Update Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
footer = footer.replace(
  '            <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin</button>\n',
  ''
);
footer = footer.replace(
  '            <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin</button>',
  ''
);
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log('Admin system hidden successfully!');
