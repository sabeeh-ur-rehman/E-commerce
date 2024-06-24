import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderDetails: {
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: '',
  },
  status: 'idle',
  error: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      state.orderDetails = { ...state.orderDetails, ...action.payload };
    },
    placeOrderStart: (state) => {
      state.status = 'loading';
    },
    placeOrderSuccess: (state) => {
      state.status = 'succeeded';
      state.orderDetails = {
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phoneNumber: '',
        email: '',
      };
    },
    placeOrderFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  setOrderDetails,
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFailure,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;

export const placeOrder = (orderDetails) => async (dispatch) => {
  try {
    dispatch(placeOrderStart());
    // Simulate an API call to place the order
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(placeOrderSuccess());
  } catch (error) {
    dispatch(placeOrderFailure(error.message));
  }
};
