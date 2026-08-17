import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// إعدادات مشروع منصة خضر الفعلية
const firebaseConfig = {
  apiKey: "AIzaSyDw8IM1VLZ9wzirGRJi6tGzh9rYNs59ypk",
  authDomain: "khedr-physio.firebaseapp.com",
  projectId: "khedr-physio",
  storageBucket: "khedr-physio.firebasestorage.app",
  messagingSenderId: "232758240234",
  appId: "1:232758240234:web:e66bb53be1fcb4a0290893",
  measurementId: "G-8NZLYVK1R8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp 
};