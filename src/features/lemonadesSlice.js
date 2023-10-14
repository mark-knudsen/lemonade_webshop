
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

export default lemonadesSlice.reducer;
