import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductById = createAsyncThunk('productDetail/fetchProductById', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
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
