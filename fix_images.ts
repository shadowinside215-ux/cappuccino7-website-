import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

content = content.replace(
  /const handleClearAllImages = async \(\) => \{[\s\S]*?alert\(`Cleared images from \$\{count\} items!`\);\n    \} catch \(err: any\) \{ \n      console\.error\(err\);\n      alert\('Error clearing images: ' \+ err\.message\); \n    \}\n  \};/,
  `const handleClearAllImages = async () => {
    if (!window.confirm('This will remove all pictures from the menu items and replace them with the coffee icon. Proceed?')) return;
    try {
      let count = 0;
      for (const item of items) {
        if (item.image) {
          const { id, ...data } = item;
          await addDocument('menuItems', id, { ...data, image: '' });
          count++;
        }
      }
      alert('All menu images cleared successfully!');
    } catch (err: any) {
      console.error(err);
      alert('Error clearing images: ' + err.message);
    }
  };`
);

writeFileSync(path, content);
