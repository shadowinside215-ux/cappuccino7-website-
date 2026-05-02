import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, Plus, Trash2, Edit2, Upload, Save, X, Image as ImageIcon, Coffee, Grid, Settings as SettingsIcon } from 'lucide-react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, loginWithGoogle, logout, db } from '../../lib/firebase';
import { useCollection, useDocument, addDocument, updateDocument, removeDocument } from '../../lib/hooks';
import { uploadImage } from '../../lib/cloudinary';
import { MenuItem } from '../../types';

export default function AdminDashboard({ onClose }: { onClose: () => void }) {
  const [user, setUser] = useState(auth.currentUser);
  const [activeTab, setActiveTab] = useState<'menu' | 'gallery' | 'settings'>('menu');
  const [isUploading, setIsUploading] = useState(false);
  
  // Cloudinary config stored in local storage for simplicity (or we could fetch from settings)
  const [cloudName, setCloudName] = useState(localStorage.getItem('cl_name') || '');
  const [uploadPreset, setUploadPreset] = useState(localStorage.getItem('cl_preset') || '');

  const { data: menuItems } = useCollection<MenuItem>('menuItems', 'order');
  const { data: settings } = useDocument<any>('settings', 'global');

  if (!user) {
    return (
      <div className="fixed inset-0 z-[100] bg-espresso-dark flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[40px] max-w-md w-full text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-espresso-dark">Admin Access</h2>
          <p className="text-gray-500 mb-8">Please sign in with your authorized Google account to manage Cappuccino 7.</p>
          <button 
            onClick={async () => {
              const u = await loginWithGoogle();
              if (u?.email === 'dragonballsam86@gmail.com') {
                setUser(u);
              } else {
                alert('Unauthorized account.');
                await logout();
              }
            }}
            className="w-full bg-coffee-brown text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-espresso-dark transition-all"
          >
            Sign in with Google
          </button>
          <button onClick={onClose} className="mt-4 text-gray-400 hover:text-espresso-dark text-sm underline uppercase tracking-widest">
            Back to Website
          </button>
        </div>
      </div>
    );
  }

  const handleCloudinarySave = () => {
    localStorage.setItem('cl_name', cloudName);
    localStorage.setItem('cl_preset', uploadPreset);
    alert('Cloudinary settings saved locally.');
  };

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
          <span className="text-xs font-bold text-gray-400 hidden sm:block uppercase tracking-widest">{user.email}</span>
          <button onClick={onClose} className="p-2 hover:bg-warm-bg rounded-lg text-gray-400 hover:text-espresso-dark transition-all">
            <X size={24} />
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {activeTab === 'menu' && (
          <MenuManager 
            items={menuItems} 
            cloudName={cloudName} 
            uploadPreset={uploadPreset} 
          />
        )}
        
        {activeTab === 'gallery' && (
          <GalleryManager 
            settings={settings} 
            cloudName={cloudName} 
            uploadPreset={uploadPreset} 
          />
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

             <HeroManager settings={settings} cloudName={cloudName} uploadPreset={uploadPreset} />
          </div>
        )}
      </main>
    </div>
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

function MenuManager({ items, cloudName, uploadPreset }: any) {
  const [editingItem, setEditingItem] = useState<any>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSave = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    if (editingItem.id === 'new') {
      await addDocument('menuItems', Date.now().toString(), { ...data, order: items.length });
    } else {
      await updateDocument('menuItems', editingItem.id, data);
    }
    setEditingItem(null);
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    
    try {
      const url = await uploadImage(file, cloudName, uploadPreset);
      setEditingItem({ ...editingItem, image: url });
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-3xl font-bold text-espresso-dark">Menu Management</h2>
        <button 
          onClick={() => setEditingItem({ id: 'new', name: '', price: '', category: 'Coffee', description: '', image: '' })}
          className="bg-coffee-brown text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
        >
          <Plus size={16} /> Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any) => (
          <div key={item.id} className="bg-white p-6 rounded-[32px] shadow-sm relative group">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-warm-bg font-light text-espresso-dark">
              <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h4 className="font-bold mb-1">{item.name}</h4>
            <div className="flex justify-between items-center">
               <span className="text-xs text-coffee-brown font-bold px-2 py-1 bg-coffee-brown/10 rounded-md uppercase tracking-widest">{item.category}</span>
               <span className="font-bold">{item.price}</span>
            </div>
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
               <button onClick={() => setEditingItem(item)} className="p-2 bg-white rounded-full shadow-lg text-blue-500 hover:scale-110"><Edit2 size={16} /></button>
               <button onClick={() => removeDocument('menuItems', item.id)} className="p-2 bg-white rounded-full shadow-lg text-red-500 hover:scale-110"><Trash2 size={16} /></button>
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
                  onClick={() => fileRef.current?.click()}
                  className="aspect-video bg-warm-bg rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center border-2 border-dashed border-beige-light group relative"
                >
                  {editingItem.image ? (
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
                <input name="image" type="hidden" value={editingItem.image} required />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-400">Name</label>
                <input name="name" defaultValue={editingItem.name} className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400">Category</label>
                  <select name="category" defaultValue={editingItem.category} className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none appearance-none">
                    <option>Coffee</option>
                    <option>Breakfast</option>
                    <option>Crepes & Snacks</option>
                    <option>Juices</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-400">Price</label>
                  <input name="price" defaultValue={editingItem.price} placeholder="e.g. 25 MAD" className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none" required />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-400">Description</label>
                <textarea name="description" defaultValue={editingItem.description} rows={3} className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none text-sm" />
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

function HeroManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    try {
      const url = await uploadImage(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url }, { merge: true });
    } catch (err: any) { alert(err.message); }
  };

  const handleUpdateText = async (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await setDoc(doc(db, 'settings', 'global'), { ...settings, ...data }, { merge: true });
    alert('Settings updated');
  };

  return (
    <section className="bg-white p-8 rounded-[32px] shadow-sm">
      <h3 className="text-xl font-bold mb-8 font-serif">Hero & Style Settings</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase text-gray-400">Hero Main Image</label>
          <div className="aspect-video bg-warm-bg rounded-[32px] overflow-hidden relative group">
            <img src={settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920'} className="w-full h-full object-cover" />
            <div 
              onClick={() => fileRef.current?.click()}
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white"
            >
              <Upload />
              <span className="text-xs font-bold uppercase mt-2">Change Image</span>
            </div>
            <input ref={fileRef} type="file" className="hidden" onChange={handleUpload} />
          </div>
        </div>

        <form onSubmit={handleUpdateText} className="space-y-6">
          <div>
            <label className="text-xs font-bold uppercase text-gray-400 block mb-1">Hero Title</label>
            <textarea name="heroTitle" defaultValue={settings?.heroTitle || 'The Best Coffee Experience in Salé'} className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none font-serif text-xl h-24" />
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-gray-400 block mb-1">Hero Subtitle</label>
            <textarea name="heroSubtitle" defaultValue={settings?.heroSubtitle || 'Welcome to Cappuccino 7, where every cup tells a story of quality, comfort, and authentic Moroccan atmosphere.'} className="w-full bg-warm-bg px-4 py-3 rounded-xl outline-none text-sm h-32" />
          </div>
          <button type="submit" className="w-full bg-espresso-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs">Update Text Content</button>
        </form>
      </div>
    </section>
  );
}

function GalleryManager({ settings, cloudName, uploadPreset }: any) {
  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    try {
      const url = await uploadImage(file, cloudName, uploadPreset);
      const currentImages = settings?.galleryImages || [];
      await setDoc(doc(db, 'settings', 'global'), { ...settings, galleryImages: [...currentImages, url] }, { merge: true });
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
