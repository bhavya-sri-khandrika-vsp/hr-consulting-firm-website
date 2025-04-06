
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import SmartContactForm from '../components/SmartContactForm';
import LocationsMap from '../components/LocationsMap';
import SocialHub from '../components/SocialHub';
import ContactFAQ from '../components/ContactFAQ';
import LegalPolicies from '../components/LegalPolicies';
import FinalCTA from '../components/FinalCTA';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <SmartContactForm />
        <LocationsMap />
        <SocialHub />
        <ContactFAQ />
        <LegalPolicies />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
