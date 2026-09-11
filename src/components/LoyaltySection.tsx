import { motion } from 'motion/react';
import { useTranslation } from '../lib/i18n';
import { useDocument } from '../lib/hooks';
import { Smartphone, Gift, Star, ArrowRight } from 'lucide-react';

export default function LoyaltySection() {
  const { t, isRTL } = useTranslation();
  const { data: settings } = useDocument<any>('settings', 'global');
  
  const loyaltyImg = settings?.loyaltyImage || "/input_file_1.png";

  return (
    <section className="py-24 px-4 bg-espresso-dark overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-coffee-brown rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-coffee-brown rounded-full blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className={`w-full lg:w-1/2 ${isRTL ? 'text-right lg:pl-8' : 'text-left lg:pr-8'}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-brown/20 border border-coffee-brown/30 text-coffee-brown text-sm font-bold uppercase tracking-widest mb-6">
              <Smartphone size={16} />
              <span>{t('menu.app') || 'Cappuccino 7 App'}</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {t('loyalty.title')} <br />
              <span className="text-coffee-brown">{t('loyalty.subtitle')}</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {t('menu.loyalty.desc') || 'Collect stamps and get free drinks! Download our app today and enjoy exclusive rewards tailored just for you.'}
            </p>

            <div className="space-y-6 mb-10">
              
            </div>
            
            <a 
              href="https://cappuccino7-alpha.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 bg-coffee-brown text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-coffee-brown transition-all shadow-xl hover:shadow-white/10 group"
            >
              <span>{t('loyalty.access')}</span>
              <ArrowRight size={18} className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
          </motion.div>
        </div>

        {/* App Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone frame illusion */}
            <div className="w-[300px] sm:w-[340px] h-[600px] sm:h-[680px] bg-[#111] rounded-[3.5rem] p-4 shadow-2xl shadow-black/50 border-[6px] border-[#222] relative z-10 overflow-hidden transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-7 bg-[#111] w-40 mx-auto rounded-b-3xl z-20 flex justify-center items-end pb-2">
                 <div className="w-12 h-1.5 bg-[#222] rounded-full"></div>
              </div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-warm-bg rounded-[2.5rem] overflow-hidden relative">
                <img src={loyaltyImg} alt="Loyalty App Screen" className="absolute inset-0 w-full h-full object-cover" />
                
                {/* Overlay gradient for contrast if image is too bright */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>

            {/* Decorative floating elements behind phone */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 -right-8 md:-right-12 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full border border-white/10 flex items-center justify-center shadow-2xl z-20"
            >
              <Star className="text-coffee-brown w-10 h-10 fill-coffee-brown" />
            </motion.div>
            
            
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
