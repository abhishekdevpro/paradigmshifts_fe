import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.webp';
import bannerVideo2 from './baner-video2.mp4';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  return (
    <header className="w-full relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={bannerVideo2} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 bg-white/50 shadow-md backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap items-center justify-between py-4">
            <div className="flex justify-between items-center w-full md:w-auto">
              <img src={logo} alt="Logo" className="w-auto h-12 md:h-16" />
              <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
            </div>

            <div
              className={`w-full md:flex md:w-auto transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 px-4">
                <li>
                  <a href="#" className="block py-2 text-gray-100 hover:text-gray-900 transition-colors duration-200">
                    Solutions <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    onClick={toggleIndustries}
                    className="block py-2 text-gray-100 hover:text-gray-900 transition-colors duration-200"
                  >
                    Industries <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </a>
                  <div
                    className={`absolute left-0 mt-2 w-full md:w-[800px] bg-white rounded-lg shadow-lg z-20 transition-all duration-300 ease-in-out ${
                      isIndustriesOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-6">
                      {[
                        { title: 'Banking', desc: 'Secure identity solutions for banks' },
                        { title: 'Communities', desc: 'Identity solutions for the digital generation' },
                        { title: 'Fintech', desc: 'Your shield against criminal activity' },
                        { title: 'eCom & Payments', desc: 'Simplifying online transactions' },
                        { title: 'Insurance', desc: 'Trustworthy identity verification for insurers' },
                        { title: 'HR & Recruitment', desc: 'Streamlined identity verification for hiring' },
                        { title: 'Capital Markets & Wealth', desc: 'Identity solutions for financial markets' },
                        { title: 'Gaming', desc: 'Identity solutions for gaming industry' },
                      ].map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block p-4 text-gray-100 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                          <p className="text-sm mt-1">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-100 hover:text-gray-900 transition-colors duration-200">
                    About Us <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-gray-100 hover:text-gray-900 transition-colors duration-200">
                    Resources <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </a>
                </li>
              </ul>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 md:items-center">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 border border-gray-300 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>Login</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-left text-white">
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">Prevent Doubt,<br />Foster Trust</h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">USA’s leading drug testing & Rehab Company</p>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 px-4 text-xs sm:text-sm md:text-base text-center text-white font-medium shadow-md flex flex-wrap justify-center items-center space-x-2">
        <span>KYC</span>
        <span className="text-red-500">●</span>
        <span>Drug Test</span>
        <span className="text-red-500">●</span>
        <span>Digital Documentations</span>
        <span className="text-red-500">●</span>
        <span>Privacy & Consent</span>
        <span className="text-red-500">●</span>
        <span>AI Enabled Solutions</span>
        <span className="text-red-500">●</span>
        <span>Rehab Sessions</span>
      </div>
    </header>
  );
};

export default Header;
