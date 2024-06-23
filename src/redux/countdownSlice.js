import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    days: "176",
    hours: "00",
    minutes: "00",
    seconds: "00",
};

const countdownSlice = createSlice({
    name: 'countdown',
    initialState,
    reducers: {
        setTimer: (state, action) => {
            state.days = action.payload.days;
            state.hours = action.payload.hours;
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
        },
        resetTimer: (state) => {
            state.days = "176";
            state.hours = "00";
            state.minutes = "00";
            state.seconds = "00";
        }
    }
});

export const { setTimer, resetTimer } = countdownSlice.actions;

export default countdownSlice.reducer;
