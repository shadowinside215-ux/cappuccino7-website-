const fs = require('fs');

let content = fs.readFileSync('src/components/Menu.tsx', 'utf-8');

// Replace the sorting hack with standard filtering
content = content.replace(
  `  let filteredItems = itemsToShow.filter((item) => item.category === activeCategory);
  if (activeCategory === 'Breakfast') {
    const priorityNames = [
      'Ftour Chamali',
      'Cappuccino7 Breakfast',
      'Turkie',
      'Occidental',
      'Amazigh',
      'Ftour Fassi',
      'Healthy Breakfast'
    ];
    filteredItems.sort((a, b) => {
      const indexA = priorityNames.findIndex(name => a.name.toLowerCase().includes(name.toLowerCase()));
      const indexB = priorityNames.findIndex(name => b.name.toLowerCase().includes(name.toLowerCase()));
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0;
    });
  }`,
  `  const filteredItems = itemsToShow.filter((item) => item.category === activeCategory);`
);

fs.writeFileSync('src/components/Menu.tsx', content);
console.log('Menu.tsx cleaned up!');
