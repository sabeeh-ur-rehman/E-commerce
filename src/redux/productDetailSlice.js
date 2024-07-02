import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

export const fetchProductById = createAsyncThunk('productDetail/fetchProductById', async (id) => {
    const docRef = doc(db, 'product', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        throw new Error("No such document!");
    }

    return {
        id: docSnap.id,
        ...docSnap.data()
    };
});

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        product: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productDetailSlice.reducer;
