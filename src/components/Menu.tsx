import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { useCollection } from '../lib/hooks';
import { MenuItem } from '../types';

export default function MenuSection() {
  const categories = ['Coffee', 'Breakfast', 'Crepes & Snacks', 'Juices'];
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const { data: dbItems, loading } = useCollection<MenuItem>('menuItems', 'order');

  const itemsToShow = dbItems.length > 0 ? dbItems : MENU_ITEMS;
  const filteredItems = itemsToShow.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-4 bg-warm-bg overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
          Taste the Excellence
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-espresso-dark">
          Our Special Menu
        </h2>
        <div className="w-24 h-1 bg-coffee-brown mx-auto rounded-full mb-12" />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              id={`cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-coffee-brown text-white border-coffee-brown shadow-lg'
                  : 'bg-white text-espresso-dark border-beige-light hover:border-coffee-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="bg-white p-4 rounded-[32px] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-espresso-dark">
                      {item.name}
                    </h3>
                    <span className="text-coffee-brown font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20">
          <p className="text-sm text-gray-400 italic">
            * All prices are in Moroccan Dirhams (MAD) and include tax.
          </p>
        </div>
      </div>
    </section>
  );
}
