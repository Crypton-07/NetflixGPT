// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHaoYSxLlwv-WoDn2pmyyXVRKM197Jmg8",
  authDomain: "netflixgpt-5bc10.firebaseapp.com",
  projectId: "netflixgpt-5bc10",
  storageBucket: "netflixgpt-5bc10.appspot.com",
  messagingSenderId: "140679760664",
  appId: "1:140679760664:web:5b85cc370ed13dc7436c6d",
  measurementId: "G-JNW7M44R87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
