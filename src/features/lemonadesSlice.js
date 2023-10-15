import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLemonades = createAsyncThunk('lemonades/fetchLemonades', async () => {
  const response = await axios.get('http://localhost:3001/api/lemonades');
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

