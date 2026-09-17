const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

// Add props to managers
const managers = ['LoyaltyManager', 'LogoManager', 'MenuManager', 'AboutManager', 'HeroManager', 'GalleryManager'];
managers.forEach(m => {
  text = text.replace(new RegExp(`function ${m}\\(\\{ ([^}]+) \\}\\: any\\) \\{`, 'g'), `function ${m}({ $1, cloudName, uploadPreset }: any) {`);
  // also handle { items: dbItems,  }: any
  if (m === 'MenuManager') {
    text = text.replace(`function MenuManager({ items: dbItems,  }: any) {`, `function MenuManager({ items: dbItems, cloudName, uploadPreset }: any) {`);
  }
});

// Update uploadMedia calls
text = text.replace(/uploadMedia\(file\)/g, "uploadMedia(file, cloudName, uploadPreset)");

// Add cloudName, uploadPreset to JSX elements
managers.forEach(m => {
  text = text.replace(new RegExp(`<${m} (.*?) \\/>`, 'g'), `<${m} $1 cloudName={cloudName} uploadPreset={uploadPreset} />`);
  // handle gallery that spans lines maybe?
  text = text.replace(new RegExp(`<${m}\\s*\\n\\s*(.*?)\\s*\\/>`, 'g'), `<${m} $1 cloudName={cloudName} uploadPreset={uploadPreset} />`);
});

const cloudinaryUI = `
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
`;

text = text.replace(
  "{activeTab === 'settings' && (\n          <div className=\"space-y-12\">",
  "{activeTab === 'settings' && (\n          <div className=\"space-y-12\">\n" + cloudinaryUI
);

// We need to restore checks for cloudName and uploadPreset before uploadMedia
text = text.replace(
  /if \(\!file\) return console\.error\('No file selected'\);/g,
  "if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');"
);
text = text.replace(
  /if \(\!file\) return alert\('No file selected'\);/g,
  "if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
