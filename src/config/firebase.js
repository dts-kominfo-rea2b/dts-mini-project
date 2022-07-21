// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdhRXGBL4PcU5IXmGCAyQ06--LYQ9SnpI",
  authDomain: "dts-react-mini-project.firebaseapp.com",
  projectId: "dts-react-mini-project",
  storageBucket: "dts-react-mini-project.appspot.com",
  messagingSenderId: "638197942656",
  appId: "1:638197942656:web:f3aec5a4c370f8ebc01965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };