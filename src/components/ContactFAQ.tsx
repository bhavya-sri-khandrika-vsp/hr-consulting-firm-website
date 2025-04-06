import React, { useState } from "react";
import { Search, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FAQItem = {
  question: string;
  answer: string;
  category: "general" | "employer" | "candidate";
};

const faqs: FAQItem[] = [
  {
    question: "What services does TalentBridge offer?",
    answer:
      "TalentBridge provides comprehensive recruiting services including talent acquisition, executive search, contract staffing, HR consulting, and career development resources. We serve both employers looking to hire and job seekers looking for their next opportunity.",
    category: "general",
  },
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We aim to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our office directly for immediate assistance.",
    category: "general",
  },
  {
    question: "Is there a fee for job seekers to use your services?",
    answer:
      "No, our services are completely free for job seekers. We are compensated by the hiring companies when we successfully place candidates.",
    category: "candidate",
  },
  {
    question: "How do I know if my resume was received?",
    answer:
      "When you submit your resume through our portal, you will receive an automatic confirmation email. Our team will then review your resume and contact you if there's a potential match with our open positions.",
    category: "candidate",
  },
  {
    question: "What is the typical recruitment process timeline?",
    answer:
      "Our typical recruitment process takes 3-6 weeks from initial job posting to offer acceptance. This timeline can vary based on the position's complexity, urgency, and specific client requirements.",
    category: "employer",
  },
  {
    question: "What recruiting models do you offer?",
    answer:
      "We offer several recruiting models including retained search, contingent recruitment, contract staffing, and RPO (Recruitment Process Outsourcing). We tailor our approach based on your specific hiring needs and organizational goals.",
    category: "employer",
  },
  {
    question: "How do you source candidates?",
    answer:
      "We use a multi-channel approach to source top talent, including our proprietary database of pre-screened candidates, advanced AI matching technology, professional networks, social media, industry events, and referral programs.",
    category: "employer",
  },
  {
    question: "Do you offer international recruitment services?",
    answer:
      "Yes, we can help with international recruitment needs. We have experience navigating work permits, visas, and relocation logistics for global talent acquisition.",
    category: "employer",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in technology, healthcare, finance, manufacturing, and professional services industries. Our recruiters have deep industry knowledge and networks in these sectors.",
    category: "general",
  },
];

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "general" | "employer" | "candidate"
  >("all");

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq-section" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mb-6">
            Find quick answers to common questions about our services,
            processes, and how we can help you.
          </p>

          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              onClick={() => setSelectedCategory("all")}
              variant={selectedCategory === "all" ? "default" : "outline"}
              className={
                selectedCategory === "all"
                  ? "bg-corporate-blue text-white"
                  : "text-gray-700"
              }
            >
              All Questions
            </Button>
            <Button
              onClick={() => setSelectedCategory("general")}
              variant={selectedCategory === "general" ? "default" : "outline"}
              className={
                selectedCategory === "general"
                  ? "bg-corporate-blue text-white"
                  : "text-gray-700"
              }
            >
              General
            </Button>
            <Button
              onClick={() => setSelectedCategory("employer")}
              variant={selectedCategory === "employer" ? "default" : "outline"}
              className={
                selectedCategory === "employer"
                  ? "bg-corporate-blue text-white"
                  : "text-gray-700"
              }
            >
              For Employers
            </Button>
            <Button
              onClick={() => setSelectedCategory("candidate")}
              variant={selectedCategory === "candidate" ? "default" : "outline"}
              className={
                selectedCategory === "candidate"
                  ? "bg-corporate-blue text-white"
                  : "text-gray-700"
              }
            >
              For Candidates
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-corporate-blue transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      Was this answer helpful?
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm" className="text-sm">
                        Yes
                      </Button>
                      <Button variant="outline" size="sm" className="text-sm">
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any FAQs matching your search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="mr-2"
              >
                Clear Filters
              </Button>
              <Button className="bg-corporate-blue text-white">
                <Mail className="mr-2 h-4 w-4" />
                Ask Us Directly
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
