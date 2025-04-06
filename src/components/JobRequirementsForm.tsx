
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Send, Briefcase, Building, Users, Clock, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  jobTitle: z.string().min(3, {
    message: "Job title must be at least 3 characters.",
  }),
  industry: z.string().min(2, {
    message: "Please select your industry.",
  }),
  teamSize: z.string().min(1, {
    message: "Please indicate your team size.",
  }),
  timeline: z.string().min(1, {
    message: "Please specify your hiring timeline.",
  }),
  requirements: z.string().min(10, {
    message: "Please provide more details about your requirements.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const JobRequirementsForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      jobTitle: "",
      industry: "",
      teamSize: "",
      timeline: "",
      requirements: "",
      contactName: "",
      contactEmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Job requirements submitted!",
      description: "Our team will reach out to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section className="section-padding bg-gray-50" id="job-requirements">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Submit Your Job Requirements</h2>
          <p className="section-subtitle mx-auto">
            Tell us about your hiring needs and we'll match you with exceptional talent tailored to your organization
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-white shadow-md border-l-4 border-corporate-blue p-6">
              <CardHeader className="p-0 pb-4">
                <div className="w-12 h-12 rounded-full bg-corporate-blue/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-corporate-blue" />
                </div>
                <CardTitle className="text-xl text-corporate-blue">Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600">Receive a curated shortlist of qualified candidates within 7 days of submitting your requirements.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border-l-4 border-corporate-green p-6">
              <CardHeader className="p-0 pb-4">
                <div className="w-12 h-12 rounded-full bg-corporate-green/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-corporate-green" />
                </div>
                <CardTitle className="text-xl text-corporate-green">Quality Matches</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600">Our rigorous vetting process ensures you only see candidates who truly fit your requirements and culture.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border-l-4 border-corporate-lightBlue p-6">
              <CardHeader className="p-0 pb-4">
                <div className="w-12 h-12 rounded-full bg-corporate-lightBlue/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-corporate-lightBlue" />
                </div>
                <CardTitle className="text-xl text-corporate-lightBlue">End-to-End Support</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600">From job description refinement to final negotiations, we support you at every step of the hiring journey.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="md:col-span-3 shadow-lg border border-gray-200">
            <CardHeader className="bg-gradient-to-r from-corporate-blue to-corporate-darkBlue text-white rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Briefcase className="mr-2 h-6 w-6" />
                Job Requirement Form
              </CardTitle>
              <CardDescription className="text-white/80">
                All fields are confidential and protected by our privacy policy
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Position you're hiring for" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Input placeholder="Your industry sector" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <FormControl>
                            <Input placeholder="Number of people in your team" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hiring Timeline</FormLabel>
                          <FormControl>
                            <Input placeholder="When do you need to fill this position?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your work email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Requirements & Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe the key requirements, skills, and qualifications for this role" 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-corporate-green hover:bg-corporate-lightGreen text-white group"
                  >
                    Submit Requirements
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 text-xs text-gray-500 rounded-b-lg text-center">
              By submitting this form, you agree to our Terms of Service and Privacy Policy
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JobRequirementsForm;
