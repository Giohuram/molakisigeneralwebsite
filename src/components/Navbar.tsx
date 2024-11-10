// // components/Navbar.tsx
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing icons for the burger menu
import logoImage from '../../public/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' }, // Updated to match the section's id
    { label: 'Services', href: '#services' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Image
            src={logoImage}
            alt="Molakisi Logo"
            width={150}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

