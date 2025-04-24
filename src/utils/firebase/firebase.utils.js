import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCS82ofcxYxHyP5glhndKByuLP8lfqgWxE",
  authDomain: "crwn-clothing-db-15e39.firebaseapp.com",
  projectId: "crwn-clothing-db-15e39",
  storageBucket: "crwn-clothing-db-15e39.firebasestorage.app",
  messagingSenderId: "731595679881",
  appId: "1:731595679881:web:6096ce495c47db0054fe58"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);