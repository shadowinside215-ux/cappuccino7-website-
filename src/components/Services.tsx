import { motion } from 'motion/react';
import { Coffee, Truck, Utensils } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export default function Services() {
  const { t, isRTL } = useTranslation();

  const services = [
    {
      icon: <Utensils size={32} className="text-coffee-brown" />,
      title: t('services.s1_title'),
      description: t('services.s1_desc')
    },
    {
      icon: <Coffee size={32} className="text-coffee-brown" />,
      title: t('services.s2_title'),
      description: t('services.s2_desc')
    },
    {
      icon: <Truck size={32} className="text-coffee-brown" />,
      title: t('services.s3_title'),
      description: t('services.s3_desc')
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="group p-10 rounded-[40px] bg-warm-bg/50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-beige-light"
            >
              <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${isRTL ? 'mr-0 ml-auto' : ''}`}>
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
