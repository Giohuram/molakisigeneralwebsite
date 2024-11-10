// components/WhyBest.tsx
import React from 'react';
import { FaUserFriends } from 'react-icons/fa'; // Importing the client icon

interface WhyBestProps {
    id?: string;
  }

const WhyBest: React.FC<WhyBestProps> = ({ id }) => {
  const features = [
    {
      title: '4 ans d\'expérience',
      description: 'Nous avons 4 ans d\'expérience dans l\'enseignement à domicile, garantissant des méthodes personnalisées et adaptées pour chaque élève, dans le confort de votre maison.',
      icon: '⭐', // Placeholder icon (you can replace with actual icons)
    },
    {
      title: '20+ Experts pédagogiques',
      description: 'Notre équipe dévouée comprend plus de 20 experts pédagogiques qui se déplacent chez vous pour offrir un encadrement personnalisé et des résultats exceptionnels.',
      icon: '🎓',
    },
    {
      title: 'Amélioration rapide des résultats',
      description: 'Nos cours à domicile sont conçus pour maximiser la performance scolaire, améliorer la maîtrise de l\'anglais et booster la confiance de chaque élève.',
      icon: '📈',
    },
    {
      title: '100% clients satisfaits',
      description: 'Notre approche centrée sur l\'élève et notre engagement envers l\'excellence se traduisent par un taux de satisfaction élevé. Essayez nos services et constatez la différence.',
      icon: <FaUserFriends className="text-4xl text-gray-800" />, // Using the client icon
    },
  ];

  return (
    <section id={id} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
          Pourquoi choisir Molakisi Services ?
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Nous sommes le choix idéal pour l'enseignement à domicile, offrant des cours d'anglais et un soutien scolaire adaptés à chaque besoin.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBest;
