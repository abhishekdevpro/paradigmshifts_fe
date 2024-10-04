// HeroSection.js
import bannerVideo2 from '../Header/baner-video2.mp4';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-left text-white">
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
          Prevent Doubt,<br />Foster Trust
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
          USA’s leading drug testing & Rehab Company
        </p>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 px-4 text-5xl sm:text-sm md:text-base text-center text-white font-bold shadow-md flex flex-wrap justify-center items-center space-x-2">
        {/* <span className='text-2xl'>KYC</span> */}
        <span className="text-red-500">●</span>
        <span className='text-2xl'>Drug Test</span>
        <span className="text-red-500">●</span>
        <span className='text-2xl'>Digital Documentations</span>
        <span className="text-red-500">●</span>
        <span className='text-2xl'>Privacy & Consent</span>
        <span className="text-red-500">●</span>
        <span className='text-2xl'>AI Enabled Solutions</span>
        <span className="text-red-500">●</span>
        <span className='text-2xl'>Rehab Sessions</span>
      </div>
    </div>
  );
};

export default HeroSection;
