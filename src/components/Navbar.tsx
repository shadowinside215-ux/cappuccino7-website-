import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useTranslation, Language } from '../lib/i18n';
import { useDocument } from '../lib/hooks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useTranslation();
  const { data: settings } = useDocument<any>('settings', 'global');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#location' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ];

  const logoUrl = settings?.logoUrl || "/input_file_1.png";

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-3 group">
            <img src={logoUrl} alt="Cappuccino 7 Logo" className="h-12 w-auto md:h-14 transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-espresso-dark">
              Cappuccino <span className="text-coffee-brown">7</span>
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-espresso-dark hover:text-coffee-brown transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-2 border-l border-beige-light pl-6">
            <Globe size={14} className="text-coffee-brown" />
            <div className="flex space-x-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-all ${
                    lang === l.code ? 'bg-coffee-brown text-white' : 'text-espresso-dark hover:text-coffee-brown'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="tel:+212777305155"
            className="flex items-center space-x-2 bg-coffee-brown text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-espresso-dark transition-all"
          >
            <Phone size={16} />
            <span>{lang === 'ar' ? 'اتصل بنا' : lang === 'fr' ? 'Appelez-nous' : 'Call Us'}</span>
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <div className="flex space-x-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  lang === l.code ? 'bg-coffee-brown text-white' : 'text-espresso-dark bg-white/50'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button id="mobile-menu-button" onClick={() => setIsOpen(!isOpen)} className="text-espresso-dark">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-bg border-t border-beige-light overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif text-espresso-dark border-b border-beige-light/50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+212777305155"
                className="flex items-center justify-center space-x-2 bg-coffee-brown text-white w-full py-3 rounded-xl"
              >
                <Phone size={18} />
                <span>{lang === 'ar' ? 'اتصل بنا الآن' : lang === 'fr' ? 'Appelez-nous' : 'Call Us Now'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
