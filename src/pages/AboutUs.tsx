
import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import CompanyOverview from '../components/CompanyOverview';
import MissionVision from '../components/MissionVision';
import TeamSection from '../components/TeamSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <CompanyOverview />
        <MissionVision />
        <TeamSection />
        <ProcessSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
