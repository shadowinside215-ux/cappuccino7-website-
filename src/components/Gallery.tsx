import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { useDocument } from '../lib/hooks';

export default function Gallery() {
  const { data: settings } = useDocument<any>('settings', 'global');
  
  const images = settings?.galleryImages?.length > 0 
    ? settings.galleryImages.map((url: string, i: number) => ({ id: i.toString(), url, alt: `Gallery ${i}` }))
    : GALLERY_IMAGES;

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
          {/* Main big image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-lg"
          >
            <img 
              src={images[0].url} 
              alt={images[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Smaller grid images */}
          {images.slice(1).map((img: any, idx: number) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              key={img.id}
              className="aspect-square rounded-[24px] overflow-hidden shadow-md"
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex aspect-square rounded-[24px] bg-beige-light/30 items-center justify-center p-8 text-center"
          >
            <div>
              <p className="font-serif italic text-espresso-dark text-xl mb-4">Follow our daily stories</p>
              <a href="#" className="text-coffee-brown font-bold uppercase tracking-widest text-xs hover:underline">@cappuccino7.ma</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
