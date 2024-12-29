import React, { useState } from "react";

const WishesBlog = () => {
  const [wishes, setWishes] = useState([
    "Wishing you a joyful New Year!",
    "May 2025 bring happiness and success!",
  ]);
  const [newWish, setNewWish] = useState("");

  // Function to add a new wish
  const addWish = () => {
    if (newWish.trim()) {
      setWishes([...wishes, newWish]);
      setNewWish("");
    }
  };

  // Function to remove a wish
  const removeWish = (index) => {
    setWishes(wishes.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">🎉 Wishes Blog 🎉</h3>

      {/* Wishes List */}
      <div className="max-h-80 overflow-y-auto space-y-4">
        {wishes.map((wish, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <p className="text-gray-800">{wish}</p>
            <button
              onClick={() => removeWish(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      {/* Add New Wish */}
      <div className="mt-4">
        <input
          type="text"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Write your wish..."
          className="w-full px-4 py-2 border rounded mb-2"
        />
        <button
          onClick={addWish}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Wish
        </button>
      </div>
    </div>
  );
};

export default WishesBlog;
