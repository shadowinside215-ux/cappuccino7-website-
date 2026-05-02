import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface i18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'hero.title': 'The Best Coffee Experience in Salé',
    'hero.subtitle': 'Welcome to Cappuccino 7, where every cup tells a story of quality, comfort, and authentic Moroccan atmosphere.',
    'hero.cta': 'Explore Menu',
    'about.title': 'Crafting Moments, One Cup at a Time',
    'about.p1': 'Located in the heart of Salé, Cappuccino 7 is more than just a café—it\'s a destination for coffee lovers and food enthusiasts alike.',
    'about.p2': 'Our journey began with a simple passion: to bring a premium, contemporary coffee experience to our community while preserving the warmth of Moroccan hospitality.',
    'about.stat1': 'Average Rating',
    'about.stat2': 'Happy Guests',
    'about.stat3': 'Menu Items',
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Taste the Excellence',
    'menu.app': 'Open Cappuccino 7 App',
    'menu.loyalty.title': 'Stamps. Points. Free Rewards.',
    'menu.loyalty.desc': 'Collect 11 Stamps on any drink or dish to unlock it for free! Every DH spent also earns you points for elite status gifts.',
    'gallery.title': 'A Glimpse into Our Atmosphere',
    'gallery.subtitle': 'Atmosphere',
    'gallery.social': 'Follow our daily stories',
    'location.title': 'Visit Us',
    'location.subtitle': 'Find Us',
    'location.hours.title': 'Opening Hours',
    'location.hours.days': 'Everyday',
    'location.hours.time': '08:00 - 23:00',
    'location.address.title': 'Address',
    'location.address.text': 'Mahaj Salé, Rabat-Salé-Kénitra, Morocco',
    'location.phone.title': 'Phone',
    'location.connect': 'Connect with us',
    'services.s1_title': 'Dine-in Experience',
    'services.s1_desc': 'Enjoy our cozy and premium atmosphere with comfortable seating and free high-speed WiFi.',
    'services.s2_title': 'Quick Takeaway',
    'services.s2_desc': 'In a hurry? Order your coffee or snacks for quick pickup and enjoy on the go.',
    'services.s3_title': 'Express Delivery',
    'services.s3_desc': 'We bring the taste of Cappuccino 7 to your doorstep in Salé. Fresh and hot.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.gallery': 'Galerie',
    'nav.menu': 'Menu',
    'nav.contact': 'Contact',
    'hero.title': 'La meilleure expérience café à Salé',
    'hero.subtitle': 'Bienvenue chez Cappuccino 7, où chaque tasse raconte une histoire de qualité, de confort et d\'atmosphère marocaine authentique.',
    'hero.cta': 'Explorer le menu',
    'about.title': 'Créer des moments, une tasse à la fois',
    'about.p1': 'Situé au cœur de Salé, Cappuccino 7 est plus qu\'un simple café—c\'est une destination pour les amateurs de café et les passionnés de cuisine.',
    'about.p2': 'Notre aventure a commencé avec une passion simple : apporter une expérience café premium et contemporaine à notre communauté tout en préservant la chaleur de l\'hospitalité marocaine.',
    'about.stat1': 'Note moyenne',
    'about.stat2': 'Clients heureux',
    'about.stat3': 'Articles au menu',
    'menu.title': 'Notre Menu',
    'menu.subtitle': 'Goûtez à l\'Excellence',
    'menu.app': 'Ouvrir l\'App Cappuccino 7',
    'menu.loyalty.title': 'Timbres. Points. Récompenses.',
    'menu.loyalty.desc': 'Collectionnez 11 timbres sur n\'importe quelle boisson ou plat pour le débloquer gratuitement ! Chaque DH dépensé vous rapporte également des points pour des cadeaux de statut élite.',
    'gallery.title': 'Un aperçu de notre atmosphère',
    'gallery.subtitle': 'Atmosphère',
    'gallery.social': 'Suivez nos histoires quotidiennes',
    'location.title': 'Visitez-nous',
    'location.subtitle': 'Nous trouver',
    'location.hours.title': 'Heures d\'ouverture',
    'location.hours.days': 'Tous les jours',
    'location.hours.time': '08:00 - 23:00',
    'location.address.title': 'Adresse',
    'location.address.text': 'Mahaj Salé, Rabat-Salé-Kénitra, Maroc',
    'location.phone.title': 'Téléphone',
    'location.connect': 'Connectez-vous avec nous',
    'services.s1_title': 'Expérience sur place',
    'services.s1_desc': 'Profitez de notre atmosphère chaleureuse et haut de gamme avec des sièges confortables et une connexion WiFi haut débit gratuite.',
    'services.s2_title': 'Vente à emporter',
    'services.s2_desc': 'Pressé ? Commandez votre café ou vos collations à emporter et profitez-en sur le pouce.',
    'services.s3_title': 'Livraison Express',
    'services.s3_desc': 'Nous apportons le goût de Cappuccino 7 à votre porte à Salé. Frais et chaud.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عن كابتشينو 7',
    'nav.gallery': 'المعرض',
    'nav.menu': 'القائمة',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'أفضل تجربة قهوة في سلا',
    'hero.subtitle': 'مرحباً بكم في كابتشينو 7، حيث تحكي كل كوب قصة من الجودة والراحة والأجواء المغربية الأصيلة.',
    'hero.cta': 'اكتشف القائمة',
    'about.title': 'نصنع اللحظات، فنجاناً تلو الآخر',
    'about.p1': 'يقع كابتشينو 7 في قلب مدينة سلا، وهو أكثر من مجرد مقهى - إنه وجهة لعشاق القهوة ومحبي الطعام على حد سواء.',
    'about.p2': 'بدأت رحلتنا بشغف بسيط: تقديم تجربة قهوة عصرية ومميزة لمجتمعنا مع الحفاظ على دفء الضيافة المغربية.',
    'about.stat1': 'متوسط التقييم',
    'about.stat2': 'ضيوف سعداء',
    'about.stat3': 'أصناف المنيو',
    'menu.title': 'قائمتنا',
    'menu.subtitle': 'تذوق التميز',
    'menu.app': 'افتح تطبيق كابتشينو 7',
    'menu.loyalty.title': 'طوابع. نقاط. مكافآت مجانية.',
    'menu.loyalty.desc': 'اجمع 11 طابعاً على أي مشروب أو طبق للحصول عليه مجاناً! كل درهم تنفقه يمنحك أيضاً نقاطاً لهدايا النخبة.',
    'gallery.title': 'لمحة عن أجوائنا',
    'gallery.subtitle': 'الأجواء',
    'gallery.social': 'تابع قصصنا اليومية',
    'location.title': 'تفضل بزيارتنا',
    'location.subtitle': 'موقعنا',
    'location.hours.title': 'أوقات العمل',
    'location.hours.days': 'يومياً',
    'location.hours.time': '08:00 - 23:00',
    'location.address.title': 'العنوان',
    'location.address.text': 'مهاج سلا، الرباط-سلا-القنيطرة، المغرب',
    'location.phone.title': 'الهاتف',
    'location.connect': 'تواصل معنا',
    'services.s1_title': 'تجربة في المحل',
    'services.s1_desc': 'استمتع بأجوائنا المريحة والمميزة مع جلسات مريحة وخدمة واي فاي سريعة مجانية.',
    'services.s2_title': 'طلبات خارجية سريعة',
    'services.s2_desc': 'على عجلة؟ اطلب قهوتك أو وجباتك الخفيفة للاستلام السريع واستمتع بها أثناء التنقل.',
    'services.s3_title': 'توصيل سريع',
    'services.s3_desc': 'نأتي بمذاق كابتشينو 7 إلى عتبة دارك في سلا. طازج وساخن.',
  }
};

const i18nContext = createContext<i18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => {
    // @ts-ignore
    const text = translations[lang][key] || translations['en'][key] || key;
    return text;
  };

  const isRTL = lang === 'ar';

  return (
    <i18nContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </i18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(i18nContext);
  if (!context) throw new Error('useTranslation must be used within I18nProvider');
  return context;
}
