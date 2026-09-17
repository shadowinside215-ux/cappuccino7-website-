const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

// Add uploadProgress state to MenuManager
text = text.replace(
  "const [isUploading, setIsUploading] = useState(false);",
  "const [isUploading, setIsUploading] = useState(false);\n  const [uploadProgress, setUploadProgress] = useState(0);"
);

// Update handlePdfUpload to pass progress
text = text.replace(
  "const url = await uploadMedia(file, cloudName, uploadPreset);",
  "const url = await uploadMedia(file, cloudName, uploadPreset, (p) => setUploadProgress(p));"
);

// Reset progress in finally
text = text.replace(
  "setIsUploading(false);",
  "setIsUploading(false);\n      setUploadProgress(0);"
);

// Update the UI label
text = text.replace(
  "{isUploading ? 'Uploading...' : 'Upload PDF'}",
  "{isUploading ? (uploadProgress > 0 ? `Uploading ${uploadProgress}%` : 'Uploading...') : 'Upload PDF'}"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
