import { readFileSync, writeFileSync } from 'fs';

// 1. App.tsx
let appPath = 'src/App.tsx';
let appContent = readFileSync(appPath, 'utf8');
appContent = appContent.replace(/import AdminDashboard from '\.\/components\/Admin\/AdminDashboard';/, '');
appContent = appContent.replace(/const \[isAdminOpen, setIsAdminOpen\] = useState\(false\);/, '');
appContent = appContent.replace(/\(window as any\)\.toggleAdmin = \(\) => setIsAdminOpen\(true\);/, '');
appContent = appContent.replace(/if \(window\.location\.search\.includes\('admin=true'\)\) \{\s*setIsAdminOpen\(true\);\s*\}/, '');
appContent = appContent.replace(/\{isAdminOpen && <AdminDashboard onClose=\{\(\) => setIsAdminOpen\(false\)\} \/>\}/, '');
writeFileSync(appPath, appContent);

// 2. Footer.tsx
let footerPath = 'src/components/Footer.tsx';
let footerContent = readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(/<button onClick=\{\(\) => \(window as any\)\.toggleAdmin\(\)\} className="hover:text-espresso-dark transition-colors">Admin Login<\/button>/, '');
writeFileSync(footerPath, footerContent);

// 3. Hero.tsx
let heroPath = 'src/components/Hero.tsx';
let heroContent = readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(/import \{ Camera, Video \} from 'lucide-react';/, '');
heroContent = heroContent.replace(/import \{ auth, db \} from '\.\.\/lib\/firebase';/, "import { db } from '../lib/firebase';");
heroContent = heroContent.replace(/import \{ doc, setDoc \} from 'firebase\/firestore';/, "");
heroContent = heroContent.replace(/import \{ uploadMedia \} from '\.\.\/lib\/cloudinary';/, "");
heroContent = heroContent.replace(/const \[isAdmin, setIsAdmin\] = useState\(false\);/, '');
heroContent = heroContent.replace(/const \[isUploading, setIsUploading\] = useState\(false\);/, 'const isUploading = false;');
heroContent = heroContent.replace(/const fileRef = useRef<HTMLInputElement>\(null\);/, '');
heroContent = heroContent.replace(/const videoRef = useRef<HTMLInputElement>\(null\);/, '');
heroContent = heroContent.replace(/useEffect\(\(\) => \{\s*const unsubscribe = auth\.onAuthStateChanged\(\(user\) => \{\s*setIsAdmin\(!!user\);\s*\}\);\s*return \(\) => unsubscribe\(\);\s*\}, \[\]\);/, '');
// Remove handleMediaUpload function
heroContent = heroContent.replace(/const handleMediaUpload = async [\s\S]*?\} catch \(err: any\) \{[\s\S]*?\}\s*\};/, '');
// Remove Admin Upload UI
heroContent = heroContent.replace(/\{isAdmin && !isUploading && \([\s\S]*?\}\)\}/, '');
heroContent = heroContent.replace(/<input\s*ref=\{fileRef\}[\s\S]*?\/>/, '');
heroContent = heroContent.replace(/<input\s*ref=\{videoRef\}[\s\S]*?\/>/, '');
// Fix text
heroContent = heroContent.replace(/\{lang === 'ar' \? 'موقعنا' : lang === 'fr' \? 'Nous trouver' : 'Visit Us'\}/, "{t('hero.visit')}");
heroContent = heroContent.replace(
  /\{title === "The best experience in sale el jadida" \? "The Best Coffee Experience in Salé El Jadida" : title\}/,
  "{t('hero.title')}"
);
writeFileSync(heroPath, heroContent);

// 4. About.tsx
let aboutPath = 'src/components/About.tsx';
let aboutContent = readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(/import \{ auth, db \} from '\.\.\/lib\/firebase';/, "import { db } from '../lib/firebase';");
aboutContent = aboutContent.replace(/import \{ doc, setDoc \} from 'firebase\/firestore';/, "");
aboutContent = aboutContent.replace(/import \{ Camera \} from 'lucide-react';/, "");
aboutContent = aboutContent.replace(/import \{ uploadMedia \} from '\.\.\/lib\/cloudinary';/, "");
aboutContent = aboutContent.replace(/const \[isAdmin, setIsAdmin\] = useState\(false\);/, '');
aboutContent = aboutContent.replace(/const \[isUploading, setIsUploading\] = useState\(false\);/, 'const isUploading = false;');
aboutContent = aboutContent.replace(/const fileRef = useRef<HTMLInputElement>\(null\);/, '');
aboutContent = aboutContent.replace(/useEffect\(\(\) => \{\s*const unsubscribe = auth\.onAuthStateChanged\(\(user\) => \{\s*setIsAdmin\(!!user\);\s*\}\);\s*return \(\) => unsubscribe\(\);\s*\}, \[\]\);/, '');
aboutContent = aboutContent.replace(/const handleImageUpload = async [\s\S]*?\} catch \(err: any\) \{[\s\S]*?\}\s*\};/, '');
aboutContent = aboutContent.replace(/\{isAdmin && !isUploading && \([\s\S]*?\}\)\}/, '');
aboutContent = aboutContent.replace(/<input\s*ref=\{fileRef\}[\s\S]*?\/>/, '');
writeFileSync(aboutPath, aboutContent);

// 5. Gallery.tsx
let galleryPath = 'src/components/Gallery.tsx';
let galleryContent = readFileSync(galleryPath, 'utf8');
galleryContent = galleryContent.replace(/import \{ Camera \} from 'lucide-react';/, "");
galleryContent = galleryContent.replace(/import \{ auth, db \} from '\.\.\/lib\/firebase';/, "import { db } from '../lib/firebase';");
galleryContent = galleryContent.replace(/import \{ doc, setDoc \} from 'firebase\/firestore';/, "");
galleryContent = galleryContent.replace(/import \{ uploadMedia \} from '\.\.\/lib\/cloudinary';/, "");
galleryContent = galleryContent.replace(/const \[isAdmin, setIsAdmin\] = useState\(false\);/, '');
galleryContent = galleryContent.replace(/const \[isUploading, setIsUploading\] = useState\(false\);/, 'const isUploading = false;');
galleryContent = galleryContent.replace(/const fileRef = useRef<HTMLInputElement>\(null\);/, '');
galleryContent = galleryContent.replace(/useEffect\(\(\) => \{\s*const unsubscribe = auth\.onAuthStateChanged\(\(user\) => \{\s*setIsAdmin\(!!user\);\s*\}\);\s*return \(\) => unsubscribe\(\);\s*\}, \[\]\);/, '');
galleryContent = galleryContent.replace(/const handleImageUpload = async [\s\S]*?\} catch \(err: any\) \{[\s\S]*?\}\s*\};/, '');
galleryContent = galleryContent.replace(/\{isAdmin && \([\s\S]*?\}\)\}/, '');
galleryContent = galleryContent.replace(/<input\s*ref=\{fileRef\}[\s\S]*?\/>/, '');
writeFileSync(galleryPath, galleryContent);

// 6. Navbar.tsx - Fix link colors and translations
let navPath = 'src/components/Navbar.tsx';
let navContent = readFileSync(navPath, 'utf8');
navContent = navContent.replace(/text-espresso-dark hover:text-coffee-brown/g, "text-coffee-brown hover:text-espresso-dark");
navContent = navContent.replace(/\{lang === 'ar' \? 'اتصل بنا' : lang === 'fr' \? 'Appelez-nous' : 'Call Us'\}/, "{t('nav.callUs')}");
navContent = navContent.replace(/\{lang === 'ar' \? 'اتصل بنا الآن' : lang === 'fr' \? 'Appelez-nous' : 'Call Us Now'\}/, "{t('nav.callUsNow')}");
writeFileSync(navPath, navContent);

console.log('Script completed');
