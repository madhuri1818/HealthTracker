import React from 'react';
import contactImage from './contact.jpg'; 
import NavBar from './NavBar';
const Contact = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:w-1/2 flex justify-center items-center bg-blue-600">
            <img src={contactImage} alt="Contact Us" className="object-cover w-full h-full" />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              We would love to hear from you! If you have any questions, suggestions, or feedback, please reach out to us. 
              Our team is here to assist you with anything you need.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
