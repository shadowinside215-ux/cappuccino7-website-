import { readFileSync, writeFileSync } from 'fs';

let path = 'src/lib/cloudinary.ts';
let content = readFileSync(path, 'utf8');

const replacement = `export async function uploadMedia(file: File, cloudName: string, uploadPreset: string): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  const response = await fetch(
    \`https://api.cloudinary.com/v1_1/\${cloudName}/auto/upload\`,
    {
      method: 'POST',
      body: formData,
    }
  );
  if (!response.ok) {
    let errorMsg = 'Upload failed';
    try {
      const error = await response.json();
      errorMsg = error.error?.message || errorMsg;
    } catch (e) {
      errorMsg = \`Upload failed with status: \${response.status}\`;
    }
    throw new Error(errorMsg);
  }
  const data = await response.json();
  const url = data.secure_url;
  // Optimize video and images
  if (url && url.includes('/upload/')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  return url;
}`;

content = content.replace(/export async function uploadMedia[\s\S]*?return data\.secure_url;\n\}/, replacement);

writeFileSync(path, content);
