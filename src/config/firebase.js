import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTfspQVGTOvy09oDd9upiiZ3GaNNYV8hA",
  authDomain: "e-commerce-tanbits.firebaseapp.com",
  projectId: "e-commerce-tanbits",
  storageBucket: "e-commerce-tanbits.appspot.com",
  messagingSenderId: "7632473005",
  appId: "1:7632473005:web:501166b2b1041995cf2f24",
  measurementId: "G-J1DYTBVDJ4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
