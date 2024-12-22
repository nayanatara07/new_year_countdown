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
    <div className="text-center mt-8">
      <h2 className="text-2xl font-semibold">Countdown to New Year 2025</h2>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="text-xl font-bold">{timeLeft.days || 0}d</div>
        <div className="text-xl font-bold">{timeLeft.hours || 0}h</div>
        <div className="text-xl font-bold">{timeLeft.minutes || 0}m</div>
        <div className="text-xl font-bold">{timeLeft.seconds || 0}s</div>
      </div>
    </div>
  );
};

export default Countdown;
