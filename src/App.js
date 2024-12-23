import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Fireworks from './components/Fireworks';
import Wishes from './components/Wishes';
import './styles/index.css';
import Snowfall from 'react-snowfall';
const App = () => {
  return (
    <div className="App min-h-screen bg-background flex flex-col justify-center items-center relative overflow-hidden">
      <Snowfall color="white" snowflakeCount={200} />
      <Header />
      <Countdown />
      <Wishes />
      <Fireworks />
    </div>
  );
};

export default App;
