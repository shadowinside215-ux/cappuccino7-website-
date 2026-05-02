import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function LocationAndContact() {
  return (
    <section id="location" className="py-24 px-4 bg-warm-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coffee-brown font-medium uppercase tracking-widest text-sm mb-4 block">
              Find Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-espresso-dark">
              Where to Visit
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-coffee-brown">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-espresso-dark uppercase tracking-widest text-sm mb-1">Our Address</h4>
                  <p className="text-gray-600 font-light">Avenue Moulay Rachid, Taha Palace, <br />Salé 11000, Morocco</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-coffee-brown">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-espresso-dark uppercase tracking-widest text-sm mb-1">WhatsApp Us</h4>
                  <p className="text-gray-600 font-light">
                    <a href="https://wa.me/212777305155" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-brown transition-colors">
                      +212 7 77 30 51 55
                    </a>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Available for delivery & inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-coffee-brown">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-espresso-dark uppercase tracking-widest text-sm mb-1">Email</h4>
                  <p className="text-gray-600 font-light">hello@cappuccino7.ma</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-12">
              <a href="https://www.instagram.com/cappuccino7.mahajsala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-espresso-dark hover:bg-coffee-brown hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="https://web.facebook.com/people/Cappuccino7Mahajsala/100069623504882/?locale=fr_FR&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-espresso-dark hover:bg-coffee-brown hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=X7W6%2BQW6%2C+Av.+Moulay+Rachid%2C+Sal%C3%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-espresso-dark text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-coffee-brown transition-all shadow-lg"
            >
              <Navigation size={18} />
              <span>Get Directions</span>
            </a>
          </motion.div>

          {/* Map & Simple Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Embedded Map Placeholder (Since I can't embed real interactive maps easily without API keys, I'll use a stylized iframe or visual) */}
            <div className="w-full aspect-[16/9] bg-white rounded-[32px] overflow-hidden shadow-inner border border-beige-light group relative">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                title="Cappuccino 7 Location"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Avenue%20Moulay%20Rachid,%20Taha%20Palace,%20Sal%C3%A9,%20Morocco+(Cappuccino%207)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white rounded-[32px]" />
            </div>

            <div id="contact" className="bg-white p-8 rounded-[32px] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-espresso-dark mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-5 py-3 rounded-xl bg-warm-bg border-none outline-none focus:ring-2 focus:ring-coffee-brown/20 text-sm"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-5 py-3 rounded-xl bg-warm-bg border-none outline-none focus:ring-2 focus:ring-coffee-brown/20 text-sm"
                  />
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Your Message" 
                  className="w-full px-5 py-3 rounded-xl bg-warm-bg border-none outline-none focus:ring-2 focus:ring-coffee-brown/20 text-sm resize-none"
                />
                <button 
                  type="submit" 
                  className="w-full bg-coffee-brown text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-espresso-dark transition-all"
                >
                  Message Us
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
