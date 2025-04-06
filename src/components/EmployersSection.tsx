
import React from 'react';
import { Check, ArrowRight, Search, Clock, Award } from 'lucide-react';

const EmployersSection = () => {
  return (
    <section id="employers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title mb-6">Partner with Us to Find Exceptional Talent</h2>
            <p className="text-gray-600 mb-8">
              As a premium HR consultancy, we understand your business needs and connect you with pre-screened, qualified candidates who will help drive your organization's success.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <p className="text-gray-700">Access to a curated talent pool across industries and specialties</p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <p className="text-gray-700">Streamlined recruitment process that saves you time and resources</p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <p className="text-gray-700">Thorough candidate screening and skill assessment</p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <p className="text-gray-700">Personalized service tailored to your specific hiring needs</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary group">
                Post a Job Requirement
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </a>
              
              <a href="#contact" className="btn-outline group">
                Schedule a Consultation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </a>
            </div>
          </div>
          
          {/* Stats and benefits */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-corporate-blue/10 text-corporate-blue mb-3">
                  <Search size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-1">85%</h3>
                <p className="text-gray-600 text-sm">Faster Time-to-Hire</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-corporate-blue/10 text-corporate-blue mb-3">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-1">92%</h3>
                <p className="text-gray-600 text-sm">Retention Rate</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-corporate-green/10 text-corporate-green mb-3">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-1">97%</h3>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-corporate-green/10 text-corporate-green mb-3">
                  <ArrowRight size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-1">3,200+</h3>
                <p className="text-gray-600 text-sm">Successful Placements</p>
              </div>
            </div>
            
            <div className="bg-corporate-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Flexible Hiring Solutions</h3>
              <p>
                Whether you're looking for permanent employees, contract staff, or executive talent, our tailored recruitment solutions meet your specific business needs and timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployersSection;
