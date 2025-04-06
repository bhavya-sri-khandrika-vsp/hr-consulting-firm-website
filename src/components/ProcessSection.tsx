
import React, { useState } from 'react';
import { 
  FileSearch, 
  Search, 
  UserCheck, 
  CheckCircle, 
  Briefcase 
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: 1,
    icon: FileSearch,
    title: 'Understanding Client Needs',
    description: 'We begin by learning about your organization, culture, and specific requirements to ensure we find the perfect match.',
  },
  {
    id: 2,
    icon: Search,
    title: 'Talent Sourcing',
    description: 'Our specialists leverage our extensive network and advanced tools to identify qualified candidates.',
  },
  {
    id: 3,
    icon: UserCheck,
    title: 'Screening & Interviews',
    description: 'We conduct thorough screenings and preliminary interviews to evaluate skills, experience, and cultural fit.',
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Final Selection',
    description: 'We present you with a shortlist of top candidates and support the final decision-making process.',
  },
  {
    id: 5,
    icon: Briefcase,
    title: 'Onboarding Support',
    description: 'Our relationship continues after the hire with follow-ups and onboarding assistance for a smooth transition.',
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Recruitment Process</h2>
          <p className="section-subtitle">
            A systematic, thorough approach designed to find the best match between talent and opportunity.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Process Timeline */}
          <div className="hidden md:block">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {PROCESS_STEPS.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div 
                    key={step.id}
                    className="relative"
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div 
                      className={`w-16 h-16 rounded-full mx-auto bg-white border-4 flex items-center justify-center z-10 relative transition-all duration-300 ${
                        activeStep === step.id 
                          ? 'border-corporate-green text-corporate-green scale-110 shadow-lg' 
                          : 'border-corporate-blue text-corporate-blue'
                      }`}
                    >
                      <StepIcon size={28} />
                    </div>
                    
                    <div 
                      className={`mt-6 bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${
                        activeStep === step.id ? 'scale-105 shadow-lg' : ''
                      }`}
                    >
                      <h3 className="font-bold text-lg text-center mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Process List */}
          <div className="md:hidden space-y-8">
            {PROCESS_STEPS.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={step.id}
                  className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-corporate-blue/10 flex items-center justify-center text-corporate-blue">
                    <StepIcon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-corporate-blue text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
