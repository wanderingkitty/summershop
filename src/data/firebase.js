import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: "AIzaSyB8ipfxC_TuqMwhupsLpOU6bkXauhtiZg0",
	authDomain: "summershopxp.firebaseapp.com",
	projectId: "summershopxp",
	storageBucket: "summershopxp.appspot.com",
	messagingSenderId: "644657954008",
	appId: "1:644657954008:web:f6c9564bb03c2053612bad"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
