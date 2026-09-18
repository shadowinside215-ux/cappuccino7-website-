import AnimatedHeading from './AnimatedHeading';
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
            <div className="font-serif text-4xl md:text-5xl font-bold text-espresso-dark">
              <AnimatedHeading text={t('gallery.title')} tag="h2" className="text-espresso-dark" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img: any, idx: number) => (
            <motion.div
              key={img.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              className={`aspect-square rounded-[32px] overflow-hidden shadow-lg relative group bg-warm-bg ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-auto' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt || "Gallery image"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-bold uppercase tracking-wider">Cappuccino 7</span>
              </div>
            </motion.div>
          ))}

          {/* Social Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="aspect-square rounded-[32px] bg-warm-bg flex items-center justify-center p-8 text-center border border-beige-light hover:shadow-xl transition-all"
          >
            <div>
              <p className="font-serif italic text-espresso-dark text-xl mb-4">{t('gallery.social')}</p>
              <a 
                href="https://www.instagram.com/cappuccino7.mahajsala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-coffee-brown font-bold uppercase tracking-widest text-xs hover:underline"
              >
                @cappuccino7.ma
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
