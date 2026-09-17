const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = "import { useEffect } from 'react';\n" + text;

const authEffect = `
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        if (u.isAnonymous || u.email !== 'dragonballsam86@gmail.com') {
          logout();
          setUser(null);
        } else {
          setUser(u);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
`;

text = text.replace(
  "  const [searchQuery, setSearchQuery] = useState('');\n\n  const { data: menuItems }",
  "  const [searchQuery, setSearchQuery] = useState('');\n" + authEffect + "\n  const { data: menuItems }"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
