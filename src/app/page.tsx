import ContactUs from '@/components/ContactUs';
import CourseList from '@/components/CourseList';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import WhyBest from '@/components/WhyBest';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero id="accueil" /> 
      <WhyBest id="a-propos" />
      <CourseList id="services" />
      <Testimonials id="testimonials" />
      <ContactUs id="Contact" />
      <Footer />
    </div>
  );
}

export default page;
