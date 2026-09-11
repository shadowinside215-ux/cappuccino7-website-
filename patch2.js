const fs = require('fs');
let code = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

code = code.replace(
  "const [activeCategory, setActiveCategory] = useState<string>('All');",
  "const [activeCategory, setActiveCategory] = useState<string>('All');\n  const [searchQuery, setSearchQuery] = useState('');"
);

code = code.replace(
  "  const filteredItems = activeCategory === 'All' ? items : items.filter((item: any) => item.category === activeCategory);",
  `  let filteredItems = activeCategory === 'All' ? items : items.filter((item: any) => item.category === activeCategory);
  if (searchQuery) {
    filteredItems = filteredItems.filter((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }`
);

code = code.replace(
  "      <div className=\"flex flex-wrap gap-2 mb-6\">",
  `      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search menu items..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 px-4 py-3 rounded-xl border border-beige-light focus:outline-none focus:border-coffee-brown mb-4"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-6">`
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', code);
console.log('patched2');
