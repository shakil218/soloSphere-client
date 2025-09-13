// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWz-6evXBfjSPLWFoS7ur0fuw-vCElIk8",
  authDomain: "solosphere-client-f6104.firebaseapp.com",
  projectId: "solosphere-client-f6104",
  storageBucket: "solosphere-client-f6104.firebasestorage.app",
  messagingSenderId: "274320255497",
  appId: "1:274320255497:web:2c22c1a4d24f1c5e99e6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;