
import React from 'react';
import { Users, Clock, Search, Briefcase, FileText } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-corporate-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive recruitment solutions tailored to meet the unique needs of both employers and job seekers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Permanent Hiring */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-blue text-white mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Permanent Hiring</h3>
              <p className="text-gray-600">
                Find your perfect long-term match with our thorough permanent placement services. We connect top talent with companies looking for dedicated team members.
              </p>
            </div>
          </div>

          {/* Contract Staffing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-green text-white mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Contract Staffing</h3>
              <p className="text-gray-600">
                Need skilled professionals for a specific project or time period? Our contract staffing solutions provide flexible workforce options to meet your business needs.
              </p>
            </div>
          </div>

          {/* Executive Search */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-blue text-white mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Executive Search</h3>
              <p className="text-gray-600">
                Our executive search service identifies and attracts high-caliber leaders who will drive your organization's success and growth. Discreet and thorough.
              </p>
            </div>
          </div>

          {/* HR Consulting */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-green text-white mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">HR Consulting</h3>
              <p className="text-gray-600">
                Optimize your HR processes with expert consulting services. From talent acquisition strategies to employee retention, we provide comprehensive guidance.
              </p>
            </div>
          </div>

          {/* Resume & Career Coaching */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-blue text-white mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Resume & Career Coaching</h3>
              <p className="text-gray-600">
                Stand out in today's competitive job market with professional resume writing and career coaching. We'll help you showcase your strengths and achieve your career goals.
              </p>
            </div>
          </div>

          {/* Talent Assessment */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-green text-white mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Talent Assessment</h3>
              <p className="text-gray-600">
                Make informed hiring decisions with our comprehensive candidate assessment services. We evaluate skills, cultural fit, and potential to ensure the right match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
