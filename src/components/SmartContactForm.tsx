import React, { useState } from "react";
import {
  Briefcase,
  User,
  HelpCircle,
  Calendar,
  CheckCircle,
  Send,
  Paperclip,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type InquiryType = "employers" | "candidates" | "general";

const SmartContactForm = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleTabChange = (type: InquiryType) => {
    setInquiryType(type);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, "Type:", inquiryType);
    // Here you would typically send the form data to a server
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  const getSubjectOptions = () => {
    switch (inquiryType) {
      case "employers":
        return [
          "Hiring Needs",
          "Recruitment Services",
          "Talent Consultation",
          "Account Management",
          "Pricing & Plans",
        ];
      case "candidates":
        return [
          "Job Application",
          "Resume Review",
          "Career Advice",
          "Interview Preparation",
          "Salary Negotiation",
        ];
      case "general":
      default:
        return [
          "General Inquiry",
          "Feedback",
          "Partnerships",
          "Media Relations",
          "Technical Support",
        ];
    }
  };

  return (
    <section
      id="contact-form"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">How Can We Assist You Today?</h2>
          <p className="section-subtitle">
            Select your inquiry type below for a tailored experience. Our team
            is ready to help with your specific needs.
          </p>
        </div>

        {/* Form Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-0">
          <button
            onClick={() => handleTabChange("employers")}
            className={`flex items-center px-5 py-3 rounded-l-lg transition-all duration-300 border-y border-l border-gray-300 ${
              inquiryType === "employers"
                ? "bg-corporate-blue text-white font-medium"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            <span>Employers</span>
          </button>

          <button
            onClick={() => handleTabChange("candidates")}
            className={`flex items-center px-5 py-3 transition-all duration-300 border border-gray-300 ${
              inquiryType === "candidates"
                ? "bg-corporate-blue text-white font-medium"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <User className="mr-2 h-5 w-5" />
            <span>Candidates</span>
          </button>

          <button
            onClick={() => handleTabChange("general")}
            className={`flex items-center px-5 py-3 rounded-r-lg transition-all duration-300 border-y border-r border-gray-300 ${
              inquiryType === "general"
                ? "bg-corporate-blue text-white font-medium"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            <span>General</span>
          </button>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          {formSubmitted ? (
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-corporate-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You for Reaching Out!
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your message and will get back to you within 24
                hours. A confirmation has been sent to your email.
              </p>
              <Button
                onClick={() => setFormSubmitted(false)}
                className="bg-corporate-blue hover:bg-corporate-darkBlue text-white"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold text-corporate-blue mb-1">
                  {inquiryType === "employers" && "Employer Inquiry"}
                  {inquiryType === "candidates" && "Candidate Inquiry"}
                  {inquiryType === "general" && "General Inquiry"}
                </h3>
                <p className="text-gray-600">
                  {inquiryType === "employers" &&
                    "Looking to hire talent or learn about our recruitment services?"}
                  {inquiryType === "candidates" &&
                    "Need help with your job search or career advancement?"}
                  {inquiryType === "general" &&
                    "Have questions or feedback about TalentBridge?"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name*
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name*
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address*
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <Label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject*
                  </Label>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-gray-500"
                      >
                        Need help? <HelpCircle className="ml-1 h-3 w-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="text-sm">
                        <h4 className="font-medium mb-2">Choosing a Subject</h4>
                        <p className="text-gray-600 mb-2">
                          Select the most relevant topic for your inquiry to
                          help us route your message to the right team.
                        </p>
                        <ul className="list-disc pl-4 text-gray-600">
                          <li>Specific subjects get faster responses</li>
                          <li>You can always change the subject later</li>
                        </ul>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Select a subject</option>
                  {getSubjectOptions().map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message*
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full"
                  placeholder={`Tell us how we can help with your ${
                    inquiryType === "employers"
                      ? "hiring needs"
                      : inquiryType === "candidates"
                      ? "job search"
                      : "inquiry"
                  }...`}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center">
                  <Button
                    type="button"
                    variant="outline"
                    className="mr-4 text-gray-600"
                  >
                    <Paperclip className="mr-2 h-4 w-4" />
                    Attach File
                  </Button>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="text-gray-600"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule a Call
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="text-sm">
                        <h4 className="font-medium mb-2">
                          Book a Video or Phone Call
                        </h4>
                        <p className="text-gray-600 mb-3">
                          Prefer to talk directly? Schedule a 30-minute
                          consultation with our team.
                        </p>
                        <Button className="w-full bg-corporate-blue hover:bg-corporate-darkBlue text-white">
                          View Available Times
                        </Button>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-corporate-green hover:bg-corporate-lightGreen text-white group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartContactForm;
