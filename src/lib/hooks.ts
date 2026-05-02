import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  onSnapshot, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  DocumentData,
  orderBy
} from 'firebase/firestore';
import { db } from './firebase';

export function useCollection<T = DocumentData>(path: string, orderField?: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = orderField 
      ? query(collection(db, path), orderBy(orderField))
      : query(collection(db, path));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
      setData(items);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setError(err as Error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [path, orderField]);

  return { data, loading, error };
}

export function useDocument<T = DocumentData>(path: string, id: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, path, id), (snapshot) => {
      if (snapshot.exists()) {
        setData({ id: snapshot.id, ...snapshot.data() } as T);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [path, id]);

  return { data, loading };
}

export async function addDocument(path: string, id: string, data: any) {
  await setDoc(doc(db, path, id), data);
}

export async function updateDocument(path: string, id: string, data: any) {
  await updateDoc(doc(db, path, id), data);
}

export async function removeDocument(path: string, id: string) {
  await deleteDoc(doc(db, path, id));
}
