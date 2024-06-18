// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn9a9AlLo3slOfs7i7pQdi09nDzTg26co",
  authDomain: "linksus-app.firebaseapp.com",
  projectId: "linksus-app",
  storageBucket: "linksus-app.appspot.com",
  messagingSenderId: "785784636487",
  appId: "1:785784636487:web:93d62b61e592c8e3201d62",
  measurementId: "G-R8X8RMLW85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);