import React, { useEffect, useState } from "react";
import "./style.css";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimeId] = useState(0);
  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      intervalId = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);

      setTimeId(intervalId);
    } else {
      clearInterval(timerId);
    }
  }, [startTimer]);
  return (
    <div className="container">
      <div className="time">{time}</div>
      <div className="button-wrap">
        <button
          className={`button btn-start ${startTimer && "disable"}`}
          onClick={() => setStartTimer(true)}
        >
          Start
        </button>
        <button
          className={`button btn-stop ${!startTimer && "disable"}`}
          onClick={() => setStartTimer(false)}
        >
          Stop
        </button>
        <button
          className="button btn-reset"
          onClick={() => {
            setTime(0);
            setStartTimer(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
