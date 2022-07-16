// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi_mOpJxbEOtfpiWqgxHE-E6eFRbQR-PM",
  authDomain: "pair-100-dts-mini-project.firebaseapp.com",
  projectId: "pair-100-dts-mini-project",
  storageBucket: "pair-100-dts-mini-project.appspot.com",
  messagingSenderId: "697173998668",
  appId: "1:697173998668:web:01e0eec4f9e1f28bdd88e9",
  measurementId: "G-L6G5Q7MH22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };