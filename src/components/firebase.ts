// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmLTb6IpHcyJhHZe67o5PWwA7VqibKAk8",
  authDomain: "foodtrack-5b0cc.firebaseapp.com",
  projectId: "foodtrack-5b0cc",
  storageBucket: "foodtrack-5b0cc.appspot.com",
  messagingSenderId: "894812303321",
  appId: "1:894812303321:web:1cdb32f1e03fbff682f3c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db