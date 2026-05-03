/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import LocationAndContact from './components/Location';
import Footer from './components/Footer';
import AdminDashboard from './components/Admin/AdminDashboard';
import { I18nProvider } from './lib/i18n';
import { useDocument } from './lib/hooks';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const { data: settings } = useDocument<any>('settings', 'global');

  useEffect(() => {
    (window as any).toggleAdmin = () => setIsAdminOpen(true);
    
    // Auto open if URL has admin param
    if (window.location.search.includes('admin=true')) {
      setIsAdminOpen(true);
    }
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
        {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <MenuSection />
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

