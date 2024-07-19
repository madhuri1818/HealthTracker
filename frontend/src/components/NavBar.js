import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from './logo.png';
import pic from './p.webp';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClasses = (path) =>
    location.pathname === path
      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0"
      : "text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-gray-300 md:p-0";

  useEffect(() => {
    // Close the menu on route change
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-10 w-10 rounded-full"
            alt="Health Tracker Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Health Tracker
          </span>
        </Link>
      </div>
      <div className="hidden md:flex space-x-10 items-center ml-16">
        <Link to="/home" className={getLinkClasses("/home")}>
          Home
        </Link>
        <Link to="/about" className={getLinkClasses("/about")}>
          About
        </Link>
        <Link to="/view-workout" className={getLinkClasses("/view-workout")}>
          Dashboard
        </Link>
        <Link to="/contact" className={getLinkClasses("/contact")}>
          Contact
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/signup";
          }}
          className="text-white hover:text-gray-300"
        >
          Logout
        </button>
        <Link
          to="/user"
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <img
            className="w-8 h-8 rounded-full"
            src={pic}
            alt="User"
          />
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-blue-600 text-white p-4 rounded-md shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            <Link to="/home" className="hover:text-gray-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/view-workout" className="hover:text-gray-300" onClick={toggleMenu}>
              Dashboard
            </Link>
            <Link to="/contact" className="hover:text-gray-300" onClick={toggleMenu}>
              Contact
            </Link>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/signup";
              }}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
            <Link
              to="/user"
              className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 mt-4"
              onClick={toggleMenu}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={pic}
                alt="User"
              />
              <span className="ml-2">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
