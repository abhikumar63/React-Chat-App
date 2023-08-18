// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDloQXZmCN9yK10OJamKIfjpyYBoMeROns",
  authDomain: "react-chat-app-1a079.firebaseapp.com",
  projectId: "react-chat-app-1a079",
  storageBucket: "react-chat-app-1a079.appspot.com",
  messagingSenderId: "529426147144",
  appId: "1:529426147144:web:cf5ec3444a706c0656b57d",
  measurementId: "G-QMD23Z301C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);