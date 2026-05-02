import { motion } from 'motion/react';
import { useDocument } from '../lib/hooks';

export default function Hero() {
  const { data: settings } = useDocument<any>('settings', 'global');

  const title = settings?.heroTitle || 'The Best Coffee Experience in Salé';
  const subtitle = settings?.heroSubtitle || 'Welcome to Cappuccino 7, where every cup tells a story of quality, comfort, and authentic Moroccan atmosphere.';
  const image = settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920';

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Cappuccino 7 Cafe"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-espresso-dark/40" />
      </div>

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
              View Menu
            </a>
            <a
              id="hero-cta-location"
              href="#location"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Visit Us
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
