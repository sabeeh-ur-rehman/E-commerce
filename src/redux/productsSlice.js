import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const querySnapshot = await getDocs(collection(db, 'product'));
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return products;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
