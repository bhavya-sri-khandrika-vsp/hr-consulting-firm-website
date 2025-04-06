
import React from 'react';
import { MessageSquare, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactHero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const faqElement = document.getElementById('faq-section');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue to-corporate-darkBlue opacity-95"></div>
      <div className="absolute inset-0">
        <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            We're Here to Help You Connect, Hire, or Get Hired
          </h1>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Reach out to our team — whether you're an employer, a job seeker, or just curious about our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToForm}
              className="bg-corporate-green hover:bg-corporate-lightGreen text-white py-6 px-8 text-lg group transition-all"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Talk to Us
            </Button>
            
            <Button 
              onClick={scrollToFAQ}
              className="bg-white hover:bg-gray-100 text-corporate-blue py-6 px-8 text-lg group transition-all"
            >
              <HelpCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Browse FAQs
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce-slow">
            <svg className="h-8 w-8 text-white/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
