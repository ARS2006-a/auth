"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Profile() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/signin");
    });
    return unsubscribe;
  }, [router]);

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Profile created for ${name}`);
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Create Profile</h1>
      <form onSubmit={handleSave} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-green-600 text-white py-2 rounded">
          Save & Continue
        </button>
      </form>
    </div>
  );
}