import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const profitSlice = createSlice({
  name: 'profit',
  initialState: 0,
  reducers: {
    updateProfit: (state, action) => {
      return state + action.payload;
    },
  },
});

// Define the thunk that updates profit
export const updateProfit = createAsyncThunk('profit/update', async (profitAmount, { dispatch }) => {
    dispatch(profitSlice.actions.addProfit(profitAmount));
    return profitAmount;
  });

export default profitSlice.reducer;
