
import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  ClipboardCheck, 
  MessageCircle, 
  Briefcase, 
  Users
} from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Process steps data
const processSteps = [
  {
    id: 1,
    title: 'Understanding Employer Needs',
    description: 'We begin with a thorough discovery call to understand your organization, culture, and specific hiring requirements.',
    icon: <MessageCircle className="h-6 w-6" />,
    details: [
      'In-depth needs analysis consultation',
      'Job description development and optimization',
      'Talent market analysis and salary benchmarking',
      'Recruitment timeline planning'
    ]
  },
  {
    id: 2,
    title: 'Talent Sourcing & Screening',
    description: 'Our expert recruiters leverage advanced tools and our extensive network to identify qualified candidates.',
    icon: <Users className="h-6 w-6" />,
    details: [
      'Multi-channel talent sourcing strategy',
      'Preliminary candidate screening and assessment',
      'Technical skill evaluation where applicable',
      'Passive candidate outreach and engagement'
    ]
  },
  {
    id: 3,
    title: 'Interview & Evaluation',
    description: 'We conduct comprehensive interviews to assess skills, experience, and cultural fit before presenting you with top candidates.',
    icon: <ClipboardCheck className="h-6 w-6" />,
    details: [
      'Structured behavioral and situational interviews',
      'Cultural fit and soft skills assessment',
      'Reference checking and background verification',
      'Candidate comparison and shortlisting'
    ]
  },
  {
    id: 4,
    title: 'Selection & Offer Management',
    description: 'We facilitate the final selection process and help negotiate competitive offers to secure your chosen candidates.',
    icon: <CheckCircle className="h-6 w-6" />,
    details: [
      'Interview feedback collection and analysis',
      'Offer preparation and presentation',
      'Salary and benefits negotiation support',
      'Candidate communication throughout decision process'
    ]
  },
  {
    id: 5,
    title: 'Post-Hire Support',
    description: 'Our relationship continues with onboarding assistance and follow-ups to ensure a successful placement.',
    icon: <Briefcase className="h-6 w-6" />,
    details: [
      'Onboarding coordination and support',
      '30-60-90 day check-ins with placed candidates',
      'Performance feedback collection',
      'Retention strategy consulting'
    ]
  }
];

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  return (
    <section className="section-padding bg-corporate-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Our proven recruitment process ensures efficient, effective, and successful placements.
          </p>
        </div>

        {/* Desktop process map */}
        <div className="hidden md:block mt-16 relative">
          {/* Process connector line */}
          <div className="absolute top-[72px] left-0 right-0 h-1 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step) => (
              <HoverCard key={step.id}>
                <HoverCardTrigger asChild>
                  <div 
                    className={`flex flex-col items-center transition-all duration-300 cursor-pointer
                      ${activeStep === step.id ? 'scale-105' : 'hover:scale-105'}`}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div 
                      className={`flex items-center justify-center w-16 h-16 rounded-full ${
                        activeStep === step.id 
                          ? 'bg-corporate-blue text-white shadow-lg' 
                          : 'bg-white text-corporate-blue border-2 border-corporate-blue shadow-sm'
                      } mb-4 transition-all duration-300`}
                    >
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-bold mb-1">{step.title}</div>
                      <div className={`text-sm ${activeStep === step.id ? 'text-corporate-blue' : 'text-gray-600'}`}>
                        Step {step.id}
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0 shadow-lg">
                  <div className="p-4 bg-corporate-blue text-white">
                    <h3 className="font-bold text-lg">Step {step.id}: {step.title}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle size={14} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>

        {/* Mobile process map */}
        <div className="md:hidden mt-10 space-y-6">
          {processSteps.map((step) => (
            <div 
              key={step.id}
              className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-corporate-blue"
            >
              <div className="flex items-center mb-3">
                <div className="bg-corporate-blue text-white rounded-full p-2 mr-3">
                  {step.icon}
                </div>
                <h3 className="font-bold">Step {step.id}: {step.title}</h3>
              </div>
              <p className="text-gray-700 mb-3">{step.description}</p>
              <div className="bg-gray-50 p-3 rounded-md">
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle size={14} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#service-inquiry" className="btn-primary inline-flex items-center">
            Start Your Recruitment Journey
            <Calendar className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
