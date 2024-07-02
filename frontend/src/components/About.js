import React from 'react';
import Navbar from './NavBar';
import backgroundImage from './bg.jpg'; // Replace with your background image path

const About = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-screen flex flex-col" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto bg-opacity-90">
          <h1 className="text-3xl font-bold mb-4">About Health Tracker</h1>
          <p className="text-gray-700 mb-4">
            Health Tracker is a comprehensive web application designed to help users monitor and improve their health and wellness. Our goal is to provide an intuitive and user-friendly platform that enables individuals to track various health metrics, set goals, and gain insights into their overall well-being.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Track daily physical activities such as steps, distance, and calories burned.</li>
            <li>Monitor nutritional intake, including calories, macronutrients, and micronutrients.</li>
            <li>Log vital health metrics such as weight, blood pressure, and heart rate.</li>
            <li>Set personal health goals and track progress over time.</li>
            <li>Gain insights through comprehensive analytics and reports.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            At Health Tracker, our mission is to empower individuals to take control of their health and make informed decisions that lead to a healthier and happier life. We believe that by providing the right tools and resources, anyone can achieve their health goals and improve their quality of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
