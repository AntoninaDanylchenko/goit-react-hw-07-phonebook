import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
