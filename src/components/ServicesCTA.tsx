
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, UserCheck, Building } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type UserType = 'employer' | 'job-seeker' | null;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service: string;
}

const ServicesCTA = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create form
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: ''
    }
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', values);
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const userTypeOptions = [
    {
      id: 'employer',
      title: 'I am an Employer',
      description: 'Looking to hire talent or need HR consulting services',
      icon: <Building className="h-8 w-8" />,
      services: [
        'Permanent Hiring',
        'Contract Staffing',
        'Executive Search',
        'HR Consulting',
        'Employer Branding'
      ]
    },
    {
      id: 'job-seeker',
      title: 'I am a Job Seeker',
      description: 'Looking for career opportunities or professional development',
      icon: <UserCheck className="h-8 w-8" />,
      services: [
        'Resume Writing',
        'Career Coaching',
        'Job Search Strategy',
        'Interview Preparation',
        'Salary Negotiation'
      ]
    }
  ]

  return (
    <section id="service-inquiry" className="section-padding bg-gradient-to-r from-corporate-blue to-corporate-darkBlue text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90">
            Tell us about your needs, and our team will help you find the right solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
          {!userType ? (
            // User type selection
            <div className="p-8">
              <h3 className="text-corporate-blue text-2xl font-bold text-center mb-8">
                How can we help you today?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userTypeOptions.map((option) => (
                  <div
                    key={option.id}
                    className="bg-gray-50 rounded-lg p-6 border-2 border-transparent hover:border-corporate-blue transition-all duration-300 cursor-pointer card-hover"
                    onClick={() => setUserType(option.id as UserType)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-corporate-blue/10 text-corporate-blue rounded-full flex items-center justify-center mb-4">
                        {option.icon}
                      </div>
                      <h4 className="text-xl font-bold text-corporate-blue mb-2">{option.title}</h4>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      <Button className="group">
                        Select
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Inquiry form based on user type
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-corporate-blue p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {userType === 'employer' ? 'Employer Services' : 'Job Seeker Services'}
                </h3>
                
                <p className="mb-6 opacity-90">
                  {userType === 'employer' 
                    ? 'Discover how we can help you find the right talent and optimize your HR processes.'
                    : 'Let us help you advance your career and stand out in the job market.'}
                </p>
                
                <div className="space-y-3">
                  {userTypeOptions.find(opt => opt.id === userType)?.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-white mr-2 mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={() => setUserType(null)}
                    className="text-white underline hover:text-opacity-80 transition-all"
                  >
                    &larr; Change selection
                  </button>
                </div>
              </div>
              
              <div className="p-8 col-span-2">
                <h3 className="text-corporate-blue text-2xl font-bold mb-6">Tell Us About Your Needs</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <input
                                placeholder="Your name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <input
                                type="email"
                                placeholder="Your email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <input
                                placeholder="Your phone number"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {userType === 'employer' && (
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <input
                                  placeholder="Your company"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      
                      {userType === 'job-seeker' && (
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interested In</FormLabel>
                              <FormControl>
                                <select
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                                  {...field}
                                >
                                  <option value="">Select a service</option>
                                  {userTypeOptions.find(opt => opt.id === userType)?.services.map((service, idx) => (
                                    <option key={idx} value={service}>{service}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Tell us more about your needs..."
                              className="w-full p-3 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className={`w-full py-3 bg-corporate-green hover:bg-corporate-lightGreen text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'animate-pulse' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      {!isSubmitting && <ArrowRight className="ml-2" size={20} />}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
