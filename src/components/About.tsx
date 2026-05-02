import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Coffee, Users, Clock, Edit2, Check, X, Camera } from 'lucide-react';
import { useDocument } from '../lib/hooks';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { uploadImage } from '../lib/cloudinary';
import { useTranslation } from '../lib/i18n';

export default function About() {
  const { data: settings, loading } = useDocument<any>('settings', 'global');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [tempNote, setTempNote] = useState('');
  const [tempAuthor, setTempAuthor] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { t, isRTL } = useTranslation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAdmin(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="py-24 px-4 bg-white flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-coffee-brown border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  const stats = [
    { icon: <Star className="text-coffee-brown" />, value: '4.8', label: t('about.stat1') },
    { icon: <Users className="text-coffee-brown" />, value: '2.8k+', label: t('about.stat2') },
    { icon: <Clock className="text-coffee-brown" />, value: '15h', label: 'Service' },
    { icon: <Coffee className="text-coffee-brown" />, value: '50+', label: t('about.stat3') },
  ];

  const handleSaveNote = async () => {
    try {
      await setDoc(doc(db, 'settings', 'global'), { 
        ...settings, 
        atmosphereQuote: tempNote,
        atmosphereAuthor: tempAuthor
      }, { merge: true });
      setIsEditingNote(false);
    } catch (err) {
      console.error(err);
      alert('Failed to save changes');
    }
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    const cloudName = localStorage.getItem('cl_name') || process.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = localStorage.getItem('cl_preset') || process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!file || !cloudName || !uploadPreset) return alert('Cloudinary settings missing in Admin Dashboard');

    setIsUploading(true);
    try {
      const url = await uploadImage(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, atmosphereImage: url }, { merge: true });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const quote = settings?.atmosphereQuote || t('gallery.title');
  const author = settings?.atmosphereAuthor || "— Regular Guest";
  const atmosphereImage = settings?.atmosphereImage || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
              {t('nav.about')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-espresso-dark">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-espresso-dark">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 transition-all ${isUploading ? 'opacity-50' : ''}`}>
              <img
                src={atmosphereImage}
                alt="Cafe Atmosphere"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {isAdmin && (
                <div 
                  onClick={() => fileRef.current?.click()}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-all text-white z-30"
                >
                  <Camera size={40} />
                  <span className="text-xs font-bold uppercase tracking-widest mt-4">Change Atmosphere Photo</span>
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
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-latte-cream/20 rounded-[40px] -z-0 rotate-12" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-coffee-brown/20 rounded-full -z-0" />
            
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 max-w-[240px] group">
              {isEditingNote ? (
                <div className="space-y-3">
                  <textarea 
                    value={tempNote}
                    onChange={(e) => setTempNote(e.target.value)}
                    className="w-full bg-white/50 p-2 rounded-lg text-sm font-serif italic outline-none border border-coffee-brown/20"
                    rows={3}
                  />
                  <input 
                    value={tempAuthor}
                    onChange={(e) => setTempAuthor(e.target.value)}
                    className="w-full bg-white/50 p-2 rounded-lg text-[10px] uppercase font-bold outline-none border border-coffee-brown/20"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSaveNote} className="bg-coffee-brown text-white p-2 rounded-lg flex-1 flex justify-center"><Check size={16} /></button>
                    <button onClick={() => setIsEditingNote(false)} className="bg-gray-200 text-gray-500 p-2 rounded-lg flex-1 flex justify-center"><X size={16} /></button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-serif italic text-lg text-espresso-dark">
                    "{quote}"
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-coffee-brown">{author}</p>
                  {isAdmin && (
                    <button 
                      onClick={() => {
                        setTempNote(quote);
                        setTempAuthor(author);
                        setIsEditingNote(true);
                      }}
                      className="absolute -top-2 -right-2 p-2 bg-coffee-brown text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"
                    >
                      <Edit2 size={12} />
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
