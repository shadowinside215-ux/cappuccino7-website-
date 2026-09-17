const fs = require('fs');

let fb = fs.readFileSync('src/lib/firebase.ts', 'utf-8');
fb = "import { getStorage } from 'firebase/storage';\n" + fb;
fb = fb.replace("export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);", 
  "export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);\nexport const storage = getStorage(app);");

fs.writeFileSync('src/lib/firebase.ts', fb);
console.log('patched firebase.ts');
