// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjQ46k9GuptSg1BWnGl84xcrlwMJAg9M8",
  authDomain: "my-app-44e3b.firebaseapp.com",
  projectId: "my-app-44e3b",
  storageBucket: "my-app-44e3b.firebasestorage.app",
  messagingSenderId: "690321254730",
  appId: "1:690321254730:web:c08f6ab391825bd573b9b3",
  measurementId: "G-HTXDDLTHZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);