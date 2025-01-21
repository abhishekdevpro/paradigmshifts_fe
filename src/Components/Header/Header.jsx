// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faChevronDown, faHeart } from '@fortawesome/free-solid-svg-icons';
// import logo from "./logo.webp";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleDropdownHover = (dropdownName) => {
//     setActiveDropdown(dropdownName);
//   };

//   const handleDropdownLeave = () => {
//     setActiveDropdown(null);
//   };

//   const navItems = [
//     {
//       name: 'Solutions',
//       dropdownItems: ['Banking', 'ECom & Payments', 'Capital Markets & Wealth', 'Communities', 'Insurance', 'Gaming', 'Fintech', 'HR & Recruitment']
//     },
//     { name: 'Industries', dropdownItems: ['Finance', 'Healthcare', 'Technology', 'Education'] },
//     { name: 'About Us', dropdownItems: ['Our Story', 'Team', 'Careers'] },
//     { name: 'Resources', dropdownItems: ['Blog', 'Whitepapers', 'Case Studies'] },
//   ];

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-4">
//           <div className="flex items-center">
//             <img src={logo} alt="Paradigm Shift Logo" className="h-10 w-auto" />
//             <h1 className="ml-2 text-xl font-bold text-blue-900">Paradigm Shift</h1>
//           </div>
//           <nav className="hidden md:flex space-x-6 md:gap-4 font-bold">
//             {navItems.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() => handleDropdownHover(item.name)}
//                 onMouseLeave={handleDropdownLeave}
//               >
//                 <a href="#" className="text-gray-600 hover:text-blue-900 flex items-center">
//                   {item.name}
//                   <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
//                 </a>
//                 {activeDropdown === item.name && (
//                   <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
//                     {item.dropdownItems.map((dropdownItem) => (
//                       <a
//                         key={dropdownItem}
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         {dropdownItem}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300 shadow-lg">
//               LOGIN
//             </button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 shadow-lg">
//               CONTACT US
//             </button>
//             <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300 flex items-center shadow-lg">
//               <FontAwesomeIcon icon={faHeart} className="mr-2" />
//               JOIN COURSE
//             </button>
//           </div>
//           <button className="md:hidden text-gray-600" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={faBars} size="lg" />
//           </button>
//         </div>
//       </div>
//       {/* Mobile menu */}
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <nav className="px-4 pt-2 pb-4 space-y-2">
//           {navItems.map((item) => (
//             <div key={item.name}>
//               <a href="#" className="block text-gray-600 hover:text-blue-900">{item.name}</a>
//               <div className="pl-4 mt-1 space-y-1">
//                 {item.dropdownItems.map((dropdownItem) => (
//                   <a
//                     key={dropdownItem}
//                     href="#"
//                     className="block text-sm text-gray-500 hover:text-blue-900"
//                   >
//                     {dropdownItem}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300 mt-2 flex items-center shadow-lg">
//             <FontAwesomeIcon icon={faHeart} className="mr-2" />
//             JOIN COURSE
//           </button>
//           <button className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 mt-2 shadow-lg">
//             CONTACT US
//           </button>
//           <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300 mt-2 shadow-lg">
//             LOGIN
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownHover = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "About", href: "/aboutus" },
    { name: "Partner with Us", href: "#" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Paradigm Shift Logo" className="h-8 w-auto" />
          <h1 className="ml-2 text-lg font-bold text-gray-800">
            Paradigm Shift
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-teal-600 font-medium text-lg"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300">
            Sign In / Sign Up
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
            Our Clients
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        <nav className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="block  text-gray-700 hover:text-teal-600 font-medium"
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300">
            Sign In / Sign Up
          </button>
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
            Our Clients
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
