// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwsb7m6MRAqFwNbxRWVsw_cyRLypx0s-Q",
  authDomain: "learn-firebase-e0412.firebaseapp.com",
  projectId: "learn-firebase-e0412",
  storageBucket: "learn-firebase-e0412.firebasestorage.app",
  messagingSenderId: "263382345449",
  appId: "1:263382345449:web:186078fb655d4ea4a7f278",
  measurementId: "G-B0DZHW3F7F",
  databseURL: "https://learn-firebase-e0412-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
