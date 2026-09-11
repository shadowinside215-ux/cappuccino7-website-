import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  const querySnapshot = await getDocs(collection(db, "menuItems"));
  const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log('Total items in DB:', items.length);
  const b8 = items.find(i => i.id === 'b8');
  console.log('Item b8:', b8);
  const healthy = items.find(i => i.name && i.name.toLowerCase().includes('healthy'));
  console.log('Item with healthy:', healthy);
  items.forEach(i => console.log(i.id, i.name));
  process.exit(0);
}

run().catch(console.error);
