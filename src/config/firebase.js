// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "238502d088460d24037d629e9d5d0a97",
  authDomain: "movie-da782.firebaseapp.com",
  projectId: "movie-da782",
  storageBucket: "movie-da782.appspot.com",
  messagingSenderId: "888466612622",
  appId: "1:888466612622:web:ec8cd90907ebb0a77404df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
