import { readFileSync, writeFileSync } from 'fs';

let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');

// Replace the video and image variables with the cached version
heroContent = heroContent.replace(
  /const image = settings\?\.heroImage \|\| 'https:\/\/images\.unsplash\.com\/photo-1554118811-1e0d58224f24\?auto=format&fit=crop&q=80&w=1920';\n\s*let video = settings\?\.heroVideo;/,
  `const image = settings?.heroImage || localStorage.getItem('heroImage') || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920';
  let video = settings?.heroVideo || localStorage.getItem('heroVideo');

  useEffect(() => {
    if (settings?.heroVideo) localStorage.setItem('heroVideo', settings.heroVideo);
    if (settings?.heroImage) localStorage.setItem('heroImage', settings.heroImage);
  }, [settings?.heroVideo, settings?.heroImage]);`
);

writeFileSync(heroPath, heroContent);
