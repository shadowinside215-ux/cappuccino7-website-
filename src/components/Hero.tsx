import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Video } from 'lucide-react';
import { useDocument } from '../lib/hooks';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { uploadMedia } from '../lib/cloudinary';
import { useTranslation } from '../lib/i18n';

export default function Hero() {
  const { data: settings, loading } = useDocument<any>('settings', 'global');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const { t, lang } = useTranslation();
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAdmin(false /* !!user */);
    });
    return () => unsubscribe();
  }, []);

  const handleMediaUpload = async (e: any, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    const cloudName = localStorage.getItem('cl_name') || import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = localStorage.getItem('cl_preset') || import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!file || !cloudName || !uploadPreset) return alert('Cloudinary settings missing in Admin Dashboard');

    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      
      const newSettings = { ...settings };
      if (type === 'video') {
        newSettings.heroVideo = url;
        // Optionally clear image when video is uploaded
        newSettings.heroImage = '';
      } else {
        newSettings.heroImage = url;
        // Optionally clear video when image is uploaded
        newSettings.heroVideo = '';
      }
      
      await setDoc(doc(db, 'settings', 'global'), newSettings, { merge: true });
      setIsUploading(false);
      if (e.target) e.target.value = '';
    } catch (err: any) {
      setIsUploading(false);
      if (e.target) e.target.value = '';
      alert(err.message);
    }
  };

  if (loading) {
    return <div className="h-screen bg-espresso-dark flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-coffee-brown border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  const title = settings?.heroTitle || t('hero.title');
  const subtitle = settings?.heroSubtitle || t('hero.subtitle');
  const image = settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920';
  const video = settings?.heroVideo;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden [perspective:1000px]">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 origin-center"
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover object-[center_top] scale-[1.10] md:scale-[1.15] transition-opacity duration-500 ${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none`}
          />
        ) : (
          <img
            src={image}
            alt="Cappuccino 7 Cafe"
            className={`w-full h-full object-cover scale-[1.05] md:scale-[1.10] origin-center transition-opacity duration-500 ${isUploading ? 'opacity-50' : 'opacity-100'} pointer-events-none`}
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
        {isAdmin && !isUploading && (
          <div className="absolute inset-0 bg-black/40 flex flex-row items-center justify-center gap-8 opacity-0 hover:opacity-100 transition-all text-white z-10">
            <div 
              onClick={() => fileRef.current?.click()}
              className="flex flex-col items-center justify-center cursor-pointer hover:text-coffee-brown transition-colors"
            >
              <Camera size={48} />
              <span className="text-sm font-bold uppercase tracking-widest mt-4">Image Background</span>
            </div>
            <div 
              onClick={() => videoRef.current?.click()}
              className="flex flex-col items-center justify-center cursor-pointer hover:text-coffee-brown transition-colors"
            >
              <Video size={48} />
              <span className="text-sm font-bold uppercase tracking-widest mt-4">Video Background</span>
            </div>
          </div>
        )}
      </motion.div>

      <input 
        ref={fileRef}
        type="file" 
        className="hidden" 
        onChange={(e) => handleMediaUpload(e, 'image')} 
        accept="image/*"
      />
      <input 
        ref={videoRef}
        type="file" 
        className="hidden" 
        onChange={(e) => handleMediaUpload(e, 'video')} 
        accept="video/*"
      />

      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="inline-block text-beige-light font-medium uppercase tracking-[0.3em] text-xs mb-6 drop-shadow-md">
            Salé's Finest Coffee Shop
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              {lang === 'ar' ? 'موقعنا' : lang === 'fr' ? 'Nous trouver' : 'Visit Us'}
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
