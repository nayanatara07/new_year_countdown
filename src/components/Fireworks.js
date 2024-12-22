import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Fireworks = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 1000); // Start fireworks 1 second after loading
  }, []);

  return (
    show && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} recycle={false} />
  );
};

export default Fireworks;
