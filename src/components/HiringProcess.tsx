
import React, { useState, useEffect, useRef } from 'react';
import { 
  MessagesSquare, Users, ClipboardCheck, LineChart, 
  CalendarClock, Briefcase, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  timeframe: string;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep = ({ icon, title, description, timeframe, isActive, onClick }: ProcessStepProps) => {
  return (
    <div 
      className={`min-w-[250px] cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div className={`rounded-lg p-6 h-full transition-all duration-300 ${
        isActive 
          ? 'bg-corporate-blue text-white shadow-lg' 
          : 'bg-white hover:bg-gray-50'
      }`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          isActive 
            ? 'bg-white text-corporate-blue' 
            : 'bg-corporate-blue/10 text-corporate-blue'
        }`}>
          {icon}
        </div>
        <h3 className={`text-lg font-semibold mb-2 ${isActive ? 'text-white' : 'text-corporate-blue'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-3 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className={`text-xs font-medium ${isActive ? 'text-white/80' : 'text-corporate-green'}`}>
          Timeframe: {timeframe}
        </div>
      </div>
    </div>
  );
};

const HiringProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const processSteps = [
    {
      icon: <MessagesSquare size={24} />,
      title: "Consultation & Needs Analysis",
      description: "We thoroughly understand your business requirements and culture",
      timeframe: "1-2 Days",
    },
    {
      icon: <Users size={24} />,
      title: "Strategic Talent Sourcing",
      description: "Leveraging our extensive network to find the perfect candidates",
      timeframe: "3-5 Days",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Rigorous Screening & Assessment",
      description: "Multi-stage evaluation process to ensure quality matches",
      timeframe: "5-7 Days",
    },
    {
      icon: <LineChart size={24} />,
      title: "Candidate Presentation",
      description: "Present a curated shortlist of top-matched candidates",
      timeframe: "1-2 Days",
    },
    {
      icon: <CalendarClock size={24} />,
      title: "Interview Support",
      description: "Facilitate meetings and collect feedback for refinement",
      timeframe: "3-7 Days",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Hiring & Onboarding Assistance",
      description: "Ensure a seamless transition to your team",
      timeframe: "1-3 Days",
    },
  ];

  // Auto-advance the timeline
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 5000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, processSteps.length]);

  // Pause auto-play when user interacts
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 30 seconds of inactivity
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    
    const resumeTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 30000);

    return () => clearTimeout(resumeTimer);
  };

  // Scroll to center the active step
  useEffect(() => {
    if (timelineRef.current) {
      const scrollContainer = timelineRef.current;
      const activeElement = scrollContainer.children[activeStep] as HTMLElement;
      
      if (activeElement) {
        const containerWidth = scrollContainer.offsetWidth;
        const elementWidth = activeElement.offsetWidth;
        const elementOffsetLeft = activeElement.offsetLeft;
        
        scrollContainer.scrollTo({
          left: elementOffsetLeft - containerWidth / 2 + elementWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeStep]);

  // Handle navigation buttons
  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % processSteps.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Hiring Process</h2>
          <p className="section-subtitle mx-auto">
            A streamlined approach to finding exceptional talent for your organization
          </p>
        </div>

        {/* Timeline progress indicator */}
        <div className="relative mb-8 max-w-3xl mx-auto">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-corporate-green rounded-full transition-all duration-500"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />
          </div>
          <div className="flex justify-between absolute top-0 left-0 right-0 -mt-1">
            {processSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  index <= activeStep
                    ? 'bg-corporate-green border-corporate-green'
                    : 'bg-white border-gray-300'
                }`}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="relative">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md"
            onClick={handlePrev}
          >
            <ArrowLeft size={16} />
          </Button>
          
          <div 
            ref={timelineRef}
            className="flex overflow-x-auto py-4 px-10 gap-6 scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                isActive={index === activeStep}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md"
            onClick={handleNext}
          >
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Current step details */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-corporate-blue mb-4">
            {processSteps[activeStep].title}
          </h3>
          <p className="text-gray-700 mb-6">
            {processSteps[activeStep].description}
            {activeStep === 0 && (
              " We start by understanding your company culture, values, and specific requirements for the role. This includes discussing job descriptions, qualifications, experience levels, and any unique attributes you're seeking in candidates."
            )}
            {activeStep === 1 && (
              " Our specialized recruiters activate their industry-specific networks and use advanced search tools to identify candidates with the right skills and cultural fit. We look beyond active job seekers to engage with passive talent who may be perfect for your role."
            )}
            {activeStep === 2 && (
              " Candidates undergo a thorough screening process including skills assessments, behavioral interviews, and reference checks. We evaluate technical capabilities as well as soft skills to ensure they'll thrive in your organization."
            )}
            {activeStep === 3 && (
              " You'll receive a carefully curated shortlist of candidates who match your requirements. Each candidate comes with a detailed profile highlighting their qualifications, experience, and our assessment of their fit for your organization."
            )}
            {activeStep === 4 && (
              " We coordinate and schedule interviews between you and selected candidates. After each interview, we collect feedback from both parties to refine the search if needed and facilitate follow-up communications."
            )}
            {activeStep === 5 && (
              " Once you've selected your preferred candidate, we assist with offer negotiations, background checks, and provide guidance through the onboarding process to ensure a smooth transition into your team."
            )}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-corporate-green">
              Typical Timeframe: {processSteps[activeStep].timeframe}
            </span>
            <Button className="bg-corporate-blue hover:bg-corporate-darkBlue text-white">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
