// // HeroSection.js
import bannerVideo2 from '../Header/baner-video2.mp4';
import BottomFooter from './BottomFooter';

const HeroSection = () => {
  return (
    <div 
    className="relative h-screen w-full overflow-hidden"
    >
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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[90%] px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Hello, I&apos;m Aria,
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold">
          Your Personal Wellness Companion!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg sm:text-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Individuals
            </button>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg sm:text-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Businesses
            </button>
          </div>
        </div>
        <BottomFooter />

        {/* Bottom Features */}
        
      </div>
    </div>
  );
};

export default HeroSection;