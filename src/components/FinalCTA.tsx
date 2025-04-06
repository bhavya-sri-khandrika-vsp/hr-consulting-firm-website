
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue to-corporate-darkBlue opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Let's Land That Job
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <p className="text-white text-lg md:text-xl italic mb-2">
              "The average job search takes 5 months. With our help, our candidates find their ideal role in just 6 weeks."
            </p>
            <p className="text-white/80 text-sm">
              Based on data from over 5,000 successful placements in 2024
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-corporate-blue py-6 px-8 text-lg group shadow-lg shadow-corporate-darkBlue/20 hover:shadow-xl hover:shadow-corporate-darkBlue/30 transition-all">
              View All Jobs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-corporate-green hover:bg-corporate-lightGreen text-white py-6 px-8 text-lg group shadow-lg shadow-corporate-green/20 hover:shadow-xl hover:shadow-corporate-green/30 transition-all">
              Book Free Consultation
              <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-12 animate-bounce-slow">
            <svg className="h-8 w-8 text-white/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
