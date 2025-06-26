
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCw6nOsRSJa45x2NiAJpgFUXS3xyzz4KG0",
  authDomain: "curso-25614.firebaseapp.com",
  projectId: "curso-25614",
  storageBucket: "curso-25614.firebasestorage.app",
  messagingSenderId: "512752113880",
  appId: "1:512752113880:web:5cd5578a891b38a1399fad",
  measurementId: "G-DD1SPZY3ZC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };