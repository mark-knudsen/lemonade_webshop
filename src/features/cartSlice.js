import { createSlice } from '@reduxjs/toolkit';

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
    resetCart: () => [],
  },
});

export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
