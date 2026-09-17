const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  /function LoyaltyManager([\s\S]*?)const isVideo = file\.type\.startsWith\('video\/'\);\s*if \(isVideo\) \{\s*\} else \{\s*\}/g,
  `function LoyaltyManager$1
      await setDoc(doc(db, 'settings', 'global'), { ...settings, loyaltyImage: url }, { merge: true });`
);

text = text.replace(
  /function HeroManager([\s\S]*?)const isVideo = file\.type\.startsWith\('video\/'\);\s*if \(isVideo\) \{\s*\} else \{\s*\}/g,
  `function HeroManager$1
      const isVideo = file.type.startsWith('video/');
      if (isVideo) {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroVideo: url, heroImage: null }, { merge: true });
      } else {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url, heroVideo: null }, { merge: true });
      }`
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
