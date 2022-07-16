// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMSUUkx2kTn-MW3iLMZNnXKjvaDfinJEw",
  authDomain: "dts-pro-758d5.firebaseapp.com",
  projectId: "dts-pro-758d5",
  storageBucket: "dts-pro-758d5.appspot.com",
  messagingSenderId: "447984144294",
  appId: "1:447984144294:web:7037782aeb11d02ac4c967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};