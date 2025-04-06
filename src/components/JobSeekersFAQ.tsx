
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// FAQ data
const faqData = {
  general: [
    {
      question: "How does your job placement service work?",
      answer: "Our job placement service works through a personalized approach. After creating your profile, our specialized recruiters match your skills and preferences with suitable opportunities. We provide resume optimization, interview preparation, and continuous support throughout the application process. We maintain relationships with diverse employers across industries to ensure a wide range of opportunities."
    },
    {
      question: "Is there a fee for job seekers?",
      answer: "No, our services are completely free for job seekers. We're compensated by the employers when we successfully place candidates. This ensures our interests are aligned with yours - we only succeed when you do."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We cover a wide range of industries including technology, finance, healthcare, marketing, manufacturing, education, and retail. Our specialized recruiters have in-depth knowledge of their respective sectors, ensuring quality placements."
    }
  ],
  resume: [
    {
      question: "How can I improve my resume to get more interviews?",
      answer: "To improve your resume, focus on highlighting relevant achievements with measurable results, customize it for each application, use industry-specific keywords for ATS systems, keep formatting clean and consistent, include a concise professional summary, and ensure it's error-free. Our team offers personalized resume reviews to provide specific improvements for your situation."
    },
    {
      question: "What is ATS optimization and why does it matter?",
      answer: "ATS (Applicant Tracking System) optimization means formatting your resume and including relevant keywords so it can be properly parsed by the software companies use to filter applications. It matters because up to 75% of resumes are rejected before a human even sees them. Our consultants can help optimize your resume to pass through these systems."
    },
    {
      question: "Should I include a cover letter with my application?",
      answer: "Yes, whenever possible, include a customized cover letter. It allows you to elaborate on your experience, explain employment gaps, showcase your writing skills, and demonstrate your interest in the specific role. Our service includes cover letter templates and personalized guidance for writing effective ones."
    }
  ],
  application: [
    {
      question: "What happens after I apply for a job through your service?",
      answer: "After applying, our recruitment team reviews your application and matches it with the position requirements. If there's a good fit, we contact you for an initial discussion and may suggest preparations for the interview. We communicate with the employer on your behalf and keep you updated throughout the process. We provide feedback regardless of the outcome and continue to suggest other opportunities."
    },
    {
      question: "How long does the application process typically take?",
      answer: "The timeline varies depending on the employer and position. Generally, you can expect: 1-3 days for initial screening, 1-2 weeks for first interviews, and 2-4 weeks for the complete process from application to offer. Some technical or senior positions may take longer due to multiple interview rounds. We work to keep the process moving efficiently while respecting employer timelines."
    },
    {
      question: "Can I apply for multiple positions simultaneously?",
      answer: "Yes, you can apply for multiple positions that match your skills and interests. In fact, we often recommend this approach to maximize your opportunities. We carefully manage these applications to ensure there are no conflicts, and we communicate transparently with all parties involved."
    }
  ],
  interview: [
    {
      question: "How should I prepare for a job interview?",
      answer: "Prepare for your interview by researching the company thoroughly (mission, products, culture, recent news), reviewing the job description to align your experience with requirements, practicing answers to common questions, preparing examples that demonstrate your skills, formulating thoughtful questions for interviewers, planning your professional attire, and conducting mock interviews. Our career coaches offer specialized interview preparation sessions."
    },
    {
      question: "What are common interview mistakes to avoid?",
      answer: "Common interview mistakes include: insufficient research about the company, arriving late, inappropriate attire, speaking negatively about previous employers, failing to provide specific examples, not asking questions, appearing disinterested, poor body language, over-sharing personal information, and not following up afterward. Our interview coaching helps candidates avoid these pitfalls."
    },
    {
      question: "How do I answer the 'What's your greatest weakness?' question?",
      answer: "When answering about weaknesses, choose a genuine but non-critical skill, explain how you've recognized this area for improvement, and most importantly, describe the specific steps you're taking to overcome it. For example: 'I've sometimes been hesitant to delegate tasks, preferring to ensure quality by handling everything myself. I've recognized this limits team development, so I've been intentionally assigning projects based on team members' strengths and implementing check-in processes that satisfy my quality concerns while developing my team's capabilities.'"
    }
  ]
};

const JobSeekersFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setActiveCategory(category);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <section className="py-16 bg-corporate-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get answers to common questions about our job seeking services.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="bg-gray-50 md:bg-white p-4 md:p-6 md:border-r">
                <h3 className="font-semibold text-lg mb-4 text-corporate-blue">Categories</h3>
                <nav className="space-y-1">
                  {Object.keys(faqData).map((category) => (
                    <button
                      key={category}
                      className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center ${
                        activeCategory === category 
                          ? 'bg-corporate-blue text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => toggleCategory(category)}
                    >
                      <ChevronRight className={`h-4 w-4 mr-2 transition-transform ${
                        activeCategory === category ? 'rotate-90 text-white' : ''
                      }`} />
                      <span className="capitalize">{category}</span>
                    </button>
                  ))}
                </nav>
              </div>
              <div className="col-span-1 md:col-span-3 p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-4 text-corporate-blue capitalize">
                  {activeCategory} Questions
                </h3>
                <div className="space-y-4">
                  {faqData[activeCategory as keyof typeof faqData].map((item, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Collapsible open={openQuestions[`${activeCategory}-${idx}`]} onOpenChange={() => toggleQuestion(`${activeCategory}-${idx}`)}>
                          <CollapsibleTrigger className="w-full">
                            <div className={`p-4 text-left font-medium flex justify-between items-center cursor-pointer ${
                              openQuestions[`${activeCategory}-${idx}`] 
                                ? 'bg-corporate-blue text-white' 
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}>
                              <span>{item.question}</span>
                              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                                openQuestions[`${activeCategory}-${idx}`] ? 'rotate-180 text-white' : ''
                              }`} />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="p-4 text-gray-700 bg-white">
                              <p>{item.answer}</p>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-corporate-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-corporate-blue text-lg">Still have questions?</h4>
                  <p className="text-gray-600">Our expert team is here to help you</p>
                </div>
              </div>
              <Button className="bg-corporate-blue hover:bg-corporate-darkBlue">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekersFAQ;
