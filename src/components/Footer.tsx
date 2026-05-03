import { Instagram, Facebook } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { useDocument } from '../lib/hooks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useTranslation();
  const { data: settings } = useDocument<any>('settings', 'global');

  const logoUrl = settings?.logoUrl || "/input_file_0.png";

  return (
    <footer className={`bg-white border-t border-beige-light pt-20 pb-10 px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 ${isRTL ? 'md:grid-cols-4' : ''}`}>
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="mb-8 flex items-center space-x-4">
              <img src={logoUrl} alt="Cappuccino 7 Logo" className="h-16 w-auto" referrerPolicy="no-referrer" />
              <span className="font-serif text-3xl font-bold tracking-tight text-espresso-dark">
                Cappuccino <span className="text-coffee-brown">7</span>
              </span>
            </a>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed mb-8">
              {t('about.p1')}
            </p>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">{t('location.hours.title')}</h5>
            <ul className="space-y-3 text-sm text-espresso-dark font-medium">
              <li className={`flex justify-between border-b border-beige-light/30 pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-500 font-normal">{t('location.hours.days')}</span>
                <span>{t('location.hours.time')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#about" className="text-espresso-dark hover:text-coffee-brown transition-colors">{t('nav.about')}</a></li>
              <li><a href="#menu" className="text-espresso-dark hover:text-coffee-brown transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#gallery" className="text-espresso-dark hover:text-coffee-brown transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#location" className="text-espresso-dark hover:text-coffee-brown transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige-light/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 tracking-wider uppercase font-medium">
            © {currentYear} Cappuccino 7. All Rights Reserved.
          </p>
          <div className={`flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-400 ${isRTL ? 'space-x-reverse' : ''}`}>
            <button onClick={() => (window as any).toggleAdmin()} className="hover:text-espresso-dark transition-colors">Admin Login</button>
            <a href="#" className="hover:text-espresso-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-espresso-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
