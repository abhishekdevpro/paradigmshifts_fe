import React from 'react';
import AEX from './img/AEX.jpg';
import PayPal from './img/paypal.jpg';
import HUI from './img/HUI.jpg';
import Dream11 from './img/dream11.jpg';
import PhonePE from './img/PHonePE.jpg';
import IB from './img/IB.jpg';
import HDFC from './img/HDFC.jpg';
import AB from './img/AB.jpg';
import TAIG from './img/TAIG.jpg';
import Zomato from './img/zomato.jpg';

const GlobalPartners = () => {
  const partners = [
    { name: 'AEX', image: AEX },
    { name: 'PayPal', image: PayPal },
    { name: 'HUI', image: HUI },
    { name: 'Dream11', image: Dream11 },
    { name: 'PhonePE', image: PhonePE },
    { name: 'IB', image: IB },
    { name: 'HDFC', image: HDFC },
    { name: 'AB', image: AB },
    { name: 'TAIG', image: TAIG },
    { name: 'Zomato', image: Zomato },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Work with some of the Best - Globally
          </h2>
          <div className="absolute w-56 h-px bg-black bg-opacity-80 left-1/2 transform -translate-x-1/2 -top-6"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center p-4 ${
                index < partners.length - 5 ? 'border-b border-gray-300' : ''
              }`}
            >
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
