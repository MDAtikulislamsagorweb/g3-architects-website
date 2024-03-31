
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArmJiN97xLUgYJlowV9yy5DLKmqUO85j4",
  authDomain: "simple-firebase-fd058.firebaseapp.com",
  projectId: "simple-firebase-fd058",
  storageBucket: "simple-firebase-fd058.appspot.com",
  messagingSenderId: "821103899471",
  appId: "1:821103899471:web:554a9c9130f9539f5e4b3a",
  measurementId: "G-J9PF4Q5MPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);