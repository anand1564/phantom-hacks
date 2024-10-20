import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer flex flex-col items-center justify-center p-6">
      <hr className="border-orange-600 my-4"/>
      <h2 className='text-4xl font-bold text-orange-500 mb-4'>Countdown to Halloween</h2>
      <div className="timer-container grid grid-cols-4 gap-6 text-center text-white bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
        <div className="time flex flex-col items-center">
          <h3 className="text-5xl font-bold">{days}</h3>
          <p className="text-xl">Days</p>
        </div>
        <div className="time flex flex-col items-center">
          <h3 className="text-5xl font-bold">{hours}</h3>
          <p className="text-xl">Hours</p>
        </div>
        <div className="time flex flex-col items-center">
          <h3 className="text-5xl font-bold">{minutes}</h3>
          <p className="text-xl">Minutes</p>
        </div>
        <div className="time flex flex-col items-center">
          <h3 className="text-5xl font-bold">{seconds}</h3>
          <p className="text-xl">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
