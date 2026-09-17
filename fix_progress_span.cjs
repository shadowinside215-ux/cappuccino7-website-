const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

text = text.replace(
  /<span id="pdfProgress"><span id="pdfProgress">\{isUploading \? 'Uploading\.\.\.' : 'Upload PDF'\}<\/span><\/span>/g,
  '<span id="pdfProgress">{isUploading ? "Uploading..." : "Upload PDF"}</span>'
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
