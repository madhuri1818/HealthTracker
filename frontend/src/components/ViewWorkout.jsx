import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from './WorkoutCard'; 
import bg from './bg.jpg';
import NavBar from './NavBar';
function ViewWorkout() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const response = await axios.get(`http://localhost:5000/api/workouts/${userId}`);
        console.log('response',response.data)
        setWorkouts(response.data)
      } catch (err) {
        console.error(err)
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <>
    <NavBar/>
    <div className="min-h-screen flex items-center justify-center relative bg-grey">
      {/* <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', filter: 'brightness(0.5)' }}></div> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Your Workouts</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ViewWorkout;
