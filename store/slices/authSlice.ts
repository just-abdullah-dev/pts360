import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getAuthToken } from "@/lib/auth";
import { customFetch } from "@/lib/utils";

// Types
export interface User {
  id?: string;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string | null;
  emailConfirmed?: boolean;
  status?: string;
  statusValue?: number;
  isDeleted?: boolean;
  lastLoginDate?: string;
  lockoutEnabled?: boolean;
  lockoutEnd?: string | null;
  accessFailedCount?: number;
  isLockedOut?: boolean;
  roles?: string[];
  position?: {
    id?: string;
    title?: string;
    department?: string | null;
    location?: string | null;
  };
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
}

// Load saved user from sessionStorage
const savedUser =
  typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isLoading: false,
};

// Async thunk for fetching user
export const getUser = createAsyncThunk<User | null>(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    const token = getAuthToken();

    // If no token → redirect
    if (!token) {
      window.location.href = "/login";
      return rejectWithValue("No token");
    }

    try {
      const res = await customFetch("/User/profile", { method: "GET" });
      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem("user", JSON.stringify(data.data));
        return data.data as User;
      } else {
        window.location.href = "/login";
        return rejectWithValue("User fetch failed");
      }
    } catch (err) {
      console.error(err);
      return rejectWithValue("Error fetching user");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      document.cookie =
        "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      sessionStorage.removeItem("user");
      window.location.href = "/login";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<User | null>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
