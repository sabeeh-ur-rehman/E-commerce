import { createSlice } from '@reduxjs/toolkit';
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('wishlist');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Failed to load wishlist from local storage:", e);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('wishlist', serializedState);
  } catch (e) {
    console.warn("Failed to save wishlist to local storage:", e);
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: loadState(),
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
      }
      saveState(state);
    },
    removeFromWishlist: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      saveState(newState); 
      return newState;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
