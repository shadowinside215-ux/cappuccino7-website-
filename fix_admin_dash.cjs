const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  "const url = await uploadMedia(file, cloudName, uploadPreset, (p) => setUploadProgress(p));",
  "const url = await uploadMedia(file, cloudName, uploadPreset);"
);

text = text.replace(
  "setIsUploading(false);\n      setUploadProgress(0);",
  "setIsUploading(false);"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
