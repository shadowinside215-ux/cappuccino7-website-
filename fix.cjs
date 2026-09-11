const fs = require('fs');
let code = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

// Revert LoyaltyManager
code = code.replace(
  "  const fileRef = useRef<HTMLInputElement>(null);\n  const [activeCategory, setActiveCategory] = useState<string>('All');\n  const [searchQuery, setSearchQuery] = useState('');\n\n  const handleUpload",
  "  const fileRef = useRef<HTMLInputElement>(null);\n  const [isUploading, setIsUploading] = useState(false);\n\n  const handleUpload"
);

// We should also remove the isUploading state in LoyaltyManager, actually let's just make sure LoyaltyManager doesn't have activeCategory
code = code.replace(
  "function LoyaltyManager({ settings, cloudName, uploadPreset }: any) {\n  const fileRef = useRef<HTMLInputElement>(null);\n  const [activeCategory, setActiveCategory] = useState<string>('All');\n  const [searchQuery, setSearchQuery] = useState('');",
  "function LoyaltyManager({ settings, cloudName, uploadPreset }: any) {\n  const fileRef = useRef<HTMLInputElement>(null);\n  const [isUploading, setIsUploading] = useState(false);"
);

// Apply to MenuManager
code = code.replace(
  "function MenuManager({ items: dbItems, cloudName, uploadPreset }: any) {\n  const [editingItem, setEditingItem] = useState<any>(null);\n  const [isUploading, setIsUploading] = useState(false);\n  const fileRef = useRef<HTMLInputElement>(null);",
  "function MenuManager({ items: dbItems, cloudName, uploadPreset }: any) {\n  const [editingItem, setEditingItem] = useState<any>(null);\n  const [isUploading, setIsUploading] = useState(false);\n  const fileRef = useRef<HTMLInputElement>(null);\n  const [activeCategory, setActiveCategory] = useState<string>('All');\n  const [searchQuery, setSearchQuery] = useState('');"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', code);
console.log('fixed');
