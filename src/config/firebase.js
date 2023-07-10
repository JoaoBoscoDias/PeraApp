// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiXAd8tN1U2bFSeZI8LUiERRuj7hmDK90",
  authDomain: "peraapp-d625c.firebaseapp.com",
  projectId: "peraapp-d625c",
  storageBucket: "peraapp-d625c.appspot.com",
  messagingSenderId: "574399247841",
  appId: "1:574399247841:web:5be70c35b4c4a7cfb30ea0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
