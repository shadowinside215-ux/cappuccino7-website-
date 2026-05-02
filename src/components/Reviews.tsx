import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 bg-espresso-dark text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-brown/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-latte-cream/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} className="text-latte-cream" />
            ))}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Voices of Salé
          </h2>
          <p className="text-white/60 uppercase tracking-widest text-xs font-semibold">
            Rated 4.8/5 by 2,800+ guests on Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={review.id}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10 flex flex-col h-full"
            >
              <Quote className="text-latte-cream mb-6" size={32} />
              <p className="text-white/80 text-lg leading-relaxed mb-10 flex-grow italic font-light">
                "{review.comment}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-widest">{review.author}</h4>
                  <p className="text-xs text-white/40 mt-1">{review.date}</p>
                </div>
                <div className="flex items-center space-x-1 text-latte-cream">
                  <Star size={12} fill="currentColor" />
                  <span className="text-sm font-bold">{review.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-latte-cream hover:text-white transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Read All Google Reviews</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              →
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
