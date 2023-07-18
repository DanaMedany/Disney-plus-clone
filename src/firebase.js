import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

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


export default db

