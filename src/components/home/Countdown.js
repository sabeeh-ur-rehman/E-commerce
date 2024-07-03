import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimer, fetchTimerFromFirestore, updateTimerInFirestore } from "../../redux/countdownSlice";

const Countdown = () => {
  const Ref = useRef(null);
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.countdown);

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (endTime) => {
    const { total, days, hours, minutes, seconds } = getTimeRemaining(endTime);
    if (total >= 0) {
      const timerValues = {
        days: days > 9 ? days : "0" + days,
        hours: hours > 9 ? hours : "0" + hours,
        minutes: minutes > 9 ? minutes : "0" + minutes,
        seconds: seconds > 9 ? seconds : "0" + seconds,
      };
      dispatch(setTimer(timerValues));
      dispatch(updateTimerInFirestore(timerValues));
    }
  };

  const clearTimer = (endTime) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    Ref.current = id;
  };

  useEffect(() => {
    const fetchAndStartTimer = async () => {
      await dispatch(fetchTimerFromFirestore());
      const deadline = new Date();
      deadline.setSeconds(
        deadline.getSeconds() +
          parseInt(timer.days) * 24 * 60 * 60 +
          parseInt(timer.hours) * 60 * 60 +
          parseInt(timer.minutes) * 60 +
          parseInt(timer.seconds)
      );
      clearTimer(deadline);
    };

    fetchAndStartTimer();

    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  }, [dispatch]);

  return (
    <div className="text-center">
      <h2 className="flex items-end gap-4 text-3xl max-md:text-lg max-sm:text-base font-bold">
        <div className="flex flex-col items-start">
          <span className="font-poppins font-medium text-xs">Days</span>
          {timer.days}
        </div>
        <span className="text-Secondary2">:</span>
        <div className="flex flex-col items-start">
          <span className="font-poppins font-medium text-xs">Hours</span>
          {timer.hours}
        </div>
        <span className="text-Secondary2">:</span>
        <div className="flex flex-col items-start">
          <span className="font-poppins font-medium text-xs">Minutes</span>
          {timer.minutes}
        </div>
        <span className="text-Secondary2">:</span>
        <div className="flex flex-col items-start">
          <span className="font-poppins font-medium text-xs">Seconds</span>
          {timer.seconds}
        </div>
      </h2>
    </div>
  );
};

export default Countdown;
