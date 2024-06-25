import { configureStore } from '@reduxjs/toolkit';
import countdownReducer from './countdownSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice.js';
import productDetailReducer from "./productDetailSlice.js"
import checkoutReducer from "./checkoutslice.js"
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
    reducer: {
        countdown: countdownReducer,
        products: productsReducer,
        cart: cartReducer,
        productDetail: productDetailReducer,
        checkout: checkoutReducer,
        wishlist: wishlistReducer,
    },
});
