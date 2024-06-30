import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimer } from "../../redux/countdownSlice";

const Countdown = () => {
  const Ref = useRef(null);
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.countdown);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
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

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      dispatch(
        setTimer({
          days: days > 9 ? days : "0" + days,
          hours: hours > 9 ? hours : "0" + hours,
          minutes: minutes > 9 ? minutes : "0" + minutes,
          seconds: seconds > 9 ? seconds : "0" + seconds,
        })
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 176 * 24 * 60 * 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());

    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  }, []);

  return (
    <div className="text-center">
      <h2 className=" flex items-end gap-4 text-3xl max-md:text-lg max-sm:text-base font-bold">
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
