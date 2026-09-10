import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

// 1. Remove the if (loading) return spinner block
heroContent = heroContent.replace(
  /if \(loading\) \{\n\s*return <div className="h-screen bg-espresso-dark flex items-center justify-center">\n\s*<div className="w-12 h-12 border-4 border-coffee-brown border-t-transparent rounded-full animate-spin" \/>\n\s*<\/div>;\n\s*\}/,
  ''
);

// 2. Add video optimization logic
heroContent = heroContent.replace(
  /const video = settings\?\.heroVideo;/,
  `let video = settings?.heroVideo;
  if (video && video.includes('cloudinary.com') && video.includes('/upload/') && !video.includes('f_auto')) {
    video = video.replace('/upload/', '/upload/f_auto,q_auto/');
  }`
);

// 3. Update video attributes and styling
heroContent = heroContent.replace(
  /<video\n\s*src=\{video\}\n\s*autoPlay\n\s*loop\n\s*muted\n\s*playsInline\n\s*className=\{`w-full h-full object-cover object-\[center_top\] scale-\[1\.10\] md:scale-\[1\.15\] transition-opacity duration-500 \$\{isUploading \? 'opacity-50' : 'opacity-100'\} pointer-events-none`\}\n\s*\/>/g,
  `<video
            src={video}
            poster={image}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className={\`w-full h-full object-cover object-[center_top] scale-[1.25] md:scale-[1.30] transition-opacity duration-500 \${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none\`}
          />`
);

writeFileSync(heroPath, heroContent);
