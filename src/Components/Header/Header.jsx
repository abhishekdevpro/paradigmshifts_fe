import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.webp"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={logo} alt="Paradigm Shift Logo" className="h-10 w-auto" />
            <h1 className="ml-2 text-xl font-bold text-blue-900">Paradigm Shift</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">Process</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300">
              JOIN COURSE
            </button>
            <button className="text-red-500 hover:text-red-600">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </button>
          </div>

          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-blue-900">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-900">About</a>
          <a href="#" className="block text-gray-600 hover:text-blue-900">Process</a>
          <a href="#" className="block text-gray-600 hover:text-blue-900">Contact</a>
          <button className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300 mt-2">
            JOIN COURSE
          </button>
          <button className="w-full text-red-500 hover:text-red-600 mt-2">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;