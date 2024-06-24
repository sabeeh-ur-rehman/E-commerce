import { createSlice } from '@reduxjs/toolkit';

// Load cart items from local storage
const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load cart from local storage", e);
    return [];
  }
};

// Save cart items to local storage
const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.items);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn("Could not save cart to local storage", e);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state); // Save to local storage
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      saveCartToLocalStorage(state); // Save to local storage
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      saveCartToLocalStorage(state); // Save to local storage
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
      saveCartToLocalStorage(state); // Save to local storage
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state); // Save to local storage
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
