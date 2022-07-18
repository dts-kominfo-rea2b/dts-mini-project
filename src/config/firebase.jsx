import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyBGqktQBjz5Ow4bmkDO2v2epilGwIrPF40",
    //apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "auth-react-a3477.firebaseapp.com",
    projectId: "auth-react-a3477",
    storageBucket: "auth-react-a3477.appspot.com",
    messagingSenderId: "841109424677",
    appId: "1:841109424677:web:d59c818268158556124dcc"
    
    // authDomain: "mood-meter-13966.firebaseapp.com",
    // projectId: "mood-meter-13966",
    // storageBucket: "mood-meter-13966.appspot.com",
    // messagingSenderId: "17422836348",
    // appId: "1:17422836348:web:25d2fbcb86bbaddb759ff9",
    // measurementId: "G-YKPBJ9XBLH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };