
import React, { useState } from 'react';
import { ArrowRight, Briefcase, Users, Search, FileText } from 'lucide-react';

// Service highlight items for the interactive selector
const serviceHighlights = [
  {
    id: 'recruitment',
    title: 'Recruitment Services',
    description: 'Find the perfect match for your team',
    icon: <Users className="h-8 w-8" />,
    color: 'bg-corporate-blue'
  },
  {
    id: 'executive',
    title: 'Executive Search',
    description: 'Secure top-tier leadership talent',
    icon: <Search className="h-8 w-8" />,
    color: 'bg-corporate-green'
  },
  {
    id: 'consulting',
    title: 'HR Consulting',
    description: 'Optimize your talent strategies',
    icon: <Briefcase className="h-8 w-8" />,
    color: 'bg-corporate-blue'
  },
  {
    id: 'career',
    title: 'Career Coaching',
    description: 'Advance your professional journey',
    icon: <FileText className="h-8 w-8" />,
    color: 'bg-corporate-green'
  }
];

const ServicesHero = () => {
  const [activeService, setActiveService] = useState(serviceHighlights[0].id);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('core-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 to-corporate-green/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Professional recruitment environment"
          className="w-full h-full object-cover object-center"
        />

        {/* Animated recruitment wheel in background */}
        <div className="absolute right-0 top-20 w-[600px] h-[600px] border-4 border-white/10 rounded-full animate-spin-slow opacity-20 z-10" 
          style={{ animationDuration: '60s' }}>
        </div>
        <div className="absolute right-20 top-40 w-[400px] h-[400px] border-4 border-white/10 rounded-full animate-spin-slow opacity-20 z-10"
          style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
        </div>
      </div>

      <div className="container-custom relative z-20 pt-20 pb-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            HR Solutions That Drive Success
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 animate-fade-in opacity-95" style={{ animationDelay: '0.2s' }}>
            From talent acquisition to executive search, we connect businesses with the right professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={scrollToServices}
              className="btn-primary group">
              Explore Services
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </button>
            
            <a href="#service-inquiry" className="btn-secondary group">
              Get a Consultation
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </div>

        {/* Interactive service selector */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {serviceHighlights.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeService === service.id 
                  ? `${service.color} text-white shadow-lg scale-105` 
                  : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
              }`}
              onMouseEnter={() => setActiveService(service.id)}
            >
              <div className="flex items-center mb-3">
                <div className={`p-2 rounded-full ${activeService === service.id ? 'bg-white/20' : 'bg-white/10'}`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className={`text-sm ${activeService === service.id ? 'text-white/90' : 'text-white/80'}`}>
                {service.description}
              </p>
            </div>
          ))}
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

export default ServicesHero;
