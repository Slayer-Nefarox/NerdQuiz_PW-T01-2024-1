// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtqYryRSl7ALP9eDwIsJ1Q7O6KAAYh5h0",
  authDomain: "nerdquiz-a16a2.firebaseapp.com",
  projectId: "nerdquiz-a16a2",
  storageBucket: "nerdquiz-a16a2.appspot.com",
  messagingSenderId: "336247124221",
  appId: "1:336247124221:web:212b4222c116376d4ece94",
  measurementId: "G-SNQ4Y6DJN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { auth, db, storage };