// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjdMU8P-hsX-tyyJr9uUincsuB2a0QbLE",
  authDomain: "project-1-81e9b.firebaseapp.com",
  projectId: "project-1-81e9b",
  storageBucket: "project-1-81e9b.appspot.com",
  messagingSenderId: "565825814169",
  appId: "1:565825814169:web:d1cadfab715a4768514208",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const burseColRef = collection(db, "burse");
export default burseColRef;
