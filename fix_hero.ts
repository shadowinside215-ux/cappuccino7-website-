import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Hero.tsx';
let content = readFileSync(path, 'utf8');

// Use auto/upload in Hero.tsx
content = content.replace(
  /fetch\(\`https:\/\/api\.cloudinary\.com\/v1_1\/\$\{cloudName\}\/\$\{type === 'video' \? 'video' : 'image'\}\/upload\`/,
  "fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`"
);

// Reduce the overlay when video is present
content = content.replace(
  /<div className="absolute inset-0 bg-gradient-to-b from-espresso-dark\/60 via-espresso-dark\/40 to-espresso-dark\/80" \/>/,
  `{video ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-dark/60 via-espresso-dark/40 to-espresso-dark/80 pointer-events-none" />
        )}`
);

// Ensure the video element has pointer-events-none so it doesn't block clicks, and looks seamless
content = content.replace(
  /className=\{\`w-full h-full object-cover transition-opacity duration-500 \$\{isUploading \? 'opacity-50' : 'opacity-100'\}\`\}/g,
  `className={\`w-full h-full object-cover transition-opacity duration-500 \${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none\`}`
);


writeFileSync(path, content);
