import { writable, derived } from 'svelte/store';
import { db } from './firebase';

export const addBucks = writable({
  amount: '',
  description: ''
});

export const history = derived([addBucks], ([$addBucks]) => {
  return db.collection('happy_bucks').orderBy('timestamp', 'desc').get()
    .then((snapshot) => snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })));
});
