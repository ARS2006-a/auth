"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import useAuthStore from "../../stores/authStore";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign up error:", error);
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please sign in instead.");
      } else if (error.code === "auth/invalid-email") {
        alert("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        alert("Password is too weak. Please use at least 6 characters.");
      } else if (error.code === "auth/invalid-api-key") {
        alert("⚠️ Firebase not configured! Please update firebase.js with your actual Firebase configuration.");
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded text-black bg-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded text-black bg-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded">Sign Up</button>
      </form>
      <p className="text-gray-700">
        Already have an account?{" "}
        <a href="/signin" className="text-blue-600">Sign In</a>
      </p>
    </div>
  );
}