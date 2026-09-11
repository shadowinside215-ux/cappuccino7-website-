import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { useCollection, useDocument } from '../lib/hooks';
import { MenuItem } from '../types';
import { useTranslation } from '../lib/i18n';

export default function MenuSection() {
  const { data: dbItems, loading } = useCollection<MenuItem>('menuItems', 'order');
  const { data: settings } = useDocument<any>('settings', 'global');
  const { t, isRTL } = useTranslation();

  const itemsToShow = [...dbItems];
  MENU_ITEMS.forEach(localItem => {
    if (!itemsToShow.find(i => i.id === localItem.id)) {
      itemsToShow.push(localItem);
    }
  });

  const categories: string[] = Array.from(new Set(itemsToShow.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0] || '');

  // Set initial category when data loads
  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredItems = itemsToShow.filter((item) => item.category === activeCategory);

  const loyaltyImg = settings?.loyaltyImage || "/input_file_1.png";

  if (loading && itemsToShow.length === 0) return null;

  return (
    <section id="menu" className="py-24 px-4 bg-warm-bg overflow-hidden min-h-[800px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
            {t('menu.subtitle')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-espresso-dark">
            {t('menu.title')}
          </h2>
          <div className="w-24 h-1 bg-coffee-brown mx-auto rounded-full mb-8" />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={t(cat) || cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-coffee-brown text-white shadow-lg' 
                    : 'bg-white text-gray-400 hover:text-coffee-brown'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-10"
          >
            {settings?.categoryImages?.[activeCategory] && (
              <div className="w-full rounded-[32px] overflow-hidden relative shadow-lg bg-transparent">
                <img 
                  src={settings.categoryImages[activeCategory]} 
                  alt={activeCategory} 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-serif text-3xl md:text-5xl font-bold tracking-wider uppercase drop-shadow-lg">
                    {activeCategory}
                  </h3>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item: MenuItem) => (
                <div key={item.id}>
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { Coffee } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({ item }: MenuCardProps) {
  const { t, isRTL } = useTranslation();
  
  return (
    <div className="bg-white p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-beige-light group flex flex-col h-full">
      {item.image ? (
        <div className="w-full rounded-[32px] overflow-hidden mb-6 relative bg-transparent flex items-center justify-center">
          <img 
            src={item.image} 
            alt={t(item.name) || item.name}
            className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-10">
            <span className="text-espresso-dark font-bold text-sm">{item.price}</span>
          </div>
        </div>
      ) : (
        <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-6 relative bg-[#241f1c] flex items-center justify-center">
          <Coffee className="w-16 h-16 text-[#3d3430] group-hover:scale-110 group-hover:text-[#4d423d] transition-all duration-500" strokeWidth={1.5} />
          <div className="absolute top-4 left-4 border border-[#3d3430] bg-transparent px-4 py-2 rounded-full">
            <span className="text-white/90 font-bold text-sm tracking-wide">{item.price}</span>
          </div>
        </div>
      )}
      <div className={`flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
        <h4 className="font-serif text-xl font-bold text-espresso-dark mb-2 group-hover:text-coffee-brown transition-colors">
          {item.name}
        </h4>
        <p className="text-gray-500 text-sm font-light leading-relaxed">
          {t(item.description) || item.description}
        </p>
      </div>
    </div>
  );
}
