// // HeroSection.js
import bannerVideo2 from '../Header/baner-video2.mp4';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
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
        {/* Overlay with better gradient */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Hello, I&apos;m Aria,
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold">
            Your Personal Career Advisor!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg sm:text-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Employee
            </button>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg sm:text-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Company HR
            </button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm sm:text-base font-medium">Drug and Alcohol</span>
              </div>
              
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm sm:text-base font-medium">Rehabilitation and Retention</span>
              </div>
              
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-sm sm:text-base font-medium">Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;