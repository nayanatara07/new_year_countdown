import React from "react";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import WishesBlog from "./components/WishesBlog";
import Fireworks from "./components/Fireworks";
import "./styles/index.css";

const App = () => {
  return (
    <div className="App bg-gradient-to-br from-blue-500 to-purple-700 min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <Countdown />
          <Fireworks />
        </div>

        {/* Wishes Blog */}
        <div>
          <WishesBlog />
        </div>
      </div>
    </div>
  );
};

export default App;
