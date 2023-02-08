//Import the required methods
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

//The config we copied from firebase(Replace with your config)
const firebaseConfig = {
  apiKey: 'AIzaSyCCvw4HwGyF4x0DUSVzXQDEXIuwystsdts',
  authDomain: 'cocan-tic.firebaseapp.com',
  projectId: 'cocan-tic',
  storageBucket: 'cocan-tic.appspot.com',
  messagingSenderId: '829021712241',
  appId: '1:829021712241:web:78ef8ed4e0bc9bce26d0d0'
};

//initialize the firebase app
initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

//export the auth object
export { auth }