import React from 'react';

function AddedExercises() {
  const ExerciseList = []; // Replace with actual state or props holding added exercises
console.log(ExerciseList)
  return (
    <div>
      <h1>Added Exercises:</h1>
      <ul>
        {addedExercises.map(exercise => (
          <li key={exercise.id}>
            <strong>{exercise.name}</strong><br />
            {exercise.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddedExercises;
