const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

// The patch script messed up on "setIsUploading(false)" because there are multiple. 
// I will just use regex to accurately target handlePdfUpload

text = text.replace(
  /const handlePdfUpload = async \(e: any\) => \{[\s\S]*?setIsUploading\(false\);\n    \}\n  \};/g,
  `const handlePdfUpload = async (e: any) => {
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
  };`
);

// We need to fix the UI label for PDF
text = text.replace(
  "{isUploading ? (uploadProgress > 0 ? `Uploading ${uploadProgress}%` : 'Uploading...') : 'Upload PDF'}",
  "<span id=\"pdfProgress\">{isUploading ? 'Uploading...' : 'Upload PDF'}</span>"
);
text = text.replace(
  "{isUploading ? 'Uploading...' : 'Upload PDF'}",
  "<span id=\"pdfProgress\">{isUploading ? 'Uploading...' : 'Upload PDF'}</span>"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
