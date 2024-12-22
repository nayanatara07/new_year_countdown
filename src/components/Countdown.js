import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`January 1, 2025 00:00:00`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center mt-16 text-white animate-fadeIn">
      <h2 className="text-3xl font-semibold mb-6">Countdown to New Year 2025</h2>
      <div className="flex justify-center space-x-6">
        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          {timeLeft.days || 0}d
        </div>
        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          {timeLeft.hours || 0}h
        </div>
        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          {timeLeft.minutes || 0}m
        </div>
        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary px-6 py-4 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          {timeLeft.seconds || 0}s
        </div>
      </div>
    </div>
  );
};

export default Countdown;
