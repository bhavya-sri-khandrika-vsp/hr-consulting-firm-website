
import React from 'react';
import { Award, Users, Building, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            We're a premium HR consulting firm dedicated to connecting exceptional talent with forward-thinking companies. Our expertise lies in understanding both sides of the recruitment equation.
          </p>
          <div className="mt-6 mb-12">
            <Link to="/about" className="btn-outline group">
              Learn More About Us
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experience */}
          <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-blue/10 text-corporate-blue mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">10+ Years</h3>
            <p className="text-gray-600">Of Industry Experience</p>
          </div>

          {/* Placements */}
          <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-green/10 text-corporate-green mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">1000+ Hires</h3>
            <p className="text-gray-600">Successful Placements</p>
          </div>

          {/* Clients */}
          <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-blue/10 text-corporate-blue mb-4">
              <Building size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">50+ Clients</h3>
            <p className="text-gray-600">Trusted Partners</p>
          </div>

          {/* Industries */}
          <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-green/10 text-corporate-green mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">12 Industries</h3>
            <p className="text-gray-600">Specialized Expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
