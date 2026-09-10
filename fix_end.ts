import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

const regex = /function HeroManager\(\{ settings, cloudName, uploadPreset \}: any\) \{[\s\S]*$/m;

const replacement = `function HeroManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      const isVideo = file.type.startsWith('video/');
      if (isVideo) {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroVideo: url, heroImage: '' }, { merge: true });
      } else {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url, heroVideo: '' }, { merge: true });
      }
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
          <label className="text-xs font-bold uppercase text-gray-400">Hero Main Media (Image or Video)</label>
          <div className="aspect-video bg-warm-bg rounded-[32px] overflow-hidden relative group">
            {settings?.heroVideo ? (
              <video src={settings.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920'} className="w-full h-full object-cover" />
            )}
            <div 
              onClick={() => fileRef.current?.click()}
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white"
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
          <button type="submit" className="w-full bg-coffee-brown text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Save Text</button>
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
`;

content = content.replace(regex, replacement);

writeFileSync(path, content);
