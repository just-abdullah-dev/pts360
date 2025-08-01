import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Goal, sampleGoals } from '@/constants/sampleData';

interface GoalsState {
  goals: Goal[];
  filter: 'monthly' | 'quarterly' | 'yearly';
}

const initialState: GoalsState = {
  goals: sampleGoals,
  filter: 'monthly',
};

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'monthly' | 'quarterly' | 'yearly'>) => {
      state.filter = action.payload;
    },
    addGoal: (state, action: PayloadAction<Goal>) => {
      state.goals.push(action.payload);
    },
    updateGoal: (state, action: PayloadAction<Goal>) => {
      const index = state.goals.findIndex(g => g.id === action.payload.id);
      if (index !== -1) {
        state.goals[index] = action.payload;
      }
    },
    deleteGoal: (state, action: PayloadAction<string>) => {
      state.goals = state.goals.filter(g => g.id !== action.payload);
    },
  },
});

export const { setFilter, addGoal, updateGoal, deleteGoal } = goalsSlice.actions;
export default goalsSlice.reducer;