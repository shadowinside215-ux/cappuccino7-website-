import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { useDocument } from '../lib/hooks';
import { useTranslation } from '../lib/i18n';

export default function Gallery() {
  const { data: settings, loading } = useDocument<any>('settings', 'global');
  const { t, isRTL } = useTranslation();

  if (loading) {
    return <div className="py-24 px-4 bg-white flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-coffee-brown border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  const images = settings?.galleryImages?.length > 0 
    ? settings.galleryImages.map((url: string, i: number) => ({ id: i.toString(), url, alt: `Gallery ${i}` }))
    : GALLERY_IMAGES;

  return (
    <section id="gallery" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
          <div className="max-w-2xl">
            <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
              {t('gallery.subtitle')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso-dark">
              {t('gallery.title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Main big image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-lg relative group"
          >
            <img 
              src={images[0]?.url || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"} 
              alt="Gallery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex aspect-square rounded-[24px] bg-beige-light/30 items-center justify-center p-8 text-center"
          >
            <div>
              <p className="font-serif italic text-espresso-dark text-xl mb-4">{t('gallery.social')}</p>
              <a href="https://www.instagram.com/cappuccino7.mahajsala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-coffee-brown font-bold uppercase tracking-widest text-xs hover:underline">@cappuccino7.ma</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
