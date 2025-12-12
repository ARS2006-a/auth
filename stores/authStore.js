import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user 
      }),
      
      logout: () => set({ 
        user: null, 
        isAuthenticated: false 
      }),
      
      clearAuth: () => set({ 
        user: null, 
        isAuthenticated: false 
      })
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;