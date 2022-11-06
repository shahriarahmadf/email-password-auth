// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9a9cvxpL5LFqnNbkgtPImUjDC4QMChtA",
  authDomain: "email-password-auth-20221107.firebaseapp.com",
  projectId: "email-password-auth-20221107",
  storageBucket: "email-password-auth-20221107.appspot.com",
  messagingSenderId: "826655164134",
  appId: "1:826655164134:web:78cb882f1ba12ebd345d27",
  measurementId: "G-GS8PTSWSW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;