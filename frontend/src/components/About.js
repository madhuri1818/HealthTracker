import React from 'react';
import aboutImage from './about.jpg'; 
import NavBar from './NavBar'
const About = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:w-1/2 flex justify-center items-center bg-blue-600">
            <img src={aboutImage} alt="Health Tracker" className="object-cover w-full h-full" />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Health Tracker</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Health Tracker! Our platform allows you to manage your fitness journey efficiently and effectively. 
              You can sign up, log in, and track your workouts every day. Add details such as workout name, duration, calories burned, 
              heartbeat, weight, and more.
            </p>
            <p className="text-gray-600 mb-4">
              Once you've added your workout information, you can view all your data in your personalized dashboard. 
              Your account is secure, and you can log out anytime. Join us today and take control of your health!
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Sign up and log in securely</li>
              <li>Add your daily workout details</li>
              <li>Track calories, duration, heartbeat, and weight</li>
              <li>View your workout history in your dashboard</li>
              <li>Log out with confidence knowing your data is secure</li>
            </ul>
            <p className="text-gray-600">
              Start your fitness journey with Health Tracker and achieve your health goals efficiently!
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
