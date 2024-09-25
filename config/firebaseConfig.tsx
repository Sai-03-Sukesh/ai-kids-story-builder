// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "all-projects-692a7.firebaseapp.com",
  projectId: "all-projects-692a7",
  storageBucket: "all-projects-692a7.appspot.com",
  messagingSenderId: "673554450484",
  appId: "1:673554450484:web:d8cdea49f8afbc5637e261",
  measurementId: "G-0WTD60MXK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)