import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Admin/AdminDashboard.tsx';
let content = readFileSync(path, 'utf8');

const regex = /function HeroManager\(\{ settings, cloudName, uploadPreset \}: any\) \{[\s\S]*?const handleUpload = async \(e: any\) => \{[\s\S]*?try \{/;
const replacement = `function HeroManager({ settings, cloudName, uploadPreset }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return alert('Check Cloudinary Config');
    setIsUploading(true);
    try {`;

content = content.replace(regex, replacement);

const regexCatch = /\} catch \(err: any\) \{ alert\(err\.message\); \}\n  \};/;
const replacementCatch = `} catch (err: any) { alert(err.message); } finally { setIsUploading(false); }\n  };`;
content = content.replace(regexCatch, replacementCatch);

const regexPreview = /<div \n              onClick=\{\(\) => fileRef\.current\?\.click\(\)\}\n              className="absolute inset-0 bg-black\/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white"\n            >/;
const replacementPreview = `{isUploading && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white z-20">
                 <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-2" />
                 <span className="text-xs font-bold uppercase">Uploading...</span>
              </div>
            )}
            <div 
              onClick={() => !isUploading && fileRef.current?.click()}
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all text-white z-10"
            >`;

content = content.replace(regexPreview, replacementPreview);

writeFileSync(path, content);
