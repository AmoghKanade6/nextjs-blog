// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-163ef.firebaseapp.com",
  projectId: "nextjs-blog-163ef",
  storageBucket: "nextjs-blog-163ef.appspot.com",
  messagingSenderId: "104694668268",
  appId: "1:104694668268:web:b453289b2ec748b4b47ec9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
