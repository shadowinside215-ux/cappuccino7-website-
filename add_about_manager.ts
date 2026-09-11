import { readFileSync, writeFileSync } from 'fs';

let path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

// 1. Add AboutManager component
const aboutManagerCode = `
function AboutManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, atmosphereImage: url }, { merge: true });
      setIsUploading(false);
      if (e.target) e.target.value = '';
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

function HeroManager`;

content = content.replace(/function HeroManager/g, aboutManagerCode);

// 2. Add <AboutManager /> inside the settings tab
content = content.replace(
  /<HeroManager settings=\{settings\} cloudName=\{cloudName\} uploadPreset=\{uploadPreset\} \/>/g,
  `<HeroManager settings={settings} cloudName={cloudName} uploadPreset={uploadPreset} />\n             <AboutManager settings={settings} cloudName={cloudName} uploadPreset={uploadPreset} />`
);

writeFileSync(path, content);
