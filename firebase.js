import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace with your actual Firebase configuration
// Get this from Firebase Console → Project Settings → Your apps → Firebase SDK snippet
// 
// IMPORTANT: This is a DEMO config - you MUST replace it with your own!
// Steps to get your config:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or select existing)
// 3. Click on "Web" icon to add a web app
// 4. Copy the firebaseConfig object
// 5. Paste it below
// 6. Go to Authentication → Sign-in method → Enable Email/Password

const firebaseConfig = {
  apiKey: "AIzaSyDp5IEhwyBsVy2Bq_TnEyk3NKkxmj4Vzyw",
  authDomain: "auth-f9c87.firebaseapp.com",
  projectId: "auth-f9c87",
  storageBucket: "auth-f9c87.firebasestorage.app",
  messagingSenderId: "403416204002",
  appId: "1:403416204002:web:988acaef21b33fbeef54bb",
};

let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  console.error("\n⚠️  FIREBASE NOT CONFIGURED ⚠️");
  console.error("Please update firebase.js with your actual Firebase configuration.");
  console.error("Visit: https://console.firebase.google.com/\n");
}

export { auth };