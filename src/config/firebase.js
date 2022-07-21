import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyBt_nXrfmGyAk6saxq7SL1sJBuWtVgQ3ok",
    authDomain: "movie-app-c7b30.firebaseapp.com",
    projectId: "movie-app-c7b30",
    storageBucket: "movie-app-c7b30.appspot.com",
    messagingSenderId: "783621645735",
    appId: "1:783621645735:web:6f79d2c82df8d218310282"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };