import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
    <nav className="bg-blue-600 border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Health Tracker Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Health Tracker
            </span>
          </Link>
          <Link
            to="/user"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-auto md:hidden"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={`https://ui-avatars.com/api/?name=John+Doe&background=random&size=128`}
              alt="User"
            />
          </Link>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-600 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-600">
            <li>
              <Link
                to="/home"
                className={`block py-2 px-3 ${getLinkClasses("/home")}`}
                aria-current={location.pathname === "/home" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 ${getLinkClasses("/about")}`}
                aria-current={location.pathname === "/about" ? "page" : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/view-workout"
                className={`block py-2 px-3 ${getLinkClasses("/view-workout")}`}
                aria-current={location.pathname === "/view-workout" ? "page" : undefined}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 ${getLinkClasses("/contact")}`}
                aria-current={location.pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.clear(); 
                  window.location.href = "/signup"; 
                }}
                className="block w-full text-left py-2 px-3 text-white rounded border border-white hover:bg-light-blue-500 hover:text-white md:text-white md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-light-blue-500 dark:hover:bg-light-blue-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-3 md:order-2 rtl:space-x-reverse">
          <Link to="/user" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={`https://ui-avatars.com/api/?name=John+Doe&background=random&size=128`}
              alt="User"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
