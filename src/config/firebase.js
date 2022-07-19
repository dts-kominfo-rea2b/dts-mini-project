// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGFaPyt3C1qGNtjB-26ipOA_2Oi3AJyTc",
  authDomain: "mood-meter-8d5a7.firebaseapp.com",
  projectId: "mood-meter-8d5a7",
  storageBucket: "mood-meter-8d5a7.appspot.com",
  messagingSenderId: "324058176372",
  appId: "1:324058176372:web:e5a061f8a0bb11160aaa21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerEmailPassword = async (email, password) => {
  try {
    const responseRegister = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user registration", responseRegister.user);
  } catch (error) {
    console.log(error);
    console.log("Error code auth", error.code);
    console.log("Error msg auth", error.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const responseLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Selamat Datang", responseLogin.user);
  } catch (error) {
    console.log(error);
    console.log("Error code login", error.code);
    console.log("Error msg login", error.message);
  }
};
const resetPassword = async (email) => {
  try {
    const responseResetPass = await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};
const logoutUser = async () => {
  try {
    const responseLogout = await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, registerEmailPassword, loginUser, resetPassword, logoutUser };
