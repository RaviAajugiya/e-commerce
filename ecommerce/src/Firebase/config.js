import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBP2q5pjhQympIY7Z5_YNDiqpwxqbVNCcA",
  authDomain: "shopper-88381.firebaseapp.com",
  projectId: "shopper-88381",
  storageBucket: "shopper-88381.appspot.com",
  messagingSenderId: "372375397884",
  appId: "1:372375397884:web:ebf9672edd2be236ab3e79",
  measurementId: "G-XJ940DTBHB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);