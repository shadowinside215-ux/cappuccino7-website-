const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');
text = text.replace(
  "  const [activeCategory, setActiveCategory] = useState<string>('All');",
  "  const [activeCategory, setActiveCategory] = useState<string>('All');\n  const [searchQuery, setSearchQuery] = useState('');"
);
fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
