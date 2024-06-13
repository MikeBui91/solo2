


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StartWorkout() {
  const [exercises, setExercises] = useState([]);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(50); // Increase limit to fetch more exercises
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [addedExercises, setAddedExercises] = useState([]);

  useEffect(() => {
    loadExercises();
  }, [query]); // Load exercises on component mount and when query changes

  const loadExercises = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://wger.de/api/v2/exercise/?format=json&language=2&search=${query}&limit=${limit}&offset=${offset}`);
      const data = await response.json();
      setExercises(data.results); // Update exercises with new results
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      loadExercises(); // Fetch more exercises when scrolled to the bottom and not loading
    }
  };

  const handleSearch = () => {
    setOffset(0); // Reset offset on new search
    loadExercises(); // Load exercises based on new search query
  };

  const handleAddExercise = (exercise) => {
    console.log('added :', exercise, 'list:', addedExercises)
    setAddedExercises(prevExercises => [...prevExercises, exercise]);
  };

  return (
    <div style={{ height: '400px', overflowY: 'scroll' }} onScroll={handleScroll}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Link to="/added-exercises">
          <button style={{ marginRight: '10px' }}>View Workout</button>
        </Link>
      </div>
      <h1>Start Workout</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for exercises" 
      />
      <button onClick={handleSearch}>Search</button>
      <ul style={{ maxHeight: '350px', overflowY: 'auto', listStyleType: 'none', padding: '0', marginBottom: '0', borderTop: '1px solid #ccc' }}>
        {exercises.map(exercise => (
          <li key={exercise.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <strong>{exercise.name}</strong><br />
              {exercise.description}
            </div>
            <div>
              <button onClick={() => handleAddExercise(exercise)}>Add</button>
            </div>
          </li>
        ))}
        {loading && <li>Loading...</li>}
      </ul>
    </div>
  );
}

export default StartWorkout;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AddedExercises from './AddedExercises'; // Import the AddedExercises component

// function StartWorkout() {
//   const [exercises, setExercises] = useState([]);
//   const [query, setQuery] = useState('');
//   const [limit, setLimit] = useState(50); // Increase limit to fetch more exercises
//   const [offset, setOffset] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [addedExercises, setAddedExercises] = useState([]); // State to hold added exercises

//   useEffect(() => {
//     loadExercises();
//   }, [query]); // Load exercises on component mount and when query changes

//   const loadExercises = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://wger.de/api/v2/exercise/?format=json&language=2&search=${query}&limit=${limit}&offset=${offset}`);
//       const data = await response.json();
//       setExercises(data.results); // Update exercises with new results
//     } catch (error) {
//       console.error('Error fetching exercises:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleScroll = (event) => {
//     const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
//     if (scrollHeight - scrollTop === clientHeight && !loading) {
//       loadExercises(); // Fetch more exercises when scrolled to the bottom and not loading
//     }
//   };

//   const handleSearch = () => {
//     setOffset(0); // Reset offset on new search
//     loadExercises(); // Load exercises based on new search query
//   };

//   const handleAddExercise = (exercise) => {
//     setAddedExercises(prevExercises => [...prevExercises, exercise]);
//   };

//   return (
//     <div style={{ height: '400px', overflowY: 'scroll' }} onScroll={handleScroll}>
//       <h1>Start Workout</h1>
//       <input 
//         type="text" 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)} 
//         placeholder="Search for exercises" 
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul style={{ maxHeight: '350px', overflowY: 'auto', listStyleType: 'none', padding: '0', marginBottom: '0', borderTop: '1px solid #ccc' }}>
//         {exercises.map(exercise => (
//           <li key={exercise.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
//             <div>
//               <strong>{exercise.name}</strong><br />
//               {exercise.description}
//             </div>
//             <div>
//               <button onClick={() => handleAddExercise(exercise)}>Add</button>
//             </div>
//           </li>
//         ))}
//         {loading && <li>Loading...</li>}
//       </ul>
//       <Link to="/added-exercises">View Added Exercises</Link>
//     </div>
//   );
// }

// export default StartWorkout;
