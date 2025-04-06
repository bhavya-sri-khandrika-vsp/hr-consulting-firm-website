
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-corporate-blue to-corporate-darkBlue text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Work with Us? Let's Talk!</h2>
          <p className="text-xl opacity-90 mb-10">
            Whether you're looking to hire top talent or advance your career, we're here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary bg-white text-corporate-blue hover:bg-gray-100 group">
              Partner with Us
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
            
            <a href="#jobs" className="btn-secondary group">
              Join Our Talent Pool
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
