// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyowW6NgwUAszopu5Kjip1hs6P6WpTi0o",
  authDomain: "beyond-7f3cc.firebaseapp.com",
  projectId: "beyond-7f3cc",
  storageBucket: "beyond-7f3cc.appspot.com",
  messagingSenderId: "1044070393733",
  appId: "1:1044070393733:web:12f24ab5734071537a86ec",
  measurementId: "G-BHF8J54QPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
