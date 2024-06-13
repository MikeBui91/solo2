import React, { Component } from 'react';
import './App.css';

class App extends Component {
    handleViewCalendar = () => {
        // Handle view calendar button click
        console.log("View Calendar button clicked");
        // Navigate to calendar page or display calendar component
    };

    handleStartWorkout = () => {
        // Handle start workout button click
        console.log("Start Workout button clicked");
        // Navigate to start workout page or display start workout component
    };



    render(){
        return (
            <div>
                <h1 className="title">Hello World!</h1>
                <div className="buttons">
                      <button onClick={this.handleViewCalendar}>View Calendar</button>
                      <button onClick={this.handleStartWorkout}>Start Workout</button>
                </div>
            </div>
        )
    }
}

export default App;