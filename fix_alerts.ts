import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

// Replace handleClearAllImages completely, removing confirm and alerts
content = content.replace(
  /const handleClearAllImages = async \(\) => \{[\s\S]*?alert\('Error clearing images: ' \+ err\.message\);\n    \}\n  \};/,
  `const handleClearAllImages = async () => {
    try {
      for (const item of items) {
        if (item.image) {
          const { id, ...data } = item;
          await addDocument('menuItems', id, { ...data, image: '' });
        }
      }
      console.log('All menu images cleared successfully!');
    } catch (err: any) {
      console.error(err);
    }
  };`
);

// Replace handleSeedMenu removing alert
content = content.replace(
  /alert\('Menu seeded! You can now edit all items.'\);\n    \} catch \(err: any\) \{ alert\(err\.message\); \}/,
  `console.log('Menu seeded!');\n    } catch (err: any) { console.error(err); }`
);

// Replace removePhoto confirm
content = content.replace(
  /const removePhoto = async \(urlToRemove: string\) => \{\n    if \(!confirm\('Remove this photo\?'\)\) return;/,
  `const removePhoto = async (urlToRemove: string) => {`
);

writeFileSync(path, content);
