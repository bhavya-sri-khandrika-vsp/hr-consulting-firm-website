
import React, { useState } from 'react';
import { Users, Clock, Search, Briefcase, FileText, CheckCircle, Building, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Industry specialization data
const industries = [
  { 
    id: 'tech', 
    name: 'Technology', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    description: 'Specialized recruitment for software engineers, product managers, and tech executives.' 
  },
  { 
    id: 'finance', 
    name: 'Finance', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    description: 'Expert talent acquisition for accounting, financial analysis, and banking positions.' 
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4 .5-2 2 2h5.27"/></svg>,
    description: 'Connecting healthcare facilities with qualified physicians, nurses, and administrators.' 
  },
  { 
    id: 'manufacturing', 
    name: 'Manufacturing', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>,
    description: 'Tailored recruitment for production managers, engineers, and supply chain experts.' 
  },
  { 
    id: 'retail', 
    name: 'Retail', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
    description: 'Finding top talent for store management, merchandising, and e-commerce roles.' 
  }
];

// FAQ data for career coaching
const coachingFaqs = [
  {
    question: "What does the resume writing service include?",
    answer: "Our professional resume writing service includes a comprehensive review of your existing resume, a one-on-one consultation, custom resume development by industry experts, and two rounds of revisions to ensure your complete satisfaction."
  },
  {
    question: "How do mock interviews help with job preparation?",
    answer: "Our mock interviews simulate real-world interview scenarios specific to your target role and industry. You'll receive real-time feedback, guidance on answering difficult questions, and personalized coaching to improve your confidence and performance."
  },
  {
    question: "What's included in a career strategy session?",
    answer: "Our career strategy sessions provide a holistic review of your professional goals, development of a customized career advancement plan, guidance on networking and personal branding, and actionable steps to achieve your next career milestone."
  },
  {
    question: "How long does the career coaching process take?",
    answer: "The duration varies based on your needs. Resume writing typically takes 3-5 business days, while our career coaching programs range from one-time sessions to 3-month comprehensive packages designed for significant career transitions."
  }
];

const CoreServices = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  
  return (
    <section id="core-services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Our Core HR Services</h2>
          <p className="section-subtitle">
            Comprehensive recruitment and HR solutions tailored to meet your specific needs.
          </p>
        </div>

        {/* Recruitment Services */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm animate-fade-in">
          <h3 className="text-2xl font-bold text-corporate-blue mb-6 flex items-center">
            <Users className="mr-3 text-corporate-green" />
            Recruitment Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Permanent Hiring */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-blue text-white mb-4">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-corporate-blue">Permanent Hiring</h4>
              <p className="text-gray-600">
                We connect organizations with top-tier professionals for long-term roles, ensuring the perfect match for your company culture and requirements.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Comprehensive candidate screening</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Cultural fit assessment</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Skill verification process</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contract Staffing */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-green text-white mb-4">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-corporate-blue">Contract Staffing</h4>
              <p className="text-gray-600">
                Flexible workforce solutions for project-based needs, seasonal demands, or interim positions with qualified professionals ready to contribute immediately.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Rapid deployment capability</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Pre-vetted talent pool</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Scalable team solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Executive Search */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-blue text-white mb-4">
                <Search size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-corporate-blue">Executive Search</h4>
              <p className="text-gray-600">
                Strategic recruitment of C-suite and senior leadership roles through our extensive network and discreet, thorough search methodology.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Confidential search process</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Leadership competency assessment</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-corporate-green mr-2" />
                    <span>Board and executive placements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* HR Consulting */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm animate-fade-in">
          <h3 className="text-2xl font-bold text-corporate-blue mb-6 flex items-center">
            <Briefcase className="mr-3 text-corporate-green" />
            HR Consulting
          </h3>
          
          <Tabs defaultValue="acquisition" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto bg-gray-100 p-1">
              <TabsTrigger value="acquisition" className="py-3 data-[state=active]:bg-corporate-blue data-[state=active]:text-white">
                Talent Acquisition Strategy
              </TabsTrigger>
              <TabsTrigger value="branding" className="py-3 data-[state=active]:bg-corporate-blue data-[state=active]:text-white">
                Employer Branding
              </TabsTrigger>
              <TabsTrigger value="compliance" className="py-3 data-[state=active]:bg-corporate-blue data-[state=active]:text-white">
                HR Compliance & Policies
              </TabsTrigger>
            </TabsList>
            <div className="bg-white p-6 rounded-b-lg shadow-sm">
              <TabsContent value="acquisition" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h4 className="text-xl font-bold mb-4 text-corporate-blue">Optimize Your Hiring Process</h4>
                    <p className="text-gray-700 mb-4">
                      Our talent acquisition strategy consulting helps you build efficient, effective hiring processes that attract the right candidates and reduce time-to-hire.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Hiring workflow optimization to reduce bottlenecks and improve candidate experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Technology stack assessment and recommendations for HR tools and platforms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Candidate sourcing strategy development for hard-to-fill positions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Talent Acquisition Strategy" 
                      className="rounded-lg shadow-md max-h-[300px] object-cover" 
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="branding" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h4 className="text-xl font-bold mb-4 text-corporate-blue">Build a Magnetic Employer Brand</h4>
                    <p className="text-gray-700 mb-4">
                      Position your company as an employer of choice with a compelling employer brand that resonates with your ideal candidates.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Employer value proposition development that highlights your unique culture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Candidate persona creation to target your ideal employees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Recruitment marketing strategy and employer brand content planning</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Employer Branding" 
                      className="rounded-lg shadow-md max-h-[300px] object-cover" 
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="compliance" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h4 className="text-xl font-bold mb-4 text-corporate-blue">Ensure HR Legal Compliance</h4>
                    <p className="text-gray-700 mb-4">
                      Stay compliant with employment laws and regulations while building effective, fair HR policies and procedures.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>HR policy development and employee handbook creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Employment law compliance audits and risk assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-corporate-green mr-2 mt-1 flex-shrink-0" />
                        <span>Manager training on compliant hiring and employment practices</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="HR Compliance & Policies" 
                      className="rounded-lg shadow-md max-h-[300px] object-cover" 
                    />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Industry Specializations */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm animate-fade-in">
          <h3 className="text-2xl font-bold text-corporate-blue mb-6 flex items-center">
            <Building className="mr-3 text-corporate-green" />
            Industry Specializations
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`flex flex-col items-center p-4 rounded-full transition-all ${
                  activeIndustry === industry.id 
                    ? 'bg-corporate-blue text-white scale-110' 
                    : 'bg-white text-corporate-blue hover:bg-gray-100'
                }`}
                onClick={() => setActiveIndustry(industry.id)}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 ${
                  activeIndustry === industry.id ? 'bg-white/20' : 'bg-corporate-blue/10'
                }`}>
                  <div className={activeIndustry === industry.id ? 'text-white' : 'text-corporate-blue'}>
                    {industry.icon}
                  </div>
                </div>
                <span className="text-sm font-medium">{industry.name}</span>
              </button>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ${
                  activeIndustry === industry.id ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div>
                  <h4 className="text-xl font-bold mb-4 text-corporate-blue">{industry.name} Recruitment Solutions</h4>
                  <p className="text-gray-700 mb-6">
                    {industry.description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-corporate-green">
                    <h5 className="font-bold text-corporate-blue mb-2">Why choose our {industry.name} specialists?</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-corporate-green mr-2" />
                        <span>Deep industry knowledge and network</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-corporate-green mr-2" />
                        <span>Technical expertise for skill assessment</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-corporate-green mr-2" />
                        <span>Understanding of {industry.name.toLowerCase()} market trends</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img 
                    src={`https://source.unsplash.com/random/600x400/?${industry.name.toLowerCase()},business`} 
                    alt={`${industry.name} Recruitment`} 
                    className="rounded-lg shadow-md max-h-[300px] object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Coaching */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm animate-fade-in">
          <h3 className="text-2xl font-bold text-corporate-blue mb-6 flex items-center">
            <FileText className="mr-3 text-corporate-green" />
            Resume Writing & Career Coaching
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Career Coaching" 
                className="rounded-lg shadow-md h-full max-h-[400px] w-full object-cover" 
              />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-corporate-blue">Advance Your Career</h4>
              <p className="text-gray-700 mb-6">
                Our professional resume writing and career coaching services help job seekers stand out in competitive markets and achieve their career goals.
              </p>
              
              <div className="space-y-3">
                {coachingFaqs.map((faq, index) => (
                  <Collapsible key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium bg-white hover:bg-gray-50">
                      {faq.question}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 ui-open:rotate-180">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
              
              <div className="mt-6">
                <a href="#service-inquiry" className="btn-primary group">
                  Book a Career Consultation
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
