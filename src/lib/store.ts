import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { email: string; name: string };
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email, password) => {
    // TODO: Implement actual authentication
    set({ isAuthenticated: true, user: { email, name: 'Test User' } });
    return true;
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));