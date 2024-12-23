import React, { useState } from 'react';

const Wishes = () => {
  const [wishes, setWishes] = useState(["Happy New Year!"]);
  const [newWish, setNewWish] = useState("");

  const addWish = () => {
    if (newWish.trim()) {
      setWishes([...wishes, newWish]);
      setNewWish("");
    }
  };

  return (
    <div className="text-center mt-8">
      <h3 className="text-xl font-semibold mb-4">Your Wishes</h3>
      <ul className="space-y-2">
        {wishes.map((wish, index) => (
          <li key={index} className="text-lg">{wish}</li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Write your wish..."
          className="border rounded px-4 py-2 mr-2"
        />
        <button
          onClick={addWish}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Wish
        </button>
      </div>
    </div>
  );
};

export default Wishes;
