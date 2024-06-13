// import React from 'react';



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import StartWorkout from './StartWorkout';
import AddedExercises from './AddedExercises'; // Import the AddedExercises component

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-workout" element={<StartWorkout />} />
          <Route path="/added-exercises" element={<AddedExercises />} /> {/* Route for AddedExercises component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import StartWorkout from './StartWorkout';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/start-workout" element={<StartWorkout />} />
//           {/* <Route path="/added-exercises" element={<AddedExercises />} /> /*{path="/AddedExercises.js"} */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import React, { Component } from 'react';
// // import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';

// class App extends Component {
//     handleViewCalendar = () => {
//         // Handle view calendar button click
//         console.log("View Calendar button clicked");
//         // Navigate to calendar page or display calendar component
//     };

//     handleStartWorkout = () => {
//         // Handle start workout button click
//         console.log("Start Workout button clicked");
//         // Navigate to start workout page or display start workout component
//     };



//     render(){
//         return (
//             <div>
//                 <h1 className="title">Hello World!</h1>
//                 <div className="buttons">
//                       <button onClick={this.handleViewCalendar}>View Calendar</button>
//                       <button onClick={this.handleStartWorkout}>Start Workout</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;