// src/redux/contactSlice.js

import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    name: '',
    email: '',
    phone: '',
    message: '',
  },
  reducers: {
    setContactData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.message = action.payload.message;
      // Store data in local storage
      localStorage.setItem('contactData', JSON.stringify(state));
    },
  },
});

export const { setContactData } = contactSlice.actions;
export default contactSlice.reducer;
