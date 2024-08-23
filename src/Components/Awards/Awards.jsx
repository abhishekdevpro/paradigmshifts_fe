import React from 'react';
import img2 from './img/2.png';
import imgForbes from './img/forbes-1.webp';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';

const AwardsAndCertificates = () => {
  const awards = [
    { image: img2, title: 'Technology Fast 50 2023 India' },
    { image: imgForbes, title: 'Forbes Asia 100 To Watch' },
  ];

  const certificates = [
    { image: img3, title: 'Technology Fast 50 2023 India' },
    { image: img4, title: 'Technology Fast 50 2023 India' },
    { image: img5, title: 'Technology Fast 50 2023 India' },
    { image: img6, title: 'Technology Fast 50 2023 India' },
  ];

  const AwardItem = ({ image, title }) => (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center p-4 mb-4">
        <img src={image} alt={title} className="max-w-full max-h-full" />
      </div>
      <h3 className="text-center text-sm">{title}</h3>
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & Certificates
          </h2>
          <div className="absolute w-56 h-px bg-black bg-opacity-80 left-1/2 transform -translate-x-1/2 -top-6"></div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 lg:pr-8 lg:border-r border-gray-300">
              {awards.map((award, index) => (
                <AwardItem key={index} {...award} />
              ))}
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificates.map((certificate, index) => (
                <AwardItem key={index} {...certificate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAndCertificates;
