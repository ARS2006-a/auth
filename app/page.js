"use client";

import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";

export default function Home() {
  const router = useRouter();

  // Redirect logged-in users automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/dashboard");
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5">
      <h1 className="text-3xl font-bold">Welcome to My Auth App</h1>
      <p className="text-gray-600">A simple Next.js + Firebase Authentication demo</p>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/signup")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>

        <button
          onClick={() => router.push("/signin")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}