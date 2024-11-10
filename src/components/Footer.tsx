// // components/Footer.tsx
// import React from 'react';
// import Link from 'next/link';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-semibold">Molakisi Services</h3>
//             <p className="mt-2 text-gray-400">
//               Providing high-quality English courses tailored to your needs.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold">Quick Links</h4>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <Link href="#accueil">
//                   Accueil
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#a-propos">
//                   À propos
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#services">
//                  Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <h4 className="text-lg font-semibold">Follow Us</h4>
//             <div className="mt-2 flex space-x-4">
//               <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.937 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.637c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.965h-1.513c-1.491 0-1.953.931-1.953 1.885v2.22h3.328l-.531 3.469h-2.797v8.385c5.737-.917 10.125-5.863 10.125-11.854z"/></svg>
//               </Link>
//               <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.923 0 .386.043.763.127 1.124-4.09-.205-7.719-2.164-10.141-5.144-.424.728-.666 1.572-.666 2.476 0 1.71.87 3.213 2.188 4.096-.808-.026-1.569-.248-2.231-.616v.062c0 2.385 1.693 4.374 3.946 4.825-.412.111-.847.171-1.294.171-.316 0-.623-.031-.922-.088.624 1.951 2.435 3.376 4.58 3.416-1.68 1.319-3.809 2.107-6.114 2.107-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14.002-7.497 14.002-13.986 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"/></svg>
//               </Link>
//               <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.331 3.608 1.307.975.975 1.244 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.331 2.633-1.307 3.608-.975.975-2.242 1.244-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.331-3.608-1.307-.975-.975-1.244-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.331-2.633 1.307-3.608.975-.975 2.242-1.244 3.608-1.307 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.257 0-3.67.012-4.947.07-1.534.07-2.598.334-3.52 1.256-.922.922-1.186 1.986-1.256 3.52-.058 1.277-.07 1.69-.07 4.947s.012 3.67.07 4.947c.07 1.534.334 2.598 1.256 3.52.922.922 1.986 1.186 3.52 1.256 1.277.058 1.69.07 4.947.07s3.67-.012 4.947-.07c1.534-.07 2.598-.334 3.52-1.256.922-.922 1.186-1.986 1.256-3.52.058-1.277.07-1.69.07-4.947s-.012-3.67-.07-4.947c-.07-1.534-.334-2.598-1.256-3.52-.922-.922-1.986-1.186-3.52-1.256-1.277-.058-1.69-.07-4.947-.07zm0 5.838c-3.389 0-6.146 2.757-6.146 6.146s2.757 6.146 6.146 6.146 6.146-2.757 6.146-6.146-2.757-6.146-6.146-6.146zm0 10.123c-2.19 0-3.977-1.788-3.977-3.977s1.788-3.977 3.977-3.977 3.977 1.788 3.977 3.977-1.788 3.977-3.977 3.977zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z"/></svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
//           &copy; {new Date().getFullYear()} Molakisi Services. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

interface FooterProps {
    id?: string;
  }

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          {/* Company Info */}
          <h3 className="text-xl font-semibold">Molakisi Services</h3>
          <p className="mt-2 text-gray-400">
            Offrant des cours d'anglais à domicile et un soutien scolaire personnalisé pour aider chaque élève à réussir.
          </p>
        </div>

        {/* Horizontal Menu Bar */}
        <div className="flex justify-center space-x-6">
          <Link href="#accueil">
            Accueil
          </Link>
          <Link href="#a-propos">
           À propos
          </Link>
          <Link href="#services">
            Services
          </Link>
          <Link href="#contact">
            Contact
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Molakisi Services. Tous droits réservés. Conçu par Giovanni Huram.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
