// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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

//de aici
export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}