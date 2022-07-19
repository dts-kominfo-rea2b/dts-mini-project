// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeay8uVeW5E1lNfmVDOpfk_AAgTNkcuUk",
    authDomain: "muviee-a3627.firebaseapp.com",
    projectId: "muviee-a3627",
    storageBucket: "muviee-a3627.appspot.com",
    messagingSenderId: "1029078268263",
    appId: "1:1029078268263:web:8ce66cfffa301eca6797c2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};