import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDRJ-k4KeLw4SGRI3eWAEQ-ct7Iazj8Yas',
  authDomain: 'chopsbysarah.firebaseapp.com',
  projectId: 'chopsbysarah',
  storageBucket: 'chopsbysarah.appspot.com',
  messagingSenderId: '143941525061',
  appId: '1:143941525061:web:d48e871946ae95f82f4d2c',
  measurementId: 'G-WJJ9417RWY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export services correctly
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
