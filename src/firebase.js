import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth , signInWithPopup } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWV7b1YHYEn0BNGclkKw7kxQqtvuAp5zw",
  authDomain: "disney-plus-clone-e4d3e.firebaseapp.com",
  projectId: "disney-plus-clone-e4d3e",
  storageBucket: "disney-plus-clone-e4d3e.appspot.com",
  messagingSenderId: "1036038794254",
  appId: "1:1036038794254:web:d1e2682608d4973d36e05f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export  { auth, provider, signInWithPopup }
export default db

