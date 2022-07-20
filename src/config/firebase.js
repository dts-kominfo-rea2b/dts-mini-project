// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '',
  authDomain: 'dts-mini-project.firebaseapp.com',
  projectId: 'dts-mini-project',
  storageBucket: 'dts-mini-project.appspot.com',
  messagingSenderId: '652349736540',
  appId: '1:652349736540:web:7b73f6bd1d8c5734db0899',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
