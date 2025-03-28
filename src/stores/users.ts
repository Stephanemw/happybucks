import { writable } from 'svelte/store';
import { auth } from './firebase';

export const users = writable([
  {
    id: '1',
    email: 'parent@example.com',
    role: 'parent'
  },
  {
    id: '2',
    email: 'spouse@example.com',
    role: 'parent'
  }
]);

// Initialize Firebase auth
auth.signInWithEmailAndPassword('parent@example.com', 'password').catch(console.error);
