// import React from 'react';
// import logo from './logo.webp'
// import footerlogo from './footer-logo.jpg'

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#D9D9D9] py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {/* Logo */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <img src={logo} alt="Logo" className="w-48" />
//           </div>
//           <img src={footerlogo} alt="" />
//           {/* Corporate Links */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-xl font-medium text-[#040035] mb-4">Corporate</h3>
//             <ul className="space-y-2">
//               {['Privacy Policy', 'Terms of Use', 'SSS Agreement', 'Contact Us'].map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-sm text-[#040035] hover:underline">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-xl font-medium text-[#040035] mb-4">Quick links</h3>
//             <ul className="grid grid-cols-2 gap-2">
//               {['Company', 'Careers', 'Life', 'Team Overview', 'Partners'].map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-sm text-[#040035] hover:underline">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter Signup */}
//           <div className="w-full md:w-1/4">
//             <h3 className="text-xl font-medium text-[#040035] mb-4">Signup for our newsletter</h3>
//             <form>
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="mr-2" />
//                   <span className="text-sm">Trust Issues (HR)</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input type="checkbox" className="mr-2" />
//                   <span className="text-sm">Trust Issues (FS)</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-[#040035] mb-2">
//                   Email*
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-3 py-2 rounded-full"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#040035] text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300"
//               >
//                 Signup
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import logo from './logo.webp';
import logo2 from './logodb.png'
const Footer = () => {
  return (
    <footer className="w-full bg-[#D9D9D9] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Footer Logo */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-start">
            <img src={logo} alt="Logo" className="w-48 mb-4" />
            <img src={logo2} alt="Footer Logo" className="w-32" />
          </div>

          {/* Corporate Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-medium text-[#040035] mb-4">Corporate</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Use', 'SSS Agreement', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-[#040035] hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-medium text-[#040035] mb-4">Quick links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {['Company', 'Careers', 'Life', 'Team Overview', 'Partners'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-[#040035] hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-medium text-[#040035] mb-4">Signup for our newsletter</h3>
            <form>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Trust Issues (HR)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Trust Issues (FS)</span>
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#040035] mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 rounded-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#040035] text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
