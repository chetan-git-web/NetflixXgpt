// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmtbL6XEUEI05h6hvUkHS20JLTuOFaQ1Q",
  authDomain: "netflixxgpt-4d86a.firebaseapp.com",
  projectId: "netflixxgpt-4d86a",
  storageBucket: "netflixxgpt-4d86a.appspot.com",
  messagingSenderId: "108875962578",
  appId: "1:108875962578:web:c3497dd74043268666b50b",
  measurementId: "G-3YZNGGD8H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();