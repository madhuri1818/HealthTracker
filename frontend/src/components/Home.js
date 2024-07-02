import React from "react";
import { Link } from "react-router-dom";
import bg from './bg.jpg';
import NavBar from "./NavBar";

function Home() {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          filter: 'brightness(0.5)', // Adjust brightness to dim the image
        }}
      />
      <div className="relative z-10 max-w-md w-full py-12 px-4 sm:px-6 lg:px-8 rounded-md shadow-lg bg-white bg-opacity-75">
        <div className="space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Health Tracker!</h2>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">You can add, edit, view, and delete your workouts using the links in the navigation bar.</p>
            <Link to="/add-workout">
              <button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                + Add Workout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;
