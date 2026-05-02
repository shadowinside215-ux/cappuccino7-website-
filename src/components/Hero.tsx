import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import { useDocument } from '../lib/hooks';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { uploadImage } from '../lib/cloudinary';
import { useTranslation } from '../lib/i18n';

export default function Hero() {
  const { data: settings, loading } = useDocument<any>('settings', 'global');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { t, lang } = useTranslation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAdmin(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    const cloudName = localStorage.getItem('cl_name') || process.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = localStorage.getItem('cl_preset') || process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!file || !cloudName || !uploadPreset) return alert('Cloudinary settings missing in Admin Dashboard');

    setIsUploading(true);
    try {
      const url = await uploadImage(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url }, { merge: true });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsUploading(false);
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

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Cappuccino 7 Cafe"
          className={`w-full h-full object-cover transition-opacity duration-500 ${isUploading ? 'opacity-50' : 'opacity-100'}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-espresso-dark/40" />
        
        {isAdmin && (
          <div 
            onClick={() => fileRef.current?.click()}
            className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-all text-white z-10"
          >
            <Camera size={48} />
            <span className="text-sm font-bold uppercase tracking-widest mt-4">Change Hero Background</span>
          </div>
        )}
      </div>

      <input 
        ref={fileRef}
        type="file" 
        className="hidden" 
        onChange={handleImageUpload} 
        accept="image/*"
      />

      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-beige-light font-medium uppercase tracking-[0.3em] text-xs mb-6">
            Salé's Finest Coffee Shop
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-white font-bold leading-tight mb-8">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="hero-cta-menu"
              href="#menu"
              className="bg-coffee-brown text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-espresso-dark transition-all transform hover:scale-105"
            >
              {t('hero.cta')}
            </a>
            <a
              id="hero-cta-location"
              href="#location"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105"
            >
              {lang === 'ar' ? 'موقعنا' : lang === 'fr' ? 'Nous trouver' : 'Visit Us'}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
}
