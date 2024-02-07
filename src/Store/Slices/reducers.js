import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(item);
      }
    })
    .addCase(decrement, (state, action) => {
      const itemIdToDecrement = action.payload;
      const itemToDecrement = state.cartItems.find(item => item.id === itemIdToDecrement);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    })
    .addCase(deleteFromCart, (state, action) => {
      const itemIdToDelete = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemIdToDelete);
    })
    .addCase(calculatePrice, (state) => {
      let sum = 0;
      state.cartItems.forEach(item => (sum += item.price * item.quantity));
      state.subtotal = sum;
      state.shipping = state.subtotal > 1000 ? 0 : 200;
      state.tax = +(state.subtotal * 0.18).toFixed();
      state.total = state.subtotal + state.tax + state.shipping;
    });
});

export default cartReducer;
