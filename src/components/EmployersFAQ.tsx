
import React, { useState } from 'react';
import { ArrowRight, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// FAQ data organized by categories
const faqData = {
  process: [
    {
      question: "How does your recruitment process work?",
      answer: "Our recruitment process follows a proven 6-step methodology: initial consultation, job requirement analysis, targeted talent sourcing, rigorous candidate screening, personalized candidate presentation, and hiring support. We tailor each step to your specific needs while maintaining consistent communication throughout the process."
    },
    {
      question: "How quickly can you find candidates for our open positions?",
      answer: "For most positions, we deliver a shortlist of qualified candidates within 7-10 business days of finalizing your requirements. For specialized or executive roles, the timeline may extend to 2-3 weeks to ensure we find the perfect match. We'll always provide you with a realistic timeline during our initial consultation."
    },
    {
      question: "What information do you need from us to get started?",
      answer: "To get started, we need your job description, key requirements, salary range, company culture information, and hiring timeline. The more details you provide, the better we can match candidates to your needs. Our job requirements form will guide you through providing all essential information."
    }
  ],
  costs: [
    {
      question: "What are your fee structures and pricing models?",
      answer: "We offer flexible pricing models including contingency-based recruitment (percentage of annual salary), retained search for executive positions, and project-based hiring for multiple roles. We'll recommend the most cost-effective approach based on your specific hiring needs during our initial consultation."
    },
    {
      question: "Do you offer any guarantees on your placements?",
      answer: "Yes, we stand behind our placements with a replacement guarantee. If a candidate doesn't work out within the first 90 days (subject to terms in our agreement), we'll find a replacement at no additional cost. This reflects our confidence in our rigorous vetting process and commitment to your satisfaction."
    },
    {
      question: "Are there any upfront costs or retainer fees?",
      answer: "For standard positions, we work on a contingency basis with no upfront fees - you only pay when you hire our candidates. For executive or highly specialized roles, we may recommend a retained search model with a structured payment schedule to ensure dedicated resources for your critical positions."
    }
  ],
  specialization: [
    {
      question: "Which industries do you specialize in?",
      answer: "We specialize in Technology, Finance, Healthcare, Manufacturing, and Professional Services. Our recruiters have industry-specific expertise and networks, allowing them to understand the unique requirements and talent landscapes of each sector. This specialization ensures we can identify candidates with the right technical skills and cultural fit."
    },
    {
      question: "Can you handle high-volume hiring needs?",
      answer: "Yes, we have extensive experience with high-volume recruitment projects. For such needs, we implement customized project plans with dedicated recruitment teams, streamlined processes, and regular progress reporting to ensure efficient and quality hiring at scale."
    },
    {
      question: "Do you work with startups and small businesses or just large enterprises?",
      answer: "We work with organizations of all sizes, from funded startups to global enterprises. We tailor our approach to match your company's stage, budget constraints, and growth objectives. For startups and small businesses, we offer specialized packages designed to maximize your hiring budget."
    }
  ],
  methodology: [
    {
      question: "How do you ensure candidates are a good cultural fit?",
      answer: "We assess cultural fit through a combination of structured interviews, behavioral assessments, and scenario-based questions aligned with your company values. We take time to understand your unique culture and work environment, then develop a customized evaluation framework that goes beyond technical skills to ensure alignment with your organization's values and working style."
    },
    {
      question: "What screening processes do you use to evaluate candidates?",
      answer: "Our comprehensive screening includes initial application review, skills assessments, behavioral interviews, technical evaluations (for specialized roles), reference checks, and cultural fit assessment. For senior positions, we also conduct leadership assessments and background verifications. This multi-layered approach ensures candidates meet both technical requirements and soft skill needs."
    },
    {
      question: "Do you offer any additional services beyond recruitment?",
      answer: "Yes, we provide complementary services including compensation analysis, market insights, employer branding consultation, onboarding support, and retention strategy development. These additional services help create a comprehensive talent acquisition strategy that extends beyond just filling positions."
    }
  ]
};

// All questions in a single array for search functionality
const allQuestions = Object.values(faqData).flat();

const EmployersFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState(allQuestions);
  
  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredQuestions(allQuestions);
      return;
    }
    
    const filtered = allQuestions.filter(
      item => 
        item.question.toLowerCase().includes(term.toLowerCase()) || 
        item.answer.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredQuestions(filtered);
  };
  
  // Toggle category view
  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  
  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Get answers to common questions about our employer services and recruitment process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 bg-gradient-to-r from-corporate-blue to-corporate-darkBlue">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="search"
                  placeholder="Search for answers..." 
                  className="pl-10 bg-white border-0 h-12 text-base focus-visible:ring-corporate-green"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            {searchTerm ? (
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Search Results ({filteredQuestions.length})</h3>
                {filteredQuestions.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredQuestions.map((item, index) => (
                      <AccordionItem key={index} value={`search-item-${index}`}>
                        <AccordionTrigger className="text-left hover:text-corporate-blue font-medium py-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-6">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-8">
                    <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <h4 className="text-lg font-medium text-gray-600">No matching questions found</h4>
                    <p className="text-gray-500 mb-6">Try a different search term or browse our categories</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchTerm('')}
                      className="border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white"
                    >
                      View All FAQs
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div>
                  <div className="space-y-4">
                    {Object.entries(faqData).map(([category, questions], index) => (
                      <Card key={index} className={`overflow-hidden transition-all duration-200 ${activeCategory === category ? 'ring-2 ring-corporate-blue shadow-md' : 'shadow-sm'}`}>
                        <Collapsible open={activeCategory === category} onOpenChange={() => toggleCategory(category)}>
                          <CollapsibleTrigger className="w-full">
                            <div className={`p-4 text-left font-medium flex justify-between items-center cursor-pointer ${activeCategory === category ? 'bg-corporate-blue text-white' : 'bg-gray-50 hover:bg-gray-100'}`}>
                              <span className="capitalize">{category} Questions</span>
                              <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${activeCategory === category ? 'rotate-90 text-white' : ''}`} />
                            </div>
                          </CollapsibleTrigger>
                          
                          <CollapsibleContent>
                            <CardContent className="p-4">
                              <ul className="space-y-2">
                                {questions.map((item, qIndex) => (
                                  <li key={qIndex}>
                                    <button 
                                      className="text-left w-full py-2 px-3 rounded-md hover:bg-gray-50 text-gray-700 hover:text-corporate-blue transition-colors"
                                      onClick={() => {
                                        document.getElementById(`faq-${category}-${qIndex}`)?.scrollIntoView({ behavior: 'smooth' });
                                      }}
                                    >
                                      {item.question}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  {Object.entries(faqData).map(([category, questions]) => (
                    <div key={category} id={`faq-category-${category}`} className={activeCategory && activeCategory !== category ? 'opacity-50' : ''}>
                      <h3 className="text-xl font-semibold text-corporate-blue mb-4 capitalize">{category} Questions</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {questions.map((item, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${category}-item-${index}`}
                            id={`faq-${category}-${index}`}
                            className="border-b border-gray-200"
                          >
                            <AccordionTrigger className="text-left hover:text-corporate-blue py-4">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-600">Can't find what you're looking for?</p>
                <Button className="bg-corporate-green hover:bg-corporate-lightGreen text-white group">
                  Ask Us Directly
                  <MessageSquare className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-[-2px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployersFAQ;
