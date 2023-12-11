// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics , isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4D7u21IJFT5VcLJ0n1uuOz-oeJIx4z9c",
  authDomain: "unesppp-c4395.firebaseapp.com",
  projectId: "unesppp-c4395",
  storageBucket: "unesppp-c4395.appspot.com",
  messagingSenderId: "713241321536",
  appId: "1:713241321536:web:9f7562fe2f95f6244ebfa5",
  measurementId: "G-K65MB3391Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const initializeAnalytics = async () => {
  if (await isSupported()) {
    const analytics = getAnalytics(app);
    // Perform any additional analytics setup if needed
  }
};
initializeAnalytics();
export const storage = getStorage();