const fs = require('fs');

const code = `
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export async function uploadMedia(file: File): Promise<string> {
  // Generate a unique filename using timestamp and original name
  const filename = \`\${Date.now()}-\${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}\`;
  const storageRef = ref(storage, \`uploads/\${filename}\`);
  
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error: any) {
    throw new Error('Upload failed: ' + error.message);
  }
}
`;
fs.writeFileSync('src/lib/cloudinary.ts', code);
console.log('patched cloudinary.ts');
