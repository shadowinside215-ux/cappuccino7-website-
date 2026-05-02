import { motion } from 'motion/react';
import { Coffee, Truck, Utensils } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Utensils size={32} className="text-coffee-brown" />,
      title: 'Dine-in Experience',
      description: 'Enjoy our cozy and premium atmosphere with comfortable seating and free high-speed WiFi.'
    },
    {
      icon: <Coffee size={32} className="text-coffee-brown" />,
      title: 'Quick Takeaway',
      description: 'In a hurry? Order your coffee or snacks for quick pickup and enjoy on the go.'
    },
    {
      icon: <Truck size={32} className="text-coffee-brown" />,
      title: 'Express Delivery',
      description: 'We bring the taste of Cappuccino 7 to your doorstep in Salé. Fresh and hot.'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="group p-10 rounded-[40px] bg-warm-bg/50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-beige-light"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso-dark mb-4">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
