// import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// const ProgramSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

  // const programs = [
  //   {
  //     title: 'Workplace Development Programs',
  //     description: 'We provide programs that help build strong work ethics and practical skills within organizations, preparing employees for greater responsibilities and career growth.',
  //     icon: '👨‍💻',
  //     hoverColor: 'hover:bg-blue-500',
  //   },
  //   {
  //     title: 'Industry Collaboration Opportunities',
  //     description: 'Our Private-Sector Participation Scheme allows companies to collaborate with us for skills development initiatives, aligning workforce training with current industry needs.',
  //     icon: '🏢',
  //     hoverColor: 'hover:bg-red-500',
  //   },
  //   {
  //     title: 'Career Advancement Services',
  //     description: 'We offer job assessments and coaching to help employees find suitable roles and advance their careers, ensuring they are matched with opportunities that fit their skills and aspirations.',
  //     icon: '📈',
  //     hoverColor: 'hover:bg-green-500',
  //   },
  //   {
  //     title: 'Employee Retention Support',
  //     description: 'Our case management services assist employees with post-placement challenges, providing support to ensure long-term job retention and career success.',
  //     icon: '🤝',
  //     hoverColor: 'hover:bg-purple-500',
  //   },
  //   {
  //     title: 'Leadership Training Programs',
  //     description: 'We offer training programs designed to develop leadership skills and management capabilities for employees at all levels.',
  //     icon: '🧑‍🏫',
  //     hoverColor: 'hover:bg-yellow-500',
  //   },
  //   {
  //     title: 'Technical Skills Workshops',
  //     description: 'Our workshops provide hands-on experience and knowledge in the latest technologies and tools relevant to various industries.',
  //     icon: '🔧',
  //     hoverColor: 'hover:bg-teal-500',
  //   },
  //   {
  //     title: 'Networking Events',
  //     description: 'We organize events that provide opportunities for professionals to connect, share ideas, and collaborate on projects.',
  //     icon: '🤝',
  //     hoverColor: 'hover:bg-orange-500',
  //   },
  // ];

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : programs.length - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex < programs.length - 1 ? prevIndex + 1 : 0));
//   };

//   return (
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//         >
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2"
//             >
//               <div className={`p-6 h-full flex flex-col justify-between ${program.hoverColor} bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out`}>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
//                   <p className="mb-4 text-gray-600">{program.description}</p>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-4xl">{program.icon}</span>
//                   <span className="font-bold">»</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 transition-all duration-200"
//       >
//         <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 transition-all duration-200"
//       >
//         <ChevronRightIcon className="w-6 h-6 text-gray-600" />
//       </button>
//     </div>
//   );
// };

// export default ProgramSlider;

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const ProgramSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const programs = [
    {
      title: 'Workplace Development Programs',
      description: 'We provide programs that help build strong work ethics and practical skills within organizations, preparing employees for greater responsibilities and career growth.',
      icon: '👨‍💻',
      hoverColor: 'hover:bg-blue-500',
    },
    {
      title: 'Industry Collaboration Opportunities',
      description: 'Our Private-Sector Participation Scheme allows companies to collaborate with us for skills development initiatives, aligning workforce training with current industry needs.',
      icon: '🏢',
      hoverColor: 'hover:bg-red-500',
    },
    {
      title: 'Career Advancement Services',
      description: 'We offer job assessments and coaching to help employees find suitable roles and advance their careers, ensuring they are matched with opportunities that fit their skills and aspirations.',
      icon: '📈',
      hoverColor: 'hover:bg-green-500',
    },
    {
      title: 'Employee Retention Support',
      description: 'Our case management services assist employees with post-placement challenges, providing support to ensure long-term job retention and career success.',
      icon: '🤝',
      hoverColor: 'hover:bg-purple-500',
    },
    {
      title: 'Leadership Training Programs',
      description: 'We offer training programs designed to develop leadership skills and management capabilities for employees at all levels.',
      icon: '🧑‍🏫',
      hoverColor: 'hover:bg-yellow-500',
    },
    {
      title: 'Technical Skills Workshops',
      description: 'Our workshops provide hands-on experience and knowledge in the latest technologies and tools relevant to various industries.',
      icon: '🔧',
      hoverColor: 'hover:bg-teal-500',
    },
    {
      title: 'Networking Events',
      description: 'We organize events that provide opportunities for professionals to connect, share ideas, and collaborate on projects.',
      icon: '🤝',
      hoverColor: 'hover:bg-orange-500',
    },
    {
      title: 'Leadership Training Programs',
      description: 'We offer training programs designed to develop leadership skills and management capabilities for employees at all levels.',
      icon: '🧑‍🏫',
      hoverColor: 'hover:bg-yellow-500',
    },
    {
      title: 'Technical Skills Workshops',
      description: 'Our workshops provide hands-on experience and knowledge in the latest technologies and tools relevant to various industries.',
      icon: '🔧',
      hoverColor: 'hover:bg-teal-500',
    },
    {
      title: 'Networking Events',
      description: 'We organize events that provide opportunities for professionals to connect, share ideas, and collaborate on projects.',
      icon: '🤝',
      hoverColor: 'hover:bg-orange-500',
    },
    {
      title: 'Leadership Training Programs',
      description: 'We offer training programs designed to develop leadership skills and management capabilities for employees at all levels.',
      icon: '🧑‍🏫',
      hoverColor: 'hover:bg-yellow-500',
    },
    {
      title: 'Technical Skills Workshops',
      description: 'Our workshops provide hands-on experience and knowledge in the latest technologies and tools relevant to various industries.',
      icon: '🔧',
      hoverColor: 'hover:bg-teal-500',
    },
    {
      title: 'Networking Events',
      description: 'We organize events that provide opportunities for professionals to connect, share ideas, and collaborate on projects.',
      icon: '🤝',
      hoverColor: 'hover:bg-orange-500',
    },
  ];

  const totalPrograms = programs.length;

  const handlePrev = () => {
    if (isTransitioning) return;

    setActiveIndex((prevIndex) => (prevIndex - 1 + totalPrograms) % totalPrograms);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPrograms);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'duration-0'}`}
          style={{ transform: `translateX(-${activeIndex * (100 / totalPrograms)}%)` }}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2"
            >
              <div className={`p-6 h-full flex flex-col justify-between ${program.hoverColor} bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out`}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="mb-4 text-gray-600">{program.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">{program.icon}</span>
                  <span className="font-bold">»</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 transition-all duration-200"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 transition-all duration-200"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default ProgramSlider;
