import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PartnershipsAndPrograms = () => {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Paradigm Shift</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-teal-900 sm:text-5xl lg:text-6xl">
            Partnerships and Programs
          </h1>
        </div>
        
        <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Paradigm Shift is seeking collaborations with individuals and organizations interested in supporting our
          advanced drug testing and rehabilitation programs. We welcome sponsors for our initiatives and training
          facilities, with contributions being duly recognized. For more information on sponsorship and our
          comprehensive support programs, please reach out to us.
        </p>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-teal-500" />
              <h3 className="ml-4 text-2xl font-bold text-teal-900">Join Our Team</h3>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Become part of our mission to create healthier, drug-free workplaces and make a meaningful impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-teal-500" />
              <h3 className="ml-4 text-2xl font-bold text-teal-900">Quick Fundraising</h3>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Contribute now to make an immediate difference in fostering a safer work environment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-teal-500" />
              <h3 className="ml-4 text-2xl font-bold text-teal-900">Partner with Us</h3>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Collaborate with us to build a future of health and safety. Your support will drive transformative opportunities and create a lasting impact. Together, we can shape a positive work environment and set new standards for employee well-being. Your partnership is essential in achieving our vision. Let's make a difference together and turn aspirations into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsAndPrograms;
