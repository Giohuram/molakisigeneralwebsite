// components/ServicesList.tsx
import React from 'react';

interface ServiceProps {
    id?: string;
  }

const ServicesList: React.FC<ServiceProps> = ({id}) => {
  const services = [
    {
      title: 'Cours d\'anglais à domicile',
      description: 'Améliorez votre maîtrise de l\'anglais avec des cours personnalisés, dispensés par des enseignants qualifiés, directement à votre domicile. Notre approche garantit un apprentissage rapide et efficace, adapté à vos besoins spécifiques.',
      image: '/anglais.png', // Replace with an appropriate image path
      link: 'https://www.anglaisnandaku.com', // Replace with the actual URL
    },
    {
      title: 'Soutien scolaire à domicile',
      description: 'Aidez votre enfant à exceller dans toutes les matières scolaires grâce à notre service de soutien scolaire à domicile. Nous offrons un encadrement personnalisé qui renforce la confiance et améliore les résultats académiques.',
      image: '/tuteria.jpeg', // Replace with an appropriate image path
      link: '#', // Replace with the actual URL
    },
  ];

  return (
    <section id={id} className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
          Nos Services
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Découvrez nos services d'enseignement à domicile, conçus pour répondre aux besoins uniques de chaque élève et favoriser leur réussite académique.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-50 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="mt-4">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
