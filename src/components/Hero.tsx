// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/hero-image.png'; // Replace with your actual image path
import Link from 'next/link';
import { AiOutlineWhatsApp } from 'react-icons/ai'; // Importing WhatsApp icon


interface HeroProps {
    id?: string;
  }

const Hero: React.FC<HeroProps> = ({ id }) => {
  // Replace with your WhatsApp number in the format "+1234567890"
  const whatsappNumber = "+243856493284";

  return (
    <section id={id} className="relative bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center h-screen md:h-auto">
        {/* Left Text Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center h-full">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl leading-tight">
            Apprenez facilement et plus rapidement
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md">
            Nous connectons les élèves et apprenants adultes aux meilleurs répétiteurs du monde. 
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 focus:outline-none"
            >
              <AiOutlineWhatsApp className="h-5 w-5 mr-2" />
              Écrivez-nous sur WhatsApp
            </Link>
          </div>
          <div className="mt-6">
            <span className="bg-yellow-200 text-yellow-700 px-4 py-1 rounded-full">
              Un meilleur service au meilleur prix!
            </span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center items-end">
          {/* Background Design */}
          <div className="absolute bg-gradient-to-r from-yellow-400 via-red-300 to-pink-400 rounded-full w-[400px] h-[400px] -z-10 transform -translate-x-10 md:-translate-x-16 lg:-translate-x-24 opacity-40" />
          <Image
            src={heroImage}
            alt="Hero Image"
            width={600} // Adjust width as per the design
            height={600} // Adjust height as per the design
            className="object-contain relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
