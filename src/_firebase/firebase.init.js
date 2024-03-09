// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2hRrzpDooBvGyI0LSaVT7mGlyya4PkyU",
  authDomain: "schedule-builder-32b20.firebaseapp.com",
  projectId: "schedule-builder-32b20",
  storageBucket: "schedule-builder-32b20.appspot.com",
  messagingSenderId: "508789979201",
  appId: "1:508789979201:web:68ed9210a558f64295eec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);