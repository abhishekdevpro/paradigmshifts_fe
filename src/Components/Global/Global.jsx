// import React from 'react';
// import logo1 from './images/logo1.jpg'
// import logo2 from './images/logo2.png'
// import logo3 from './images/log3.png'
// import logo4 from './images/logo4.png'
// import logo5 from './images/logo5.jpg'
// import logo6 from './images/logo6.png'
// import logo7 from './images/logo7.png'

// const GlobalPartners = () => {
//   const partners = [
//     { name: 'AEX', image: logo1 },
//     { name: 'PayPal', image: logo2 },
//     { name: 'HUI', image: logo3 },
//     { name: 'Dream11', image: logo4 },
//     { name: 'PhonePE', image: logo5 },
//     { name: 'IB', image: logo6 },
//     { name: 'HDFC', image: logo7 },
   
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12 relative">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             We Work with some of the Best - Globally
//           </h2>
//           <div className="absolute w-56 h-px bg-black bg-opacity-80 left-1/2 transform -translate-x-1/2 -top-6"></div>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//           {partners.map((partner, index) => (
//             <div 
//               key={index} 
//               className={`flex items-center justify-center p-4 ${
//                 index < partners.length - 5 ? 'border-b border-gray-300' : ''
//               }`}
//             >
//               <img 
//                 src={partner.image} 
//                 alt={partner.name} 
//                 className="max-w-full h-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalPartners;
import React from 'react';
import logo1 from './images/logo1.jpg';
import logo2 from './images/logo2.png';
import logo3 from './images/log3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.jpg';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';
import logo8 from './images/logo8.png';

const GlobalPartners = () => {
  const partners = [
    { name: 'AEX', image: logo1 },
    { name: 'PayPal', image: logo2 },
    { name: 'HUI', image: logo3 },
    { name: 'Dream11', image: logo4 },
    { name: 'PhonePE', image: logo5 },
    { name: 'IB', image: logo6 },
    { name: 'HDFC', image: logo7 },
    { name: 'HDFC', image: logo8 },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            We Work with Some of the Best - Globally
          </h2>
          <div className="absolute w-64 h-px bg-gray-800 left-1/2 transform -translate-x-1/2 -top-6"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
