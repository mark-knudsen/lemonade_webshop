import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateProfit = createAsyncThunk('profit/update', async (profitAmount, { dispatch }) => {
  dispatch(profitSlice.actions.addProfit(profitAmount));
  return profitAmount;
});

const profitSlice = createSlice({
  name: 'profit',
  initialState: 0,
  reducers: {
    addProfit: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { addProfit } = profitSlice.actions;
export default profitSlice.reducer;