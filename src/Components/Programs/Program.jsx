// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// const PartnershipsAndPrograms = () => {
//   return (
//     <div className="bg-gradient-to-r from-teal-100 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center">
//           <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Paradigm Shift</h2>
//           <h1 className="mt-2 text-4xl font-extrabold text-teal-900 sm:text-5xl lg:text-6xl">
//             Partnerships and Programs
//           </h1>
//         </div>

//         <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
//           Paradigm Shift is seeking collaborations with individuals and organizations interested in supporting our
//           advanced drug testing and rehabilitation programs. We welcome sponsors for our initiatives and training
//           facilities, with contributions being duly recognized. For more information on sponsorship and our
//           comprehensive support programs, please reach out to us.
//         </p>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-teal-500" />
//               <h3 className="ml-4 text-2xl font-bold text-teal-900">Join Our Team</h3>
//             </div>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               Become part of our mission to create healthier, drug-free workplaces and make a meaningful impact.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-teal-500" />
//               <h3 className="ml-4 text-2xl font-bold text-teal-900">Quick Fundraising</h3>
//             </div>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               Contribute now to make an immediate difference in fostering a safer work environment.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-teal-500" />
//               <h3 className="ml-4 text-2xl font-bold text-teal-900">Partner with Us</h3>
//             </div>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               Collaborate with us to build a future of health and safety. Your support will drive transformative opportunities and create a lasting impact. Together, we can shape a positive work environment and set new standards for employee well-being. Your partnership is essential in achieving our vision. Let's make a difference together and turn aspirations into reality.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnershipsAndPrograms;
import { CheckCircle } from "lucide-react";

const PartnershipsAndPrograms = () => {
  const programs = [
    {
      title: "Department of Corrections",
      description:
        "Become part of our mission to create healthier, drug-free workplaces and make a meaningful impact.",
    },
    {
      title: "Department of Behavioral Health",
      description:
        "Contribute now to make an immediate difference in fostering a safe work.",
    },
    {
      title: "Kids at Risk",
      description:
        "Collaborate with us to build a future of health and safety. Your support will drive transformative opportunities and create a lasting impact.",
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-teal-100 to-teal-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-600 mb-2">
            PARADIGM SHIFT
          </h2>
          <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
            Partnerships and Programs
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm font-medium md:text-base">
            Paradigm Shift is dedicated to creating positive change within the
            community. Our focus is on offering impactful programs that help
            individuals overcome challenges, grow, and thrive. We believe in
            providing the necessary support and resources to empower people,
            fostering a stronger and more resilient community. Our work is
            driven by a deep commitment to service, and we strive to make a
            lasting difference in the lives of those we serve.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-md font-medium">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipsAndPrograms;
