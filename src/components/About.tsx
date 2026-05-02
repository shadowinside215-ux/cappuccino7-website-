import { motion } from 'motion/react';
import { Star, Coffee, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Star className="text-coffee-brown" />, value: '4.8', label: 'Average Rating' },
    { icon: <Users className="text-coffee-brown" />, value: '2.8k+', label: 'Happy Guests' },
    { icon: <Clock className="text-coffee-brown" />, value: '15h', label: 'Daily Service' },
    { icon: <Coffee className="text-coffee-brown" />, value: '50+', label: 'Menu Items' },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-espresso-dark">
              A Warm Sanctuary <br /> for Coffee Lovers
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              Located in the heart of Taha Palace, Salé, Cappuccino 7 is more than just a café. 
              It's a welcoming space designed for people who appreciate the finer things in life: 
              a perfectly brewed espresso, fresh artisanal crepes, and a relaxing vibe.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
              Whether you're starting your morning with a traditional Moroccan breakfast 
              or winding down in the evening, our friendly staff is here to make your 
              experience memorable.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-espresso-dark">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                alt="Cafe Atmosphere"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-latte-cream/20 rounded-[40px] -z-0 rotate-12" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-coffee-brown/20 rounded-full -z-0" />
            
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <p className="font-serif italic text-lg text-espresso-dark">
                "The atmosphere here is unmatched in Salé. Truly a hidden gem."
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-coffee-brown">— Regular Guest</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
