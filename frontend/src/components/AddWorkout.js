import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar'; 
import bg from './bg.jpg'; 
function AddWorkout() {
  const [formData, setFormData] = useState({
    date: '',
    exercise: '',
    duration: '',
    calories: '',
    distance: '',
    heartRate: '',
    weight: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      await axios.post(
        // 'http://localhost:5000/api/workouts'
        'https://healthtracker-2.onrender.com/api/workouts', {
        userId: userId,
        ...formData
      });
      toast.success('Workout added successfully', { autoClose: 7000 });
      window.location.href = '/view-workout';
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <NavBar className="visible-navbar" /> 
      <div className="min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', filter: 'brightness(0.5)' }}></div>
        <div className="relative z-10 max-w-md w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 rounded-md shadow-lg bg-white bg-opacity-75">
          <ToastContainer />
          <h2 className="text-2xl font-bold mb-4 text-center">Add Workout</h2>
          <form onSubmit={handleSubmit}>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <input type="text" name="exercise" value={formData.exercise} onChange={handleChange} placeholder="Exercise" className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <input type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration (minutes)" className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <input type="number" name="calories" value={formData.calories} onChange={handleChange} placeholder="Calories Burned" className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <input type="number" name="distance" value={formData.distance} onChange={handleChange} placeholder="Distance (if applicable)" className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} placeholder="Heart Rate (if applicable)" className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (if applicable)" className="block w-full px-4 py-2 mb-4 border border-gray-400 rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Add Workout</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddWorkout;
