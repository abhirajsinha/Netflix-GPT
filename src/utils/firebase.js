// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2TSmE7SgPHw2woSJksnA-QdqC-FhDtwY",
  authDomain: "netflixgpt-1dd88.firebaseapp.com",
  projectId: "netflixgpt-1dd88",
  storageBucket: "netflixgpt-1dd88.appspot.com",
  messagingSenderId: "691275820310",
  appId: "1:691275820310:web:85e900cc8cc7a3e4f2b437",
  measurementId: "G-HXMTJ1SSCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
