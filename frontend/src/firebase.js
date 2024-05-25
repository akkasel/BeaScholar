// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnJznncCIHfI4slFqQ9E4lAMH3JTgBicw",
  authDomain: "beascholar-d26c0.firebaseapp.com",
  projectId: "beascholar-d26c0",
  storageBucket: "beascholar-d26c0.appspot.com",
  messagingSenderId: "457486814449",
  appId: "1:457486814449:web:c15534df6467ab8c182d50",
  measurementId: "G-51Z00XW06N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore
const db = getFirestore(app);
export { db };

// Initialize Firebase Storage
const storage = getStorage(app);

// Export the storage object
export { storage };



