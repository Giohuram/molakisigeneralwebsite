"use client";

import React, { useState, useEffect } from 'react';

const PartnerCarousel: React.FC = () => {
  const logos = [
    '/images/logo1.png', // Replace with actual paths to logos
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png',
    '/images/logo9.png',
    '/images/logo10.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 5; // Number of logos visible at one time

  // Autoplay logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < logos.length - maxVisible) {
          return prevIndex + 1;
        } else {
          // Only reset to 0 when the end of the entire array is reached
          return prevIndex + 1 < logos.length ? prevIndex + 1 : 0;
        }
      });
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [logos.length, maxVisible]);

  const nextSlide = () => {
    if (currentIndex < logos.length - maxVisible) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 sm:text-3xl">
          Ils nous font confiance
        </h2>
        <div className="mt-10 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / maxVisible) * 100}%)`,
              width: `${(logos.length / maxVisible) * 100}%`,
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-none w-1/5 flex justify-center items-center p-4"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none z-10 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= logos.length - maxVisible}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none z-10 ${
              currentIndex >= logos.length - maxVisible ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
