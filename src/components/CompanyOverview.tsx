
import React, { useEffect, useRef } from 'react';

const CompanyOverview = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-x-0', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            ref={textRef} 
            className="md:w-1/2 transition-all duration-1000 -translate-x-8 opacity-0"
          >
            <h2 className="section-title">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2012, TalentBridge has grown from a small startup to one of the leading HR consulting firms in the industry. Our journey began with a simple mission: to transform how businesses find talent and how professionals find their dream jobs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Over the years, we've refined our recruitment approach, combining cutting-edge technology with a human-centered philosophy. We believe that successful placements come from understanding not just skills and experience, but also values, aspirations, and cultural fit.
            </p>
            <p className="text-lg text-gray-700">
              Today, we serve clients across various industries, from tech startups to established corporations, always maintaining our commitment to quality, transparency, and meaningful connections.
            </p>
          </div>
          
          <div className="md:w-1/2 h-full overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Diverse professional team working together" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
