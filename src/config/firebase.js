import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_KEY,
  // apiKey: "AIzaSyAjDd7FTA5t1hum0PSRb4G3DVCb4e8cwf8",
  authDomain: "dts-mini-project-933f4.firebaseapp.com",
  projectId: "dts-mini-project-933f4",
  storageBucket: "dts-mini-project-933f4.appspot.com",
  messagingSenderId: "1058919908536",
  appId: "1:1058919908536:web:3f29b9c8321c1e328e604d",
};

const app = initializeApp(firebaseConfig);

export default app;
