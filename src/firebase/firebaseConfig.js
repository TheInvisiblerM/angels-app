// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAfLqHhzTdjG3eH2jaubt1kZ_WCvG3FZw",
  authDomain: "angles-attendance-web.firebaseapp.com",
  projectId: "angles-attendance-web",
  storageBucket: "angles-attendance-web.appspot.com",
  messagingSenderId: "416084006492",
  appId: "1:416084006492:web:29c8c3d68d09e49b59b899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);
