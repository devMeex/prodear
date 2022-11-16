import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDok3iOWmyZadkHlxOcPHKELHh82POZBWQ",
  authDomain: "prodear-e05fb.firebaseapp.com",
  projectId: "prodear-e05fb",
  storageBucket: "prodear-e05fb.appspot.com",
  messagingSenderId: "156093628208",
  appId: "1:156093628208:web:b3fedf7da39632e88cd2f5",
  measurementId: "G-E72MDSV1C0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
