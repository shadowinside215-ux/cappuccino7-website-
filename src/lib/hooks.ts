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
import { db, auth } from './firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, _operationType: OperationType, _path: string | null) {
  const message = error instanceof Error ? error.message : 'An unexpected database error occurred.';
  
  // Only log detailed info in development if needed, 
  // but for production keep it clean and user-friendly
  if (process.env.NODE_ENV === 'development') {
    console.error('Database Error:', message, { operation: _operationType, path: _path });
  } else {
    // Production: just log that an error occurred without sensitive details
    console.error('A system error occurred. Please try again later.');
  }

  throw new Error('Something went wrong. Please refresh the page.');
}

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
      handleFirestoreError(err, OperationType.LIST, path);
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
    }, (err) => {
      handleFirestoreError(err, OperationType.GET, `${path}/${id}`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [path, id]);

  return { data, loading };
}

export async function addDocument(path: string, id: string, data: any) {
  try {
    await setDoc(doc(db, path, id), data);
  } catch (err) {
    handleFirestoreError(err, OperationType.CREATE, `${path}/${id}`);
  }
}

export async function updateDocument(path: string, id: string, data: any) {
  try {
    await updateDoc(doc(db, path, id), data);
  } catch (err) {
    handleFirestoreError(err, OperationType.UPDATE, `${path}/${id}`);
  }
}

export async function removeDocument(path: string, id: string) {
  try {
    await deleteDoc(doc(db, path, id));
  } catch (err) {
    handleFirestoreError(err, OperationType.DELETE, `${path}/${id}`);
  }
}
