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
    <div className="text-center mt-8">
      <p className="text-xl font-semibold">{wish}</p>
      <button 
        onClick={changeWish} 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
      >
        New Wish
      </button>
    </div>
  );
};

export default Wishes;
