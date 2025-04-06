
import React from 'react';
import { Award, Users, Building, Clock, Star, GraduationCap, Medal, Globe } from 'lucide-react';

const STATS = [
  {
    id: 1,
    icon: Clock,
    value: '10+',
    label: 'Years of Experience',
    bgColor: 'bg-corporate-blue/10',
    iconColor: 'text-corporate-blue',
  },
  {
    id: 2,
    icon: Users,
    value: '1000+',
    label: 'Successful Placements',
    bgColor: 'bg-corporate-green/10',
    iconColor: 'text-corporate-green',
  },
  {
    id: 3,
    icon: Building,
    value: '50+',
    label: 'Corporate Clients',
    bgColor: 'bg-corporate-blue/10',
    iconColor: 'text-corporate-blue',
  },
  {
    id: 4,
    icon: Award,
    value: '12',
    label: 'Industry Specializations',
    bgColor: 'bg-corporate-green/10',
    iconColor: 'text-corporate-green',
  },
];

const DIFFERENTIATORS = [
  {
    id: 1,
    icon: Star,
    title: 'Industry Expertise',
    description: 'Specialized recruiters with deep knowledge in their respective fields',
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Rigorous Vetting',
    description: 'Comprehensive candidate assessment for quality placements',
  },
  {
    id: 3,
    icon: Medal,
    title: 'Personal Approach',
    description: 'Tailored recruitment solutions for every client and candidate',
  },
  {
    id: 4,
    icon: Globe,
    title: 'Global Network',
    description: 'Access to talent and opportunities across international markets',
  },
];

const CLIENT_LOGOS = [
  {
    id: 1,
    name: 'TechVision',
    logoUrl: 'https://via.placeholder.com/150x50?text=TechVision',
  },
  {
    id: 2,
    name: 'Global Finance',
    logoUrl: 'https://via.placeholder.com/150x50?text=GlobalFinance',
  },
  {
    id: 3,
    name: 'Innovate Inc',
    logoUrl: 'https://via.placeholder.com/150x50?text=InnovateInc',
  },
  {
    id: 4,
    name: 'MediaFlex',
    logoUrl: 'https://via.placeholder.com/150x50?text=MediaFlex',
  },
  {
    id: 5,
    name: 'HealthCare Plus',
    logoUrl: 'https://via.placeholder.com/150x50?text=HealthCarePlus',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            With our proven track record and client-focused approach, we deliver exceptional recruitment solutions that drive success.
          </p>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat) => (
            <div key={stat.id} className="bg-gray-50 p-6 rounded-lg text-center card-hover">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} ${stat.iconColor} mb-4`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.id} className="flex space-x-6 p-6 bg-gray-50 rounded-lg card-hover">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-corporate-blue/10 text-corporate-blue flex items-center justify-center">
                  <item.icon size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-corporate-blue">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Trusted By Leading Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {CLIENT_LOGOS.map((client) => (
              <div key={client.id} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logoUrl} 
                  alt={client.name}
                  className="h-12 md:h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
