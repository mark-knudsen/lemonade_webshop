/* 
import { createSlice } from '@reduxjs/toolkit';

const lemonadesSlice = createSlice({
  name: 'lemonades',
  initialState: [
    { id: 1, name: 'Classic Lemonade', price: 2.5 },
    { id: 2, name: 'Strawberry Lemonade', price: 3 },
    // Add more lemonade types as needed
  ],
  reducers: {},
});

export default lemonadesSlice.reducer; */



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLemonades = createAsyncThunk('lemonades/fetchLemonades', async () => {
  const response = await axios.get('http://localhost:3001/api/lemonades'); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint URL
  return response.data;
});

const lemonadeSlice = createSlice({
  name: 'lemonades',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLemonades.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default lemonadeSlice.reducer;

