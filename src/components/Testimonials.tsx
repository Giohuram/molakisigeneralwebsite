"use client"

import React, { useState } from 'react';

interface TestimonialProps {
  id?: string;
}

const Testimonials: React.FC<TestimonialProps> = ({ id }) => {
  const testimonials = [
    {
      name: 'Landry Muleka',
      comment:
        'Les cours offerts par Molakisi Services ont transformé mes compétences en anglais. Hautement recommandé !',
      location: 'Kinshasa, RDC',
    },
    {
      name: 'Exaucé Malaba',
      comment:
        'Des méthodes d\'enseignement exceptionnelles et un horaire d\'apprentissage très pratique et mon enfant est maintenant premier de la classe!',
      location: 'Lubumbashi, RDC',
    },
    {
      name: 'Mary Jeanne Eloka',
      comment:
        'Je me sens plus à l\'aise pour parler anglais en public. Merci, Molakisi !',
      location: 'Goma, RDC',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id={id} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
          Ce que nos élèves disent de nous
        </h2>
        <div className="relative mt-10">
          <div className="flex flex-col items-center sm:flex-row justify-center">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="hidden sm:block p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none sm:mr-4 sm:absolute sm:left-0"
            >
              ‹
            </button>

            {/* Testimonial Content */}
            <div className="w-full max-w-lg mx-auto text-center transition-transform duration-500 mt-6 sm:mt-0 px-4">
              <p className="text-gray-600 text-lg italic mb-4">
                "{testimonials[currentIndex].comment}"
              </p>
              <div className="mt-4">
                <div className="flex justify-center mb-2">
                  {/* Placeholder for potential rating stars */}
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
                <p className="text-gray-500">{testimonials[currentIndex].location}</p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="hidden sm:block p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none sm:ml-4 sm:absolute sm:right-0"
            >
              ›
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
