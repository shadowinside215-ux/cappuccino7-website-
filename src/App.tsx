/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import LoyaltySection from './components/LoyaltySection';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import LocationAndContact from './components/Location';
import Footer from './components/Footer';

import { I18nProvider } from './lib/i18n';
import { useDocument } from './lib/hooks';
import { Coffee } from 'lucide-react';
import AdminDashboard from './components/Admin/AdminDashboard';

export default function App() {
  
  const { data: settings, loading } = useDocument<any>('settings', 'global');
  const [showAdmin, setShowAdmin] = useState(false);

  // Make toggle globally available
  useEffect(() => {
    (window as any).toggleAdmin = () => setShowAdmin(p => !p);
  }, []);

  // Update favicon if logoUrl changes
  useEffect(() => {
    if (settings?.logoUrl) {
      const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (link) {
        link.href = settings.logoUrl;
      }
      const appleLink = document.querySelector("link[rel~='apple-touch-icon']") as HTMLLinkElement;
      if (appleLink) {
        appleLink.href = settings.logoUrl;
      }
    }
  }, [settings?.logoUrl]);

  return (
    <I18nProvider>
      <div className="min-h-screen selection:bg-coffee-brown selection:text-white">
        {loading ? (
          <div className="h-screen w-full bg-espresso-dark flex flex-col items-center justify-center fixed inset-0 z-[9999]">
            <Coffee className="w-16 h-16 text-coffee-brown animate-spin" />
          </div>
        ) : null}
        
        
        {showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}
        <Navbar />
        <main>
          <Hero />
          <About />
          <MenuSection />
          <LoyaltySection />
          <Services />
          <Gallery />
          <Reviews />
          <LocationAndContact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

