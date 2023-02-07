// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCvw4HwGyF4x0DUSVzXQDEXIuwystsdts',
  authDomain: 'cocan-tic.firebaseapp.com',
  projectId: 'cocan-tic',
  storageBucket: 'cocan-tic.appspot.com',
  messagingSenderId: '829021712241',
  appId: '1:829021712241:web:78ef8ed4e0bc9bce26d0d0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}