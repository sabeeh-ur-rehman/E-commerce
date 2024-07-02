import { configureStore } from '@reduxjs/toolkit';
import countdownReducer from './countdownSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice.js';
import productDetailReducer from "./productDetailSlice.js"
import wishlistReducer from './wishlistSlice';
import loginReducer from './loginSlice.js';
import uploadReducer from './uploadSlice.js'

export const store = configureStore({
    reducer: {
        countdown: countdownReducer,
        products: productsReducer,
        cart: cartReducer,
        productDetail: productDetailReducer,
        wishlist: wishlistReducer,
        auth: loginReducer,
        upload: uploadReducer,
        
    },
});
