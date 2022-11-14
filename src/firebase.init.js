// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQc6t8eOne5ytWKkD91gzAkAJ_jfjrya8",
    authDomain: "travel-guru-65372.firebaseapp.com",
    projectId: "travel-guru-65372",
    storageBucket: "travel-guru-65372.appspot.com",
    messagingSenderId: "694417233553",
    appId: "1:694417233553:web:a30e4d93e84bb20dc45130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;