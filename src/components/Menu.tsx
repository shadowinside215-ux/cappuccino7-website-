import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { useCollection } from '../lib/hooks';
import { MenuItem } from '../types';
import { useTranslation } from '../lib/i18n';

export default function MenuSection() {
  const categories: string[] = [];
  const [activeCategory, setActiveCategory] = useState('');
  const { data: dbItems, loading } = useCollection<MenuItem>('menuItems', 'order');
  const { t } = useTranslation();

  const itemsToShow = dbItems.length > 0 ? dbItems : [];
  const filteredItems = itemsToShow.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-4 bg-warm-bg overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
          {t('menu.subtitle')}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-espresso-dark">
          {t('menu.title')}
        </h2>
        <div className="w-24 h-1 bg-coffee-brown mx-auto rounded-full mb-12" />

        <div className="py-20 bg-white/50 rounded-[40px] border border-dashed border-coffee-brown/20 flex flex-col items-center">
          <div className="max-w-md w-full px-8 py-10 bg-white rounded-[32px] shadow-xl border border-beige-light">
            <h3 className="font-serif text-2xl font-bold text-espresso-dark mb-4">{t('menu.loyalty.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {t('menu.loyalty.desc')}
            </p>
            <a 
              href="#" 
              className="inline-block w-full bg-coffee-brown text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-espresso-dark transition-all shadow-lg hover:shadow-coffee-brown/20"
            >
              {t('menu.app')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
