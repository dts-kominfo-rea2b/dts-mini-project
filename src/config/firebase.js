import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALHC4_xefpbfbTwPp8Cg-PCb6KNn6VrzY",
    authDomain: "mood-meter-fbcdc.firebaseapp.com",
    projectId: "mood-meter-fbcdc",
    storageBucket: "mood-meter-fbcdc.appspot.com",
    messagingSenderId: "139639136006",
    appId: "1:139639136006:web:25104b51303cf60fd78887"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };