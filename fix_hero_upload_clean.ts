import { readFileSync, writeFileSync } from 'fs';

const path = 'src/components/Hero.tsx';
let content = readFileSync(path, 'utf8');

// Fix FormData appending
content = content.replace(
  /      if \(type === 'video'\) \{\n        formData\.append\('resource_type', 'video'\);\n      \}/,
  ""
);

// Fix error extraction
content = content.replace(
  /      if \(!response\.ok\) throw new Error\('Upload failed'\);/,
  `      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error?.message || 'Upload failed');
      }`
);

writeFileSync(path, content);
