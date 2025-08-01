import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import goalsSlice from './slices/goalsSlice';
import notificationsSlice from './slices/notificationsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    goals: goalsSlice,
    notifications: notificationsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;