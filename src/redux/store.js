import { configureStore } from '@reduxjs/toolkit';
import countdownReducer from './countdownSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice.js';

export const store = configureStore({
    reducer: {
        countdown: countdownReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});
