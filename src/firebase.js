import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "videoapp-likety.firebaseapp.com",
  projectId: "videoapp-likety",
  storageBucket: "videoapp-likety.appspot.com",
  messagingSenderId: "1057396702954",
  appId: "1:1057396702954:web:e5a2077090d53761a7a193"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 
export const provider = new GoogleAuthProvider();

export default app;