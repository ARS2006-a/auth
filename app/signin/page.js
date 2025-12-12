"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import useAuthStore from "../../stores/authStore";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useAuthStore();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
      <form onSubmit={handleSignIn} className="flex flex-col gap-3">
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
        <button className="bg-blue-600 text-white py-2 rounded">Sign In</button>
      </form>
      <p className="text-gray-700">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
      </p>
    </div>
  );
}