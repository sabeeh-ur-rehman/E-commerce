import { createSlice } from '@reduxjs/toolkit';
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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
        initializeTimer: (state, action) => {
            state.days = action.payload.days;
            state.hours = action.payload.hours;
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
        }
    }
});

export const { setTimer, initializeTimer } = countdownSlice.actions;

export const fetchTimerFromFirestore = () => async (dispatch) => {
    const timerDocRef = doc(db, "countdown", "timer");
    const timerDoc = await getDoc(timerDocRef);

    if (timerDoc.exists()) {
        dispatch(initializeTimer(timerDoc.data()));
    } else {
        // Timer does not exist in Firestore, so don't initialize it
        console.warn('Timer does not exist in Firestore. Please initialize it manually.');
    }
};

export const updateTimerInFirestore = (timer) => async () => {
    await setDoc(doc(db, "countdown", "timer"), timer, { merge: true });
};

export default countdownSlice.reducer;
