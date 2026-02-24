import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-blue-900">FaceRec</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#Features" className="hover:text-blue-600 transition">Features</a>
            <a href="#Pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#HowItWorks" className="hover:text-blue-600 transition">How It Works</a>
            <a href="#About" className="hover:text-blue-600 transition">About</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/Login" className="px-5 py-2 text-blue-600 font-semibold border border-blue-100 rounded-lg hover:bg-blue-50 transition">Sign In</Link>
            <button className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition">Get Started</button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          <a href="/Features" className="block text-gray-600">Features</a>
          <Link to="/Pricing" className="block text-gray-600">Pricing</Link>
          <button className="w-full text-center p-2 text-blue-600 border border-blue-100 rounded-lg">Sign In</button>
          <button className="w-full text-center p-2 bg-indigo-600 text-white rounded-lg">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;