// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAIpjTPXueRWEW_L4yHnCM20sQO_Vu6L8",
  authDomain: "bike-zone-website.firebaseapp.com",
  projectId: "bike-zone-website",
  storageBucket: "bike-zone-website.appspot.com",
  messagingSenderId: "1071612851150",
  appId: "1:1071612851150:web:cb8dffd00d52c08900f19f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
