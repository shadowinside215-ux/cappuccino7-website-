import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-espresso-dark">
            Cappuccino <span className="text-coffee-brown">7</span>
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
          <a
            href="https://wa.me/212777305155"
            className="flex items-center space-x-2 bg-coffee-brown text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-espresso-dark transition-all"
          >
            <Phone size={16} />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="md:hidden">
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
                href="https://wa.me/212777305155"
                className="flex items-center justify-center space-x-2 bg-coffee-brown text-white w-full py-3 rounded-xl"
              >
                <Phone size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
