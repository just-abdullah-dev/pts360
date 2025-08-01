import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, sampleUsers } from '@/constants/sampleData';

// Load from localStorage
const savedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
const savedAuth = typeof window !== 'undefined' ? localStorage.getItem('isAuthenticated') : null;

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  users: User[];
}

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: savedAuth === 'true',
  users: sampleUsers,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const user = state.users.find(u => u.email === action.payload.email);
      if (user && action.payload.password === 'password123') {
        state.user = user;
        state.isAuthenticated = true;
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Remove from localStorage
      localStorage.removeItem('user');
      localStorage.setItem('isAuthenticated', 'false');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;