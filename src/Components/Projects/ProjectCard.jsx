import React from 'react';

const ProjectCards = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute inset-0 w-full h-full'>
        <svg className='w-full h-full' viewBox="0 0 1440 320">
          <path fill="url(#gradient)" d="M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,138.7C420,128,480,128,540,138.7C600,149,660,171,720,186.7C780,203,840,213,900,202.7C960,192,1020,160,1080,138.7C1140,117,1200,107,1260,106.7C1320,107,1380,117,1410,122.7L1440,128L1440,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6ee7b7', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 ">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Upcoming Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* UltraAura Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="mb-6">
              <img 
                src="https://ultraaura.education/static/media/Ultra_Aura.cabb61de498b919d72f4.png" 
                alt="UltraAura Logo" 
                className="h-12 object-contain mb-6"
              />
              <div className="flex space-x-4 items-start ">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Experience personalized learning with our AI-enhanced online courses. Our platform offers
                  continuous access to a vast range of courses. AI-Powered Learning Experience Expert Trainers 
                  Certification and Continuous Access.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        {/* Nova Jobs Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
          <div className="mb-6">
            <img 
              src="https://novajobs.us/static/media/NovaUS.649f79957e5090a75022.png" 
              alt="Nova Jobs Logo" 
              className="h-12 object-contain mb-6"
            />
            <div className="flex space-x-4 items-start">
              <div className="w-8 h-8 flex-shrink-0">
                <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                Revolutionize your job search with AI-driven solutions. Our platform offers advanced tools
                for both job seekers and employers to streamline recruitment and accelerate career advancement.
                AI-Powered Job Solutions Effortless Recruitment Process Versatile Job Search.
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ProjectCards;