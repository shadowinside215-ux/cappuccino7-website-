import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, Plus, Trash2, Edit2, Upload, Save, X, Image as ImageIcon, Coffee, Grid, Settings as SettingsIcon, Lock } from 'lucide-react';
import { doc, setDoc, writeBatch } from 'firebase/firestore';
import { auth, loginWithGoogle, logout, db } from '../../lib/firebase';
import { useCollection, useDocument, addDocument, updateDocument, removeDocument } from '../../lib/hooks';
import { uploadMedia } from '../../lib/cloudinary';
import { MenuItem } from '../../types';
import { MENU_ITEMS } from '../../constants';

export default function AdminDashboard({ onClose }: { onClose: () => void }) {
  const [user, setUser] = useState(auth.currentUser);
  const [activeTab, setActiveTab] = useState<'menu' | 'gallery' | 'settings'>('menu');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cloudName, setCloudName] = useState(localStorage.getItem('cl_name') || process.env.VITE_CLOUDINARY_CLOUD_NAME || '');
  const [uploadPreset, setUploadPreset] = useState(localStorage.getItem('cl_preset') || process.env.VITE_CLOUDINARY_UPLOAD_PRESET || '');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        if (u.isAnonymous || u.email !== 'dragonballsam86@gmail.com') {
          logout();
          setUser(null);
        } else {
          setUser(u);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleCloudinarySave = () => {
    localStorage.setItem('cl_name', cloudName);
    localStorage.setItem('cl_preset', uploadPreset);
    alert('Cloudinary settings saved locally.');
  };

  const { data: menuItems } = useCollection<MenuItem>('menuItems', 'order');
  const { data: settings } = useDocument<any>('settings', 'global');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    
    try {
      const u = await loginWithGoogle();
      if (u.email !== 'dragonballsam86@gmail.com') {
        await logout();
        setError('Unauthorized email address.');
        return;
      }
      setUser(u);
    } catch (err) {
      setError('Connection error. Please try again.');
    }
  };

  if (!user) {
    return (
      <div className="fixed inset-0 z-[100] bg-espresso-dark flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-[40px] max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="bg-warm-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-coffee-brown" size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-espresso-dark">Admin Access</h2>
            <p className="text-gray-500 text-sm mt-2">Sign in with your admin Google account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <p className="text-red-500 text-xs font-bold text-center">{error}</p>
            )}

            <button 
              type="submit"
              className="w-full bg-coffee-brown text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-espresso-dark transition-all shadow-lg hover:shadow-coffee-brown/20 active:scale-[0.98]"
            >
              Sign In with Google
            </button>
          </form>

          <button onClick={onClose} className="w-full mt-6 text-gray-400 hover:text-espresso-dark text-[10px] font-bold uppercase tracking-widest transition-colors">
            Back to Website
          </button>
        </motion.div>
      </div>
    );
  }


  return (
    <div className="fixed inset-0 z-[100] bg-warm-bg overflow-y-auto">
      <nav className="bg-white border-b border-beige-light px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-8">
          <h1 className="font-serif text-2xl font-bold text-espresso-dark">Dashboard</h1>
          <div className="hidden md:flex gap-4">
            <TabButton active={activeTab === 'menu'} onClick={() => setActiveTab('menu')} icon={<Coffee size={18} />} label="Menu" />
            <TabButton active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} icon={<Grid size={18} />} label="Gallery" />
            <TabButton active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={<SettingsIcon size={18} />} label="Settings" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-gray-400 hidden sm:block uppercase tracking-widest">Administrator</span>
          <button onClick={onClose} className="p-2 hover:bg-warm-bg rounded-lg text-gray-400 hover:text-espresso-dark transition-all">
            <X size={24} />
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {activeTab === 'menu' && (
          <MenuManager items={menuItems} settings={settings} cloudName={cloudName} uploadPreset={uploadPreset} />
        )}


        {activeTab === 'gallery' && (
          <GalleryManager settings={settings} cloudName={cloudName} uploadPreset={uploadPreset} />
        )}

        {activeTab === 'settings' && (
          <div className="space-y-12">

             <section className="bg-white p-8 rounded-[32px] shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Upload size={20} className="text-coffee-brown" /> 
                  Cloudinary Configuration
                </h3>
                <p className="text-sm text-gray-500 mb-6 font-light">
                  Required for image uploads. Get these from your Cloudinary Console.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Cloud Name</label>
                    <input 
                      value={cloudName} 
                      onChange={(e) => setCloudName(e.target.value)}
                      className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-coffee-brown/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Upload Preset (Unsigned)</label>
                    <input 
                      value={uploadPreset} 
                      onChange={(e) => setUploadPreset(e.target.value)}
                      className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-coffee-brown/20"
                    />
                  </div>
                </div>
                <button 
                  onClick={handleCloudinarySave}
                  className="flex items-center gap-2 bg-espresso-dark text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest"
                >
                  <Save size={16} /> Save Credentials
                </button>
             </section>


             <HeroManager settings={settings}  cloudName={cloudName} uploadPreset={uploadPreset} />
             <AboutManager settings={settings}  cloudName={cloudName} uploadPreset={uploadPreset} />

             <LogoManager settings={settings}  cloudName={cloudName} uploadPreset={uploadPreset} />

             <LoyaltyManager settings={settings}  cloudName={cloudName} uploadPreset={uploadPreset} />
          </div>
        )}
      </main>
    </div>
  );
}

function LoyaltyManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      
      await setDoc(doc(db, 'settings', 'global'), { ...settings, loyaltyImage: url }, { merge: true });
      setIsUploading(false);
    } catch (err: any) { console.error(err.message); }
  };

  return (
    <section className="bg-white p-8 rounded-[32px] shadow-sm">
      <h3 className="text-xl font-bold mb-8 font-serif">Loyalty Program Visuals</h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-48 h-48 bg-warm-bg rounded-[32px] overflow-hidden relative group border border-beige-light flex items-center justify-center p-4">
          <img 
            src={settings?.loyaltyImage || '/input_file_1.png'} 
            className="max-w-full max-h-full object-contain" 
            referrerPolicy="no-referrer"
          />
          <div 
            onClick={() => fileRef.current?.click()}
            className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white"
          >
            <Upload />
            <span className="text-[10px] font-bold uppercase mt-2">Change Image</span>
          </div>
          <input ref={fileRef} type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-espresso-dark mb-2">Stamps Section Image</h4>
          <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed">
            This image appears in the "Stamps. Points. Free Rewards." section of the menu. 
            It's usually the brand logo or a loyalty-specific icon.
          </p>
          <button 
            onClick={() => fileRef.current?.click()}
            className="bg-coffee-brown text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-espresso-dark transition-all"
          >
            Upload New Loyalty Image
          </button>
        </div>
      </div>
    </section>
  );
}

function LogoManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, logoUrl: url }, { merge: true });
      alert('Logo updated successfully!');
    } catch (err: any) { alert(err.message); }
  };

  return (
    <section className="bg-white p-8 rounded-[32px] shadow-sm">
      <h3 className="text-xl font-bold mb-8 font-serif">Branding & Logo</h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-48 h-48 bg-warm-bg rounded-[32px] overflow-hidden relative group border border-beige-light flex items-center justify-center p-4">
          <img 
            src={settings?.logoUrl || '/input_file_1.png'} 
            className="max-w-full max-h-full object-contain" 
            referrerPolicy="no-referrer"
          />
          <div 
            onClick={() => fileRef.current?.click()}
            className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white"
          >
            <Upload />
            <span className="text-[10px] font-bold uppercase mt-2">Change Logo</span>
          </div>
          <input ref={fileRef} type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-espresso-dark mb-2">Website Logo</h4>
          <p className="text-sm text-gray-500 font-light mb-4 leading-relaxed">
            Upload your café's logo. This will be displayed in the navigation bar and footer. 
            For best results, use a circular or square image with a transparent background if possible.
          </p>
          <button 
            onClick={() => fileRef.current?.click()}
            className="bg-coffee-brown text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-espresso-dark transition-all"
          >
            Upload New Logo
          </button>
        </div>
      </div>
    </section>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
        active ? 'bg-coffee-brown text-white shadow-md' : 'text-gray-400 hover:text-espresso-dark'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function MenuManager({ items: dbItems, cloudName, uploadPreset, settings }: any) {
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Merge hardcoded items with DB items with deduplication
  const items: any[] = [];
  const seenAdminIds = new Set<string>();
  const seenAdminNames = new Set<string>();

  const normAdmin = (str: string) =>
    (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

  [...dbItems, ...MENU_ITEMS].forEach(localItem => {
    if (!localItem) return;
    const id = localItem.id ? String(localItem.id).trim() : '';
    const nameNorm = normAdmin(localItem.name);
    if (id && seenAdminIds.has(id)) return;
    if (nameNorm && seenAdminNames.has(nameNorm)) return;
    if (id) seenAdminIds.add(id);
    if (nameNorm) seenAdminNames.add(nameNorm);
    items.push(localItem);
  });

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (!editingItem) return;
    
    try {
      // Use setDoc via addDocument to ensure it works even if it didn't exist in DB yet
      await addDocument('menuItems', editingItem.id === 'new' ? Date.now().toString() : editingItem.id, {
        name: editingItem.name,
        price: editingItem.price,
        category: editingItem.category,
        image: editingItem.image,
        order: editingItem.order ?? items.length
      });
      alert('Item saved successfully!');
      setEditingItem(null);
    } catch (err: any) {
      alert('Error saving: ' + err.message);
    }
  };

  const handleSeedMenu = async () => {
    
    try {
      for (const item of MENU_ITEMS) {
        const { id, ...itemData } = item;
        await addDocument('menuItems', id, { ...itemData, order: MENU_ITEMS.indexOf(item) });
      }
      console.log('Menu seeded!');
    } catch (err: any) { console.error(err); }
  };

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  let filteredItems = activeCategory === 'All' ? items : items.filter((item: any) => item.category === activeCategory);
  if (searchQuery) {
    filteredItems = filteredItems.filter((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  
  const handlePdfUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset, (p) => {
        const el = document.getElementById('pdfProgress');
        if (el) el.innerText = 'Uploading ' + p + '%';
      });
      if (!url) throw new Error('Failed to get a valid URL from Cloudinary');
      await setDoc(doc(db, 'settings', 'global'), { ...settings, menuPdfUrl: url }, { merge: true });
      alert('PDF uploaded successfully!');
    } catch (err: any) {
      alert('Upload failed: ' + (err.message || 'Unknown error'));
    } finally {
      setIsUploading(false);
      const el = document.getElementById('pdfProgress');
      if (el) el.innerText = 'Upload PDF';
    }
  };

  const handleRemovePdf = async () => {
    await setDoc(doc(db, 'settings', 'global'), { ...settings, menuPdfUrl: null }, { merge: true });
  };


  const handleClearAllImages = async () => {
    try {
      for (const item of items) {
        if (item.image) {
          const { id, ...data } = item;
        }
      }
      console.log('All menu images cleared successfully!');
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      setEditingItem({ ...editingItem, image: url });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsUploading(false);
      // Reset input value to allow the same file to be selected again
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-3xl font-bold text-espresso-dark">Menu Management</h2>
        <div className="flex gap-4">
          <button 
            onClick={handleClearAllImages}
            className="border border-red-500 text-red-500 px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all"
          >
            Clear Images
          </button>
          {items.length === 0 && (
            <button 
              onClick={handleSeedMenu}
              className="border border-coffee-brown text-coffee-brown px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:bg-coffee-brown hover:text-white transition-all"
            >
              Seed Default Menu
            </button>
          )}
          <button 
            className="bg-coffee-brown text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
          >
            <Plus size={16} /> Add Item
          </button>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-[24px] shadow-sm mb-8 border border-beige-light">
        <h3 className="font-bold text-espresso-dark mb-2">Downloadable Menu PDF</h3>
        <p className="text-sm text-gray-500 mb-4">Upload a PDF version of your menu for clients to download directly from the website.</p>
        <div className="flex items-center gap-4">
          <label className="bg-warm-bg border border-beige-light px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs cursor-pointer hover:bg-beige-light transition-all text-coffee-brown">
            <Upload size={16} /> <span id="pdfProgress">{isUploading ? "Uploading..." : "Upload PDF"}</span>
            <input type="file" className="hidden" accept="application/pdf" onChange={handlePdfUpload} disabled={isUploading} />
          </label>
          {settings?.menuPdfUrl && (
            <div className="flex items-center gap-4">
              <a href={settings.menuPdfUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-coffee-brown underline">View Current PDF</a>
              <button onClick={handleRemovePdf} className="text-red-500 hover:text-red-700" title="Remove PDF"><Trash2 size={16} /></button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search menu items..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 px-4 py-3 rounded-xl border border-beige-light focus:outline-none focus:border-coffee-brown mb-4"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat
                 ? 'bg-coffee-brown text-white shadow-lg'
                 : 'bg-white text-gray-400 hover:text-coffee-brown border border-beige-light'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: any, idx: number) => (
          <div key={item.id ? `${item.id}-${idx}` : idx} className="bg-white p-6 rounded-[32px] shadow-sm relative group">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-warm-bg font-light text-espresso-dark flex items-center justify-center">
              {item.image ? (
                <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <Coffee size={48} className="text-coffee-brown/40" />
              )}
            </div>
            <h4 className="font-bold mb-1">{item.name}</h4>
            <div className="flex justify-between items-center">
               <span className="text-xs text-coffee-brown font-bold px-2 py-1 bg-coffee-brown/10 rounded-md uppercase tracking-widest">{item.category}</span>
               <span className="font-bold">{item.price}</span>
            </div>
            <div className="absolute top-4 right-4 flex gap-2 md:opacity-0 md:group-hover:opacity-100 transition-all opacity-100">
               <button onClick={() => setEditingItem(item)} className="p-2 bg-white rounded-full shadow-lg text-blue-500 hover:scale-110 active:scale-95 transition-all"><Edit2 size={16} /></button>
               <button 
                 onClick={async () => {
                   if (true) {
                     await removeDocument('menuItems', item.id);
                   }
                 }} 
                 className="p-2 bg-white rounded-full shadow-lg text-red-500 hover:scale-110 active:scale-95 transition-all"
               >
                 <Trash2 size={16} />
               </button>
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="fixed inset-0 z-[110] bg-espresso-dark/80 flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white w-full max-w-xl p-8 rounded-[40px] max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6 font-serif">
              {editingItem.id === 'new' ? 'New Menu Item' : `Edit ${editingItem.name}`}
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-400">Item Image</label>
                <div 
                  onClick={() => !isUploading && fileRef.current?.click()}
                >
                  {isUploading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coffee-brown mb-2" />
                      <span className="text-[10px] font-bold uppercase text-gray-400">Uploading...</span>
                    </div>
                  ) : editingItem.image ? (
                    <>
                      <img src={editingItem.image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                         <Upload className="text-white" />
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-gray-400">
                      <ImageIcon className="mx-auto mb-2" />
                      <span className="text-xs font-bold uppercase">Click to upload</span>
                    </div>
                  )}
                </div>
                <input ref={fileRef} type="file" className="hidden" onChange={handleImageUpload} />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-400">Name</label>
                <input 
                  value={editingItem.name} 
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none" 
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400">Category</label>
                  <select 
                    value={editingItem.category} 
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                    className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none appearance-none font-bold text-xs uppercase tracking-widest"
                  >
                    <option>Coffee</option>
                    <option>Breakfast</option>
                    <option>Brunch</option>
                    <option>Pizza</option>
                    <option>Crêpes Salées</option>
                    <option>Crêpes Sucrées</option>
                    <option>Gaufres</option>
                    <option>Pancakes</option>
                    <option>Juices</option>
                    <option>Loyalty</option>
                    <option>Les boissons</option>
                    <option>Thé & infusions</option>
                    <option>Special hot drinks</option>
                    <option>Iced latté</option>
                    <option>Ice Tea</option>
                    <option>Jus</option>
                    <option>Frappuccinos coffee</option>
                    <option>Milkshakes</option>
                    <option>Smoothies</option>
                    <option>Mojitos</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400">Price</label>
                  <input 
                    value={editingItem.price} 
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    placeholder="e.g. 25 MAD" 
                    className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-400">Description</label>
                <textarea 
                  value={editingItem.description} 
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  rows={3} 
                  className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none text-sm" 
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="flex-1 bg-coffee-brown text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Save Item</button>
                <button type="button" onClick={() => setEditingItem(null)} className="flex-1 border border-beige-light py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-gray-400">Cancel</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}


function AboutManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, atmosphereImage: url }, { merge: true });
      setIsUploading(false);
    } catch (err: any) { setIsUploading(false); alert(err.message); }
  };
  return (
    <section className="bg-white p-8 rounded-[32px] shadow-sm">
      <h3 className="text-xl font-bold mb-8 font-serif">About Section Image</h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-48 h-64 bg-warm-bg rounded-[32px] overflow-hidden relative group border border-beige-light flex items-center justify-center p-4">
          <img 
             src={settings?.atmosphereImage || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'} 
             className="w-full h-full object-cover rounded-[16px]" 
             referrerPolicy="no-referrer"
          />
          {isUploading && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white z-20"> 
                 <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-2" />
              </div>
          )}
          <div 
             onClick={() => !isUploading && fileRef.current?.click()}
             className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white z-10"
          >
            <Upload size={24} />
            <span className="text-[10px] font-bold uppercase mt-2">Change Image</span>
          </div>
          <input ref={fileRef} type="file" className="hidden" accept="image/*" onChange={handleUpload} />
        </div>
        <div className="flex-1 space-y-4">
           <p className="text-sm text-gray-500">Upload the vertical image shown in the About section.</p>
        </div>
      </div>
    </section>
  );
}

function HeroManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      
      const isVideo = file.type.startsWith('video/');
      if (isVideo) {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroVideo: url, heroImage: null }, { merge: true });
      } else {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url, heroVideo: null }, { merge: true });
      }
      setIsUploading(false);
    } catch (err: any) { setIsUploading(false); alert(err.message); }
  };

  const handleUpdateText = async (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.mobileVideoPositionX) (data as any).mobileVideoPositionX = Number(data.mobileVideoPositionX);
    await setDoc(doc(db, 'settings', 'global'), { ...settings, ...data }, { merge: true });
    alert('Settings updated');
  };

  return (
    <section className="bg-white p-8 rounded-[32px] shadow-sm">
      <h3 className="text-xl font-bold mb-8 font-serif">Hero & Style Settings</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase text-gray-400">Hero Main Media (Image or Video)</label>
          <div className="aspect-video bg-warm-bg rounded-[32px] overflow-hidden relative group">
            {settings?.heroVideo ? (
              <video src={settings.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920'} className="w-full h-full object-cover" />
            )}
            {isUploading && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white z-20">
                 <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-2" />
                 <span className="text-xs font-bold uppercase">Uploading...</span>
              </div>
            )}
            <div 
              onClick={() => !isUploading && fileRef.current?.click()}
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white z-10"
            >
              <Upload />
              <span className="text-xs font-bold uppercase mt-2">Change Media</span>
            </div>
            <input ref={fileRef} type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} />
          </div>
        </div>

        <form onSubmit={handleUpdateText} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Hero Title</label>
            <input name="heroTitle" defaultValue={settings?.heroTitle} className="w-full border border-beige-light rounded-xl px-4 py-3" />
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Hero Subtitle</label>
            <textarea name="heroSubtitle" defaultValue={settings?.heroSubtitle} className="w-full border border-beige-light rounded-xl px-4 py-3 h-24" />
          </div>
          
          <div className="pt-6 border-t border-beige-light">
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Mobile Video Display Mode</label>
            <select name="mobileVideoFit" defaultValue={settings?.mobileVideoFit || 'cover'} className="w-full border border-beige-light rounded-xl px-4 py-3 bg-white">
              <option value="cover">Fill Screen (Cropped, no borders)</option>
              <option value="contain">Show Entire Video (Adds black bars)</option>
            </select>
          </div>

          <div className="pt-6 border-t border-beige-light">
            <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Mobile Video Alignment (Left/Right)</label>
            <p className="text-[10px] text-gray-500 mb-3">Adjust how the video is positioned on mobile devices. (0 = Left, 50 = Center, 100 = Right)</p>
            <div className="flex items-center gap-4">
              <input 
                type="range" 
                min="0" 
                max="100" 
                name="mobileVideoPositionX" 
                defaultValue={settings?.mobileVideoPositionX ?? 15}
                className="w-full accent-coffee-brown"
                onChange={(e) => {
                  document.getElementById('posVal')!.innerText = e.target.value + '%';
                }}
                onMouseUp={async (e: any) => {
                  await setDoc(doc(db, 'settings', 'global'), { ...settings, mobileVideoPositionX: Number(e.target.value) }, { merge: true });
                }}
                onTouchEnd={async (e: any) => {
                  await setDoc(doc(db, 'settings', 'global'), { ...settings, mobileVideoPositionX: Number(e.target.value) }, { merge: true });
                }}
              />
              <span id="posVal" className="text-xs font-bold text-coffee-brown w-10">{settings?.mobileVideoPositionX ?? 15}%</span>
            </div>
          </div>

          <button type="submit" className="w-full bg-coffee-brown text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Save Text</button>
        </form>
      </div>
    </section>
  );
}

function GalleryManager({ settings, cloudName, uploadPreset }: any) {
  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      const next = [...(settings?.galleryImages || []), url];
      await setDoc(doc(db, 'settings', 'global'), { ...settings, galleryImages: next }, { merge: true });
    } catch (err: any) { alert(err.message); }
  };

  const removePhoto = async (url: string) => {
    const next = settings.galleryImages.filter((u: string) => u !== url);
    await setDoc(doc(db, 'settings', 'global'), { ...settings, galleryImages: next }, { merge: true });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-3xl font-bold text-espresso-dark">Gallery Management</h2>
        <label className="bg-coffee-brown text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs cursor-pointer">
          <Plus size={16} /> Add Photo
          <input type="file" className="hidden" onChange={handleUpload} />
        </label>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {settings?.galleryImages?.map((url: string, i: number) => (
          <div key={i} className="aspect-square bg-white rounded-2xl overflow-hidden relative group">
            <img src={url} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"> 
              <button onClick={() => removePhoto(url)} className="p-3 bg-white rounded-full text-red-500 shadow-xl hover:scale-110"><Trash2 size={20} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
