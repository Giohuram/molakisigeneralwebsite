// components/Testimonials.tsx
import React from 'react';

interface TestimonialProps {
    id?: string;
  }

const Testimonials: React.FC<TestimonialProps> = ({ id }) => {
  const testimonials = [
    {
      name: 'Landry Muleka',
      comment: 'Les cours offerts par Molakisi Services ont transformé mes compétences en anglais. Hautement recommandé !',
    //   image: '/images/user1.jpg', // Replace with actual image paths
    },
    {
      name: 'Exaucé Malaba',
      comment: 'Des méthodes d\'enseignement exceptionnelles et un horaire d\'apprentissage très pratique et mon enfant est maintenant premier de la classe!',
    //   image: '/images/user2.jpg',
    },
    {
      name: 'Mary Jeanne Eloka',
      comment: 'Je me sens plus à l\'aise pour parler anglais en public. Merci, Molakisi !',
    //   image: '/images/user3.jpg',
    },
  ];

  return (
    <section id={id} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
          Ce que nos élèves disent de nous
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; comment: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span></span>
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
