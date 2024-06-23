import { configureStore } from '@reduxjs/toolkit';
import countdownReducer from './countdownSlice';
import productsReducer from './productsSlice'

export const store = configureStore({
    reducer: {
        countdown: countdownReducer,
        products: productsReducer,
    },
});
