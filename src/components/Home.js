import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './App.css'; // Import the CSS file

function Home() {
  const navigate = useNavigate();

  const handleViewCalendar = () => {
    console.log("View Calendar button clicked");
  };

  const handleStartWorkout = () => {
    navigate('/start-workout');
  };

  return (
    <div className="container">
      <h1 className="title">Hello World!</h1>
      <div className="buttons">
        <button onClick={handleViewCalendar}>View History</button>
        <button onClick={handleStartWorkout}>Start Workout</button>
      </div>
    </div>
  );
}

export default Home;
