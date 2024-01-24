// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP2q5pjhQympIY7Z5_YNDiqpwxqbVNCcA",
  authDomain: "shopper-88381.firebaseapp.com",
  projectId: "shopper-88381",
  storageBucket: "shopper-88381.appspot.com",
  messagingSenderId: "372375397884",
  appId: "1:372375397884:web:ebf9672edd2be236ab3e79",
  measurementId: "G-XJ940DTBHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
