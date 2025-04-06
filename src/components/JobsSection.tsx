
import React from 'react';
import { ArrowRight, MapPin, Briefcase, DollarSign } from 'lucide-react';

const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechVision Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120K - $150K',
  },
  {
    id: 2,
    title: 'Marketing Director',
    company: 'Global Media Group',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110K - $130K',
  },
  {
    id: 3,
    title: 'HR Business Partner',
    company: 'Innovations LLC',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$90K - $110K',
  },
];

const JobsSection = () => {
  return (
    <section id="jobs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Featured Job Openings</h2>
          <p className="section-subtitle">
            Explore our carefully selected opportunities from top employers across various industries. Your next career move could be just a click away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Featured Jobs */}
          <div className="space-y-4">
            {FEATURED_JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-corporate-blue mb-2">{job.title}</h3>
                <p className="text-gray-700 font-medium mb-3">{job.company}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1 text-corporate-green" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-1 text-corporate-green" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1 text-corporate-green" />
                    {job.salary}
                  </div>
                </div>
                
                <a href="#" className="text-corporate-blue font-medium hover:text-corporate-green flex items-center transition-colors">
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
            
            <div className="mt-6">
              <a href="#" className="btn-primary">
                View All Jobs
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Submit Resume */}
          <div className="bg-corporate-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Next Opportunity?</h3>
            <p className="mb-6">
              Submit your resume today and let our team of experts match you with opportunities that align with your skills, experience, and career goals.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-corporate-green focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-corporate-green focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-1">Resume</label>
                <input
                  type="file"
                  id="resume"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-corporate-green focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-corporate-green file:text-white hover:file:bg-corporate-lightGreen"
                />
              </div>
              
              <button
                type="submit"
                className="btn-secondary w-full"
              >
                Submit Your Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
