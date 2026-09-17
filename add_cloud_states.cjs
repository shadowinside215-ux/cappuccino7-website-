const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  "  const [searchQuery, setSearchQuery] = useState('');",
  "  const [searchQuery, setSearchQuery] = useState('');\n  const [cloudName, setCloudName] = useState(localStorage.getItem('cl_name') || process.env.VITE_CLOUDINARY_CLOUD_NAME || '');\n  const [uploadPreset, setUploadPreset] = useState(localStorage.getItem('cl_preset') || process.env.VITE_CLOUDINARY_UPLOAD_PRESET || '');"
);

text = text.replace(
  "  const { data: menuItems } = useCollection<MenuItem>('menuItems', 'order');",
  "  const handleCloudinarySave = () => {\n    localStorage.setItem('cl_name', cloudName);\n    localStorage.setItem('cl_preset', uploadPreset);\n    alert('Cloudinary settings saved locally.');\n  };\n\n  const { data: menuItems } = useCollection<MenuItem>('menuItems', 'order');"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
