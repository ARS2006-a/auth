"use client";

import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import useAuthStore from "../../stores/authStore";
import useTodoStore from "../../stores/todoStore";

export default function Dashboard() {
  const router = useRouter();
  const { user, setUser, logout } = useAuthStore();
  const { getTodoStats } = useTodoStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/signin");
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, [router, setUser]);

  const handleLogout = async () => {
    await signOut(auth);
    logout();
    router.push("/signin");
  };

  const todoStats = getTodoStats();

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Total Todos</h3>
            <p className="text-3xl font-bold text-blue-600">{todoStats.total}</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-600">{todoStats.completed}</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">{todoStats.pending}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => router.push("/todo")}
              className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <span className="text-xl">📝</span>
              <span>Manage Todos</span>
            </button>
            <button
              onClick={() => router.push("/profile")}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <span className="text-xl">👤</span>
              <span>View Profile</span>
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h2>
          <div className="space-y-2">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>User ID:</strong> {user.uid}</p>
            <p><strong>Account Created:</strong> {new Date(user.metadata.creationTime).toLocaleDateString()}</p>
            <p><strong>Last Sign In:</strong> {new Date(user.metadata.lastSignInTime).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}