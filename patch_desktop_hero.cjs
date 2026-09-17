const fs = require('fs');
let text = fs.readFileSync('src/components/Hero.tsx', 'utf-8');

// I will add a tailwind screen break in style:
// The issue is that the inline style overrides everything. 
// I should only apply it for mobile, or apply a desktop default. 
// The easiest way is using a window.innerWidth check or responsive design in style.
// Let's use a simple state to track mobile vs desktop.

const updated = `
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useDocument } from '../lib/hooks';
import { db } from '../lib/firebase';
import { useTranslation } from '../lib/i18n';

export default function Hero() {
  const { data: settings } = useDocument<any>('settings', 'global');
  
  const isUploading = false;
  
  const { t, lang } = useTranslation();
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (settings?.heroVideo) localStorage.setItem('heroVideo', settings.heroVideo);
    if (settings?.heroImage) localStorage.setItem('heroImage', settings.heroImage);
  }, [settings?.heroVideo, settings?.heroImage]);
      
  const title = settings?.heroTitle || t('hero.title');
  const subtitle = settings?.heroSubtitle || t('hero.subtitle');
  const image = settings?.heroImage || localStorage.getItem('heroImage') || '';
  let video = settings?.heroVideo || localStorage.getItem('heroVideo');
  if (video && video.includes('cloudinary.com') && video.includes('/upload/') && !video.includes('f_auto')) {
    video = video.replace('/upload/', '/upload/f_auto,q_auto/');
  }

  const objPos = isMobile ? \`\${settings?.mobileVideoPositionX ?? 15}% center\` : 'center top';

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden [perspective:1000px]">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 origin-center"
      >
        {video ? (
          <video
            style={{ objectPosition: objPos }}
            src={video}
            poster={image}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className={\`w-full h-full object-cover  transition-opacity duration-500 \${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none\`}
          />
        ) : (
          <img
            style={{ objectPosition: objPos }}
            src={image}
            alt="Cappuccino 7 Cafe"
            className={\`w-full h-full object-cover  scale-[1.05] md:scale-[1.10] origin-center transition-opacity duration-500 \${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none\`}
            referrerPolicy="no-referrer"
          />
        )}
        {video ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-dark/60 via-espresso-dark/40 to-espresso-dark/80 pointer-events-none" />
        )}
        
        {isUploading && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white z-20">
             <div className="w-12 h-12 border-4 border-coffee-brown border-t-transparent rounded-full animate-spin mb-4" />
             <span className="text-sm font-bold uppercase tracking-widest text-coffee-brown">Uploading Media...</span>
          </div>
        )}
        
      </motion.div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start mt-[45vh] md:mt-[50vh]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-brown font-bold leading-tight mb-6 drop-shadow-[0_0_15px_rgba(183,110,35,0.8)] max-w-2xl text-left" style={{ textShadow: "0 0 15px rgba(183,110,35,0.8), 0 0 30px rgba(183,110,35,0.6)" }}>
            {t('hero.title')}
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed drop-shadow-md text-left">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
            <a
              id="hero-cta-menu"
              href="#menu"
              className="bg-coffee-brown text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-espresso-dark transition-all transform hover:scale-105 shadow-xl hover:shadow-coffee-brown/50"
            >
              {t('hero.cta')}
            </a>
            <a
              id="hero-cta-location"
              href="#location"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl"
            >
              {t('hero.visit')}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/Hero.tsx', updated);
