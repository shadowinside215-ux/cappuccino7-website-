const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

// Fix HeroManager
text = text.replace(
  /const isVideo = file\.type\.startsWith\('video\/'\);\n\s*if \(isVideo\) \{\n\s*\} else \{\n\s*\}/g,
  `const isVideo = file.type.startsWith('video/');
      if (isVideo) {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroVideo: url, heroImage: null }, { merge: true });
      } else {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url, heroVideo: null }, { merge: true });
      }`
);

// Actually, in LoyaltyManager, we might want to just set loyaltyImage.
// Wait, the regex will replace both!
// Let's replace HeroManager first explicitly.
