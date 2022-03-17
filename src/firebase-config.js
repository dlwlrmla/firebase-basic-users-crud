// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3OmDQMj4gPz3jWMvmGuKZU3ecL9mXwGA",
  authDomain: "crud-76d5b.firebaseapp.com",
  projectId: "crud-76d5b",
  storageBucket: "crud-76d5b.appspot.com",
  messagingSenderId: "906530049749",
  appId: "1:906530049749:web:02d244bc8ea5cfb0f41c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)