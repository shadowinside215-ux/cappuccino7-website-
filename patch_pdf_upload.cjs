const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

const funcs = `
  const handlePdfUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      await setDoc(doc(db, 'settings', 'global'), { ...settings, menuPdfUrl: url }, { merge: true });
      setIsUploading(false);
      alert('PDF uploaded successfully!');
    } catch (err: any) {
      setIsUploading(false);
      alert(err.message);
    }
  };

  const handleRemovePdf = async () => {
    await setDoc(doc(db, 'settings', 'global'), { ...settings, menuPdfUrl: null }, { merge: true });
  };
`;

text = text.replace(
  "const handleClearAllImages = async () => {",
  funcs + "\n\n  const handleClearAllImages = async () => {"
);

const ui = `
      <div className="bg-white p-6 rounded-[24px] shadow-sm mb-8 border border-beige-light">
        <h3 className="font-bold text-espresso-dark mb-2">Downloadable Menu PDF</h3>
        <p className="text-sm text-gray-500 mb-4">Upload a PDF version of your menu for clients to download directly from the website.</p>
        <div className="flex items-center gap-4">
          <label className="bg-warm-bg border border-beige-light px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-widest text-xs cursor-pointer hover:bg-beige-light transition-all text-coffee-brown">
            <Upload size={16} /> {isUploading ? 'Uploading...' : 'Upload PDF'}
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
`;

text = text.replace(
  '<div className="mb-6">',
  ui + '\n      <div className="mb-6">'
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
