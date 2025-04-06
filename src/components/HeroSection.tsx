
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pb-28 md:pt-36">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 to-corporate-blue/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Professional office setting"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Bridging Talent & Opportunity
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90" style={{ animationDelay: '0.2s' }}>
            Helping businesses hire the right people & job seekers land their dream jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#employers" className="btn-primary group">
              Hire Talent
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
            
            <a href="#jobs" className="btn-secondary group">
              Find a Job
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="h-16 md:h-20 w-full text-white fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0C0,0,0,45,0,75Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
