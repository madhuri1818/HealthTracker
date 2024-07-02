import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import bg from './bgg.jpg'; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password })
      localStorage.setItem("userId", response.data.userId)
      console.log(localStorage.getItem("userId"))
      toast.success('Login Success');
      setTimeout(() => {
        window.location.href = "/home";
      }, 3000); 
    } catch (err) {
      console.error(err);
      setError("Invalid email or password"); 
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Background image section */}
      <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
      {/* Login form section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message if exists */}
            <div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* ToastContainer for displaying success message */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default Login;
