import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'your_api_key',
  authDomain: 'your_project.firebaseapp.com',
  projectId: 'your_project_id',
  storageBucket: 'your_bucket.appspot.com',
  messagingSenderId: 'your_messaging_sender_id',
  appId: 'your_app_id'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Firestore
