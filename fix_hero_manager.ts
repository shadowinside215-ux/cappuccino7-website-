import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

// We need to replace handleUpload in HeroManager
const match = /const handleUpload = async \(e: any\) => \{[\s\S]*?\} catch \(err: any\) \{ alert\(err\.message\); \}\n  \};/;
const replacement = `const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return console.error('Check Cloudinary Config');
    try {
      const url = await uploadMedia(file, cloudName, uploadPreset);
      const isVideo = file.type.startsWith('video/');
      if (isVideo) {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroVideo: url, heroImage: '' }, { merge: true });
      } else {
        await setDoc(doc(db, 'settings', 'global'), { ...settings, heroImage: url, heroVideo: '' }, { merge: true });
      }
    } catch (err: any) { console.error(err.message); }
  };`;

content = content.replace(match, replacement);

// We should also change the input accept to allow video
content = content.replace(
  /<input ref=\{fileRef\} type="file" className="hidden" onChange=\{handleUpload\} \/>/,
  `<input ref={fileRef} type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} />`
);

// We should also change the preview to show a video if heroVideo exists
const previewMatch = /<img src=\{settings\?\.heroImage \|\| 'https:\/\/images\.unsplash\.com\/photo-1554118811-1e0d58224f24\?auto=format\&fit=crop\&q=80\&w=1920'\} className="w-full h-full object-cover" \/>/;
const previewReplacement = `{settings?.heroVideo ? (
              <video src={settings.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={settings?.heroImage || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920'} className="w-full h-full object-cover" />
            )}`;

content = content.replace(previewMatch, previewReplacement);
content = content.replace(/<span className="text-xs font-bold uppercase mt-2">Change Image<\/span>/, '<span className="text-xs font-bold uppercase mt-2">Change Media</span>');

writeFileSync(path, content);
