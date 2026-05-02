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
    </div>
  );
}

