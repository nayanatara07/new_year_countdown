import React, { useState } from 'react';

const wishes = [
  "May this New Year bring you joy, success, and happiness!",
  "Wishing you a year filled with love and laughter!",
  "Cheers to new beginnings and endless opportunities!",
  "May your dreams come true in 2024!",
];

const Wishes = () => {
  const [wish, setWish] = useState(wishes[0]);

  const changeWish = () => {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setWish(randomWish);
  };

  return (
    <div className="text-center mt-16 text-white animate-fadeIn">
      <p className="text-xl font-semibold mb-4">{wish}</p>
      <button 
        onClick={changeWish} 
        className="px-8 py-4 bg-highlight text-white rounded-full shadow-xl hover:bg-primary transform transition duration-300 hover:scale-105">
        New Wish
      </button>
    </div>
  );
};

export default Wishes;
