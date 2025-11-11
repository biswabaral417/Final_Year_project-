// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBvbmymEvwNnrpf3tq9EOLAP6PsoCjAfc",
  authDomain: "heart-pred-822eb.firebaseapp.com",
  projectId: "heart-pred-822eb",
  storageBucket: "heart-pred-822eb.firebasestorage.app",
  messagingSenderId: "699748173939",
  appId: "1:699748173939:web:1e601f6bad3be1663e8206",
  measurementId: "G-21BLJRVQDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);