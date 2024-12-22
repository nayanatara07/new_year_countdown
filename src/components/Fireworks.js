import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Fireworks = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000); // Start after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return show ? <Confetti width={window.innerWidth} height={window.innerHeight} /> : null;
};

export default Fireworks;
