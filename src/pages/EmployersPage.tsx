
import React from 'react';
import Header from '../components/Header';
import EmployersHero from '../components/EmployersHero';
import WhyPartnerWithUs from '../components/WhyPartnerWithUs';
import HiringProcess from '../components/HiringProcess';
import JobRequirementsForm from '../components/JobRequirementsForm';
import SuccessStories from '../components/SuccessStories';
import EmployersFAQ from '../components/EmployersFAQ';
import EmployersContact from '../components/EmployersContact';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const EmployersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EmployersHero />
        <WhyPartnerWithUs />
        <HiringProcess />
        <JobRequirementsForm />
        <SuccessStories />
        <EmployersFAQ />
        <ContactCTA />
        <EmployersContact />
      </main>
      <Footer />
    </div>
  );
};

export default EmployersPage;
