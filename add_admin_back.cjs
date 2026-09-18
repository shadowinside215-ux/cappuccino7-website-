const fs = require('fs');

// 1. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');
if (!app.includes('AdminDashboard')) {
  app = "import AdminDashboard from './components/Admin/AdminDashboard';\n" + app;
}
if (!app.includes('showAdmin')) {
  app = app.replace(
    "export default function App() {",
    "export default function App() {\n  const [showAdmin, setShowAdmin] = useState(false);\n  useEffect(() => {\n    (window as any).toggleAdmin = () => setShowAdmin(p => !p);\n  }, []);"
  );
}
if (!app.includes('AdminDashboard onClose')) {
  app = app.replace(
    "<Navbar />",
    "{showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}\n        <Navbar />"
  );
}
fs.writeFileSync('src/App.tsx', app);

// 2. Update Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
if (!footer.includes('toggleAdmin')) {
  footer = footer.replace(
    "          <div className={`flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-400 ${isRTL ? 'space-x-reverse' : ''}`}>",
    "          <div className={`flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-400 ${isRTL ? 'space-x-reverse' : ''}`}>\n            <button onClick={() => (window as any).toggleAdmin()} className=\"hover:text-espresso-dark transition-colors\">Admin</button>"
  );
  fs.writeFileSync('src/components/Footer.tsx', footer);
}

console.log('Admin system re-added successfully!');
