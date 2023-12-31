import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

// Create an async thunk for updating quantities
export const updateQuantities = createAsyncThunk('cart/updateQuantities', async (quantities) => {
  const response = await fetch('http://localhost:3001/api/updateQuantities', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quantities),
  });

  const data = await response.json();
  return data;
});


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, quantities } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        // If the item already exists in the cart, calculate the maximum quantity that can be added
        const maxQuantity = quantities - existingItem.quantity;
        const quantityToAdd = maxQuantity > 0 ? 1 : 0; // Limit the addition to available quantities
        existingItem.quantity += quantityToAdd;
      } else {
        // Otherwise, add the item to the cart with a maximum quantity of available quantities
        state.push({ id, name, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    resetCart: () => [],
  },
  extraReducers: (builder) => {
    builder.addCase(updateQuantities.fulfilled, (state, action) => {
      // Handle the API response here, if needed
    });
  },
  
});

export const { addToCart, resetCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
