// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQBTcTn3H1oo6RxtOps-4tcXKE9s21EU",
  authDomain: "movieapp-e4f8f.firebaseapp.com",
  projectId: "movieapp-e4f8f",
  storageBucket: "movieapp-e4f8f.appspot.com",
  messagingSenderId: "1048469220937",
  appId: "1:1048469220937:web:b97d1cbc59057939395998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const auth = getAuth(app);