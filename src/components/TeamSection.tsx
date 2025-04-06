
import React from 'react';
import { Linkedin } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Alexandra Reynolds',
    role: 'CEO & Founder',
    bio: '15+ years in HR leadership and recruitment strategy',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Talent Acquisition',
    bio: 'Expert in tech and finance sector recruitment',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Director of Client Relations',
    bio: 'Specialized in building long-term client partnerships',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    linkedin: '#'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Senior HR Consultant',
    bio: 'Expert in organizational development and HR strategy',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    linkedin: '#'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    role: 'Career Coach',
    bio: 'Certified coach helping professionals advance their careers',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    linkedin: '#'
  },
  {
    id: 6,
    name: 'James Taylor',
    role: 'Technical Recruitment Lead',
    bio: 'Specialized in engineering and IT talent acquisition',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#'
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    role: 'Employer Branding Specialist',
    bio: 'Helps companies strengthen their recruitment brand',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    linkedin: '#'
  },
  {
    id: 8,
    name: 'Robert Kim',
    role: 'Data & Analytics Manager',
    bio: 'Leads data-driven recruitment strategies and market insights',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    linkedin: '#'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our talented team of recruitment specialists brings diverse expertise and a shared passion for connecting talent with opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-full aspect-square mb-4 mx-auto w-48 h-48 shadow-md transition-all duration-300 group-hover:shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <a 
                    href={member.linkedin}
                    className="text-white bg-corporate-blue/30 hover:bg-corporate-blue/50 p-2 rounded-full transition-colors"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-lg text-corporate-blue">{member.name}</h3>
                <p className="text-corporate-green font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
