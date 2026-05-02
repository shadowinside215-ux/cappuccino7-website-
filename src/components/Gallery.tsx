import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import { useDocument } from '../lib/hooks';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { uploadImage } from '../lib/cloudinary';

export default function Gallery() {
  const { data: settings } = useDocument<any>('settings', 'global');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUploading, setIsUploading] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [currentReplaceIdx, setCurrentReplaceIdx] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAdmin(!!user);
    });
    return () => unsubscribe();
  }, []);
  
  const images = settings?.galleryImages?.length > 0 
    ? settings.galleryImages.map((url: string, i: number) => ({ id: i.toString(), url, alt: `Gallery ${i}` }))
    : GALLERY_IMAGES;

  const handleImageClick = (idx: number) => {
    if (!isAdmin) return;
    setCurrentReplaceIdx(idx);
    fileRef.current?.click();
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    const cloudName = localStorage.getItem('cl_name') || process.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = localStorage.getItem('cl_preset') || process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!file || !cloudName || !uploadPreset || currentReplaceIdx === null) return;

    setIsUploading(currentReplaceIdx);
    try {
      const url = await uploadImage(file, cloudName, uploadPreset);
      const newImages = [...images.map((img: any) => img.url)];
      newImages[currentReplaceIdx] = url;
      await setDoc(doc(db, 'settings', 'global'), { ...settings, galleryImages: newImages }, { merge: true });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsUploading(null);
      setCurrentReplaceIdx(null);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
              Visual Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso-dark">
              Glimpses of <br /> Our Atmosphere
            </h2>
          </div>
          <div className="text-gray-500 font-light max-w-sm">
            Experience the harmony of traditional Moroccan hospitality and modern café culture through our lens.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input 
            ref={fileRef}
            type="file" 
            className="hidden" 
            onChange={handleImageUpload} 
            accept="image/*"
          />
          
          {/* Main big image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`col-span-2 row-span-2 aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-lg relative group ${isUploading === 0 ? 'opacity-50' : ''}`}
            onClick={() => handleImageClick(0)}
          >
            <img 
              src={images[0].url} 
              alt={images[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {isAdmin && (
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white z-10">
                <Camera size={40} />
                <span className="text-xs font-bold uppercase tracking-widest mt-4">Replace Photo</span>
              </div>
            )}
          </motion.div>

          {/* Smaller grid images */}
          {images.slice(1, 5).map((img: any, idx: number) => {
            const actualIdx = idx + 1;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                key={img.id}
                className={`aspect-square rounded-[24px] overflow-hidden shadow-md relative group ${isUploading === actualIdx ? 'opacity-50' : ''}`}
                onClick={() => handleImageClick(actualIdx)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {isAdmin && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white z-10">
                    <Camera size={24} />
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-2">Replace</span>
                  </div>
                )}
              </motion.div>
            );
          })}
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex aspect-square rounded-[24px] bg-beige-light/30 items-center justify-center p-8 text-center"
          >
            <div>
              <p className="font-serif italic text-espresso-dark text-xl mb-4">Follow our daily stories</p>
              <a href="https://www.instagram.com/cappuccino7.mahajsala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-coffee-brown font-bold uppercase tracking-widest text-xs hover:underline">@cappuccino7.ma</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
