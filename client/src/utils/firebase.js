
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-1f058.firebaseapp.com",
  projectId: "interviewiq-1f058",
  storageBucket: "interviewiq-1f058.firebasestorage.app",
  messagingSenderId: "1004299415233",
  appId: "1:1004299415233:web:f185753ceac7e677d06e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}