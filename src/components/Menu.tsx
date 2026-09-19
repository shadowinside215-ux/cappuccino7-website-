import AnimatedHeading from './AnimatedHeading';
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

  // Deduplicate items by both ID and normalized name to prevent duplicate keys
  const normalize = (str: string) =>
    (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/omelette/g, 'omlette')
      .replace(/[^a-z0-9]/g, '');

  const allItems = [...dbItems, ...MENU_ITEMS];
  const uniqueItems: MenuItem[] = [];
  const seenIds = new Set<string>();
  const seenNames = new Set<string>();

  allItems.forEach((item) => {
    if (!item) return;
    const rawId = item.id ? String(item.id).trim() : '';
    const normName = normalize(item.name);

    if (rawId && seenIds.has(rawId)) {
      return;
    }
    if (normName && seenNames.has(normName)) {
      return;
    }

    if (rawId) seenIds.add(rawId);
    if (normName) seenNames.add(normName);
    uniqueItems.push(item);
  });

  const categories: string[] = Array.from(new Set(uniqueItems.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState('');

  // Set initial category when data loads
  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      if (categories.includes('Breakfast')) {
        setActiveCategory('Breakfast');
      } else {
        setActiveCategory(categories[0]);
      }
    }
  }, [categories, activeCategory]);

  let filteredItems = uniqueItems.filter((item) => item.category === activeCategory);

  // Apply strict ordering for Breakfast category
  if (activeCategory === 'Breakfast') {
    const topIds = ['b5', 'b7', 'b9', 'b1', 'b2', 'b4', 'b8'];
    const topNames = [
      'ftour chamali',
      'cappuccino7 breakfast',
      'turkie',
      'occidental',
      'amazigh',
      'ftour fassi',
      'healthy breakfast'
    ];

    const bottomIds = ['b3', 'b6', 'b10'];
    const bottomNames = [
      'gourmand',
      'omlette',
      'anglais'
    ];

    filteredItems.sort((a, b) => {
      const aId = (a.id || '').trim();
      const bId = (b.id || '').trim();
      const aNorm = normalize(a.name);
      const bNorm = normalize(b.name);

      const aTopIdx = topIds.indexOf(aId) !== -1 ? topIds.indexOf(aId) : topNames.findIndex(n => aNorm.includes(n));
      const bTopIdx = topIds.indexOf(bId) !== -1 ? topIds.indexOf(bId) : topNames.findIndex(n => bNorm.includes(n));

      // Both are in top list
      if (aTopIdx !== -1 && bTopIdx !== -1) return aTopIdx - bTopIdx;
      // Only A is in top list
      if (aTopIdx !== -1) return -1;
      // Only B is in top list
      if (bTopIdx !== -1) return 1;

      const aBottomIdx = bottomIds.indexOf(aId) !== -1 ? bottomIds.indexOf(aId) : bottomNames.findIndex(n => aNorm.includes(n));
      const bBottomIdx = bottomIds.indexOf(bId) !== -1 ? bottomIds.indexOf(bId) : bottomNames.findIndex(n => bNorm.includes(n));

      // Both are in bottom list
      if (aBottomIdx !== -1 && bBottomIdx !== -1) return aBottomIdx - bBottomIdx;
      // Only A is in bottom list
      if (aBottomIdx !== -1) return 1;
      // Only B is in bottom list
      if (bBottomIdx !== -1) return -1;

      return 0;
    });
  }

  const loyaltyImg = settings?.loyaltyImage || "/input_file_1.png";

  if (loading && uniqueItems.length === 0) return null;

  return (
    <section id="menu" className="py-24 px-4 bg-warm-bg overflow-hidden min-h-[800px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
            {t('menu.subtitle')}
          </span>
          <div className="font-serif text-4xl md:text-5xl font-bold mb-6 text-espresso-dark flex justify-center">
            <AnimatedHeading text={t('menu.title')} tag="h2" className="text-espresso-dark justify-center" />
          </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(() => {
                const usedKeys = new Set<string>();
                return filteredItems.map((item: MenuItem, index: number) => {
                  let uniqueKey = item.id ? String(item.id).trim() : `item-${index}`;
                  if (usedKeys.has(uniqueKey)) {
                    uniqueKey = `${uniqueKey}-${index}`;
                  }
                  usedKeys.add(uniqueKey);
                  return (
                    <div key={uniqueKey}>
                      <MenuCard item={item} />
                    </div>
                  );
                });
              })()}
            </div>
          </motion.div>
        </AnimatePresence>

        {settings?.menuPdfUrl && (
          <div className="mt-20 pt-16 border-t border-coffee-brown/20 flex flex-col items-center text-center">
            <h3 className="font-serif text-3xl font-bold text-espresso-dark mb-4">
              {t('menu.download_pdf_title') || 'Download Our Full Menu'}
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl text-lg font-light">
              {t('menu.download_pdf_desc') || 'Want to keep a copy? Download our complete menu in PDF format to view all our offerings at your convenience.'}
            </p>
            <a
              href={settings.menuPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-espresso-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-coffee-brown transition-all shadow-xl hover:shadow-coffee-brown/40 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <Download size={20} /> {t('menu.download_pdf') || 'Download Menu PDF'}
            </a>
          </div>
        )}
      </div>
    </section>

  );
}

import { Coffee, Download } from 'lucide-react';

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
