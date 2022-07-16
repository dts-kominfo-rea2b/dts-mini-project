import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzyXmHM5-4qAOT2hsHWt83Opd12nBESYc",
    authDomain: "mood-meter-c19fd.firebaseapp.com",
    projectId: "mood-meter-c19fd",
    storageBucket: "mood-meter-c19fd.appspot.com",
    messagingSenderId: "40587496796",
    appId: "1:40587496796:web:8d9579170b535f1ce7c599"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };