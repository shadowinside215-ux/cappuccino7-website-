const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf-8');

// We want to add e.target.value = '' inside all the finally or at the end of try/catch.
// It's easier to just do it right after getting the file.
text = text.replace(
  /const file = e\.target\.files\?\.\[0\];/g,
  "const file = e.target.files?.[0];\n    e.target.value = '';"
);

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text);
