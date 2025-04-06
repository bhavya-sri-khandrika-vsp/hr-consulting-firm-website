
import React from 'react';
import Header from '../components/Header';
import ServicesHero from '../components/ServicesHero';
import CoreServices from '../components/CoreServices';
import WorkProcess from '../components/WorkProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesCTA from '../components/ServicesCTA';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <CoreServices />
        <WorkProcess />
        <WhyChooseUs />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
