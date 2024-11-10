// // components/ContactUs.tsx
// "use client"

// import React from 'react';
// import { AiOutlineWhatsApp, AiOutlineMail, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'; // Importing icons from react-icons

// const ContactUs: React.FC = () => {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
//           Entrons en contact
//         </h2>
//         <p className="mt-4 text-lg text-center text-gray-600">
//           Nous serions ravis d'échanger avec vous ! Cliquez sur l'un des boutons ci-dessous pour nous contacter via votre plateforme préférée.
//         </p>
//         <div className="mt-10 flex justify-center space-x-8">
//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/+243856493284" // Replace with your WhatsApp number in the format +1234567890
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-green-500 hover:text-green-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
//             aria-label="Contact us on WhatsApp"
//           >
//             <AiOutlineWhatsApp />
//           </a>
//           {/* Gmail */}
//           <a
//             href="mailto:molakisiservices@gmail.com" // Correct email link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-red-500 hover:text-red-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
//             aria-label="Contact us via Email"
//           >
//             <AiOutlineMail />
//           </a>

//           {/* Facebook */}
//           <a
//             href="https://web.facebook.com/molakisiservices" // Replace with your actual Facebook page URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:text-blue-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
//             aria-label="Contact us on Facebook"
//           >
//             <AiFillFacebook />
//           </a>
//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com/molakisi_services" // Replace with your actual Instagram profile URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-500 hover:text-pink-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
//             aria-label="Contact us on Instagram"
//           >
//             <AiOutlineInstagram />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

// components/ContactUs.tsx
"use client"

import React from 'react';
import { AiOutlineWhatsApp, AiOutlineMail, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'; // Importing icons from react-icons

interface ContactProps {
    id?: string;
  }

const ContactUs: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
          Entrons en contact
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Nous serions ravis d'échanger avec vous ! Cliquez sur l'un des boutons ci-dessous pour nous contacter via votre plateforme préférée.
        </p>
        <div className="mt-10 flex justify-center space-x-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+243856493284" // Replace with your WhatsApp number in the format +1234567890
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6 duration-300"
            aria-label="Contact us on WhatsApp"
          >
            <AiOutlineWhatsApp />
          </a>
          {/* Gmail */}
          <a
            href="mailto:molakisiservices@gmail.com" // Correct email link
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6 duration-300"
            aria-label="Contact us via Email"
          >
            <AiOutlineMail />
          </a>

          {/* Facebook */}
          <a
            href="https://web.facebook.com/molakisiservices" // Replace with your actual Facebook page URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6 duration-300"
            aria-label="Contact us on Facebook"
          >
            <AiFillFacebook />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/molakisi_services" // Replace with your actual Instagram profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 text-6xl transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6 duration-300"
            aria-label="Contact us on Instagram"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
