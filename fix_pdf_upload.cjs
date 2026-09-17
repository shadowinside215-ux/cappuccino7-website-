const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  `  const handlePdfUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
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
  };`,
  `  const handlePdfUpload = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      if (!url) throw new Error('Failed to get a valid URL from Cloudinary');
      await setDoc(doc(db, 'settings', 'global'), { ...settings, menuPdfUrl: url }, { merge: true });
      alert('PDF uploaded successfully!');
    } catch (err: any) {
      alert('Upload failed: ' + (err.message || 'Unknown error'));
    } finally {
      setIsUploading(false);
    }
  };`
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
