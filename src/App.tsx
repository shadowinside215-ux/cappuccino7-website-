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

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    (window as any).toggleAdmin = () => setIsAdminOpen(true);
    
    // Auto open if URL has admin param
    if (window.location.search.includes('admin=true')) {
      setIsAdminOpen(true);
    }
  }, []);

  return (
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
      
      {/* Floating WhatsApp Button for Mobile */}
      <a
        href="https://wa.me/212777305155"
        className="md:hidden fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110"
        aria-label="WhatsApp Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 1 1 0 0 1 1 1 8.5 8.5 0 0 1-7.5 10.5 8.5 8.5 0 0 1 10.5-7.5 1 1 0 0 1 1 1.1 8.38 8.38 0 0 1-.9 3.8"></path><path d="M17.5 7.1c.1.3.1.6 0 .9l-2 5c-.1.3-.4.5-.7.5h-2.1c-.3 0-.6-.2-.7-.5l-2-5c-.1-.3-.1-.6 0-.9l.5-1.1c.1-.3.4-.5.7-.5h3.1c.3 0 .6.2.7.5z"></path></svg>
      </a>
    </div>
  );
}

