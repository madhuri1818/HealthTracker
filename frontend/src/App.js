import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/NavBar';
import AddWorkout from './components/AddWorkout';
// import Logout from './components/Logout';
// import DeleteWorkout from './components/DeleteWorkout';
// import EditWorkout from './components/EditWorkout';
import ViewWorkout from './components/ViewWorkout';
import About from './components/About'
import Contact from './components/Contact'
// import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDetailsPage from './components/UserDetailsPage';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/view-workout" element={<ViewWorkout />} />
          <Route path="/add-workout" element={<AddWorkout />} />
          {/* <Route path ="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/logout" element={<Logout />}/> */}
          <Route path ="/user" element={<UserDetailsPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
