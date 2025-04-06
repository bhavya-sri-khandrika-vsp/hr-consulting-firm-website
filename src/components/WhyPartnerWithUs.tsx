
import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Users, Clock, TrendingUp, Shield, Handshake, 
  X, ArrowRight, Check
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
  };
  onClick: () => void;
  isActive: boolean;
  index: number;
}

const ValueCard = ({ icon, title, description, onClick, isActive, index }: ValueCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className={`relative rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 h-full ${
          isActive 
            ? 'bg-gradient-to-br from-corporate-blue to-corporate-green scale-105 border-none' 
            : 'bg-white hover:shadow-xl border border-gray-100'
        }`}
        onClick={onClick}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Card Header with Icon */}
          <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${
            isActive ? 'bg-white/20 text-white' : 'bg-corporate-blue/10 text-corporate-blue'
          }`}>
            {icon}
          </div>
          
          {/* Title */}
          <h3 className={`text-xl font-semibold mb-3 ${isActive ? 'text-white' : 'text-corporate-blue'}`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className={`${isActive ? 'text-white/90' : 'text-gray-600'} mb-4 text-sm`}>
            {description}
          </p>
          
          {/* View Case Study Button */}
          <div className={`mt-auto flex items-center text-sm font-medium ${
            isActive ? 'text-white' : 'text-corporate-green'
          }`}>
            <span>View Case Study</span>
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </div>
          
          {/* Active Indicator */}
          {isActive && (
            <div className="absolute top-3 right-3">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WhyPartnerWithUs = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-rotate through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => 
        prev === null ? 0 : 
        prev >= valueCards.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const valueCards = [
    {
      icon: <Briefcase size={24} />,
      title: "Industry-Specific Expertise",
      description: "Our recruiters average 8+ years of specialized experience in your sector, understanding the nuanced skills and cultural fit your organization needs.",
      caseStudy: {
        title: "Tech Startup Acceleration",
        challenge: "A fast-growing SaaS company needed to hire 15 specialized developers within 45 days to meet product launch deadlines.",
        solution: "We deployed our dedicated tech team who leveraged their pre-vetted network of developers with specific stack experience.",
        result: "All 15 positions filled in just 28 days, with 93% still employed after one year, accelerating product launch by 3 weeks."
      }
    },
    {
      icon: <Shield size={24} />,
      title: "Quality-First Approach",
      description: "Our rigorous 7-step vetting process ensures you only see candidates who truly align with your requirements and company culture.",
      caseStudy: {
        title: "Executive Search Excellence",
        challenge: "A multinational corporation struggled to find a CFO with both industry knowledge and international expansion expertise.",
        solution: "Our executive search team conducted in-depth leadership assessments across global markets, focusing on proven financial scaling experience.",
        result: "Placed a CFO who implemented processes that reduced operational costs by 28% while supporting expansion into three new markets."
      }
    },
    {
      icon: <Users size={24} />,
      title: "Comprehensive Support",
      description: "Beyond recruitment, we provide ongoing onboarding assistance, performance tracking, and retention strategies for long-term success.",
      caseStudy: {
        title: "Healthcare Staffing Transformation",
        challenge: "A regional hospital network struggled with 65% turnover in nursing staff and 90+ day hiring cycles.",
        solution: "Implemented our healthcare-specific recruitment solution with continuous support through the critical first 180 days.",
        result: "Reduced time-to-hire by 68%, improved retention to 85%, and established a reliable talent pipeline for ongoing staffing needs."
      }
    },
    {
      icon: <TrendingUp size={24} />,
      title: "ROI-Driven Recruitment",
      description: "Our transparent fee structure and efficiency-focused process deliver an average 40% reduction in overall hiring costs.",
      caseStudy: {
        title: "Retail Expansion Strategy",
        challenge: "A national retail chain needed to staff 5 new locations with 120+ positions while maintaining tight budget constraints.",
        solution: "Developed a volume-based recruitment strategy with a custom fee structure tied to performance metrics and retention benchmarks.",
        result: "Achieved 100% staffing within budget, generating 35% cost savings compared to previous recruitment methods."
      }
    },
    {
      icon: <Clock size={24} />,
      title: "Accelerated Timelines",
      description: "Our streamlined process reduces average time-to-hire by 62%, without sacrificing candidate quality or cultural alignment.",
      caseStudy: {
        title: "Critical IT Response",
        challenge: "A financial services company faced operational risk after unexpected departures of key IT security personnel.",
        solution: "Activated our rapid response protocol with pre-vetted cyber security specialists from our exclusive talent network.",
        result: "Placed three senior-level security experts within 72 hours, preventing any security vulnerabilities or compliance issues."
      }
    },
    {
      icon: <Handshake size={24} />,
      title: "Strategic Partnership",
      description: "We align our services with your long-term growth objectives, becoming an extension of your talent acquisition team.",
      caseStudy: {
        title: "Manufacturing Growth Journey",
        challenge: "A manufacturing firm needed evolving talent solutions during a 5-year expansion and technology modernization initiative.",
        solution: "Established a dedicated account team with quarterly strategic workforce planning and skill gap analysis.",
        result: "Successfully placed 215+ roles across operations, engineering, and leadership during 5-year partnership, supporting 43% revenue growth."
      }
    }
  ];

  const handleCardClick = (index: number) => {
    setSelectedCase(index);
    setDialogOpen(true);
  };

  const handleTestimonialClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section ref={sectionRef} className="section-padding py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
            The TalentBridge Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why leading organizations trust us to solve their most complex hiring challenges
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueCards.slice(0, 6).map((card, index) => (
              <ValueCard 
                key={index}
                {...card} 
                onClick={() => handleCardClick(index)}
                isActive={activeCard === index}
                index={index}
              />
            ))}
          </div>
          
          {/* Right Column: Results & Testimonials */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-corporate-blue mb-6">
              Results That Speak Volumes
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-corporate-green/10 p-1 rounded-full">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    <span className="text-corporate-blue">62% Faster Placements</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Our clients fill positions in less than half the industry average time
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-corporate-green/10 p-1 rounded-full">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    <span className="text-corporate-blue">91% First-Year Retention</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Our placed candidates stay longer, reducing costly turnover
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-corporate-green/10 p-1 rounded-full">
                  <Check className="h-5 w-5 text-corporate-green" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    <span className="text-corporate-blue">40% Cost Reduction</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Lower your total recruitment spend while improving quality
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial Carousel */}
            <div className="bg-white rounded-xl p-6 shadow-inner border border-gray-100">
              <h4 className="text-lg font-medium text-corporate-blue mb-4">
                Client Testimonials
              </h4>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {valueCards.map((card, index) => (
                    <CarouselItem key={index}>
                      <div 
                        className={`p-4 rounded-lg ${activeCard === index ? 'bg-corporate-blue/5 border border-corporate-blue/20' : 'bg-white'}`}
                        onClick={() => handleTestimonialClick(index)}
                      >
                        <p className="text-gray-600 italic text-sm mb-4">
                          "{card.caseStudy.result}" 
                        </p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-corporate-blue">{card.caseStudy.title}</p>
                            <p className="text-xs text-gray-500">Client Success Story</p>
                          </div>
                          <button className="text-corporate-green text-sm flex items-center" onClick={() => handleCardClick(index)}>
                            Details
                            <ArrowRight size={12} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="relative static left-auto right-auto h-7 w-7" />
                  <CarouselNext className="relative static left-auto right-auto h-7 w-7" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        {/* Case Study Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-corporate-blue text-2xl">
                {selectedCase !== null && valueCards[selectedCase].caseStudy.title}
              </DialogTitle>
              <DialogDescription>
                See how we delivered exceptional results for our clients.
              </DialogDescription>
            </DialogHeader>
            <DialogClose className="absolute right-4 top-4 opacity-70 hover:opacity-100">
              <X size={18} />
              <span className="sr-only">Close</span>
            </DialogClose>

            {selectedCase !== null && (
              <div className="space-y-5 pt-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-corporate-blue mb-2 flex items-center">
                    <div className="w-8 h-8 bg-corporate-blue/10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-corporate-blue font-bold">1</span>
                    </div>
                    The Challenge
                  </h4>
                  <p className="text-gray-600">{valueCards[selectedCase].caseStudy.challenge}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-corporate-blue mb-2 flex items-center">
                    <div className="w-8 h-8 bg-corporate-blue/10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-corporate-blue font-bold">2</span>
                    </div>
                    Our Solution
                  </h4>
                  <p className="text-gray-600">{valueCards[selectedCase].caseStudy.solution}</p>
                </div>
                
                <div className="bg-corporate-green/10 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-corporate-green mb-2 flex items-center">
                    <div className="w-8 h-8 bg-corporate-green/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-corporate-green font-bold">3</span>
                    </div>
                    The Result
                  </h4>
                  <p className="text-gray-700 font-medium">{valueCards[selectedCase].caseStudy.result}</p>
                </div>
                
                <div className="pt-4">
                  <button 
                    className="w-full bg-corporate-blue hover:bg-corporate-darkBlue text-white py-3 rounded-md transition-colors font-medium flex items-center justify-center group"
                    onClick={() => setDialogOpen(false)}
                  >
                    Schedule Your Consultation
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
