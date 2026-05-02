export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-beige-light pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight text-espresso-dark mb-6 block">
              Cappuccino <span className="text-coffee-brown">7</span>
            </a>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed mb-8">
              Experience the art of coffee and Moroccan hospitality in a refined, 
              modern setting. Your daily sanctuary for comfort and quality in Salé.
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Social</h5>
                <div className="flex space-x-4">
                   <a href="https://www.instagram.com/cappuccino7.mahajsala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-espresso-dark hover:text-coffee-brown transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
                   <a href="https://web.facebook.com/people/Cappuccino7Mahajsala/100069623504882/?locale=fr_FR&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-espresso-dark hover:text-coffee-brown transition-colors uppercase text-xs font-bold tracking-widest">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Opening Hours</h5>
            <ul className="space-y-3 text-sm text-espresso-dark font-medium">
              <li className="flex justify-between border-b border-beige-light/30 pb-2">
                <span className="text-gray-500 font-normal">Mon — Friday</span>
                <span>07:00 — 23:00</span>
              </li>
              <li className="flex justify-between border-b border-beige-light/30 pb-2">
                <span className="text-gray-500 font-normal">Saturday</span>
                <span>08:00 — 23:00</span>
              </li>
              <li className="flex justify-between border-b border-beige-light/30 pb-2">
                <span className="text-gray-500 font-normal">Sunday</span>
                <span>08:00 — 22:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#about" className="text-espresso-dark hover:text-coffee-brown transition-colors">Our Story</a></li>
              <li><a href="#menu" className="text-espresso-dark hover:text-coffee-brown transition-colors">Special Menu</a></li>
              <li><a href="#reviews" className="text-espresso-dark hover:text-coffee-brown transition-colors">Guest Reviews</a></li>
              <li><a href="#location" className="text-espresso-dark hover:text-coffee-brown transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige-light/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 tracking-wider uppercase font-medium">
            © {currentYear} Cappuccino 7. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin Login</button>
            <a href="#" className="hover:text-espresso-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-espresso-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
