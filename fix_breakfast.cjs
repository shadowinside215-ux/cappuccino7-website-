const fs = require('fs');
let text = fs.readFileSync('src/components/Menu.tsx', 'utf-8');

text = text.replace(
  "  const [activeCategory, setActiveCategory] = useState(categories[0] || '');\n  // Set initial category when data loads\n  useEffect(() => {\n    if (categories.length > 0 && !activeCategory) {\n      setActiveCategory(categories[0]);\n    }\n  }, [categories, activeCategory]);",
  "  const [activeCategory, setActiveCategory] = useState('');\n  // Set initial category when data loads\n  useEffect(() => {\n    if (categories.length > 0 && !activeCategory) {\n      if (categories.includes('Breakfast')) {\n        setActiveCategory('Breakfast');\n      } else {\n        setActiveCategory(categories[0]);\n      }\n    }\n  }, [categories, activeCategory]);"
);

fs.writeFileSync('src/components/Menu.tsx', text);
