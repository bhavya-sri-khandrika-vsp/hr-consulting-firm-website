
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Briefcase, Calendar, ChevronRight, Star, DollarSign } from 'lucide-react';

// Featured jobs data
const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    salary: "$120K - $150K",
    jobType: "Full-time",
    experience: "5+ years",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    postedDate: "2 days ago",
    rating: 4.8
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Global Brands Ltd.",
    location: "New York, NY",
    salary: "$90K - $110K",
    jobType: "Full-time",
    experience: "3-5 years",
    skills: ["Digital Marketing", "Social Media", "Analytics", "Content Strategy"],
    postedDate: "1 week ago",
    rating: 4.5
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Remote",
    salary: "$80K - $100K",
    jobType: "Contract",
    experience: "2+ years",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
    postedDate: "3 days ago",
    rating: 4.7
  },
  {
    id: 4,
    title: "Financial Analyst",
    company: "Secure Investments",
    location: "Chicago, IL",
    salary: "$85K - $95K",
    jobType: "Full-time",
    experience: "2-4 years",
    skills: ["Financial Modeling", "Excel", "Data Analysis", "Reporting"],
    postedDate: "5 days ago",
    rating: 4.4
  }
];

const JobSearch = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">Find Your Perfect Role</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Search through thousands of curated positions that match your skills and career goals.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Job title or keyword" 
                className="pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Location" 
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Industry" 
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Experience" 
                className="pl-10"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="bg-corporate-blue hover:bg-corporate-darkBlue px-8">
              <Search className="mr-2 h-4 w-4" />
              Search Jobs
            </Button>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-corporate-blue">Featured Jobs</h3>
            <Button variant="ghost" className="text-corporate-blue hover:text-corporate-darkBlue hover:bg-corporate-blue/10">
              View All Jobs <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-corporate-blue group-hover:text-corporate-lightBlue transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                      <span className="text-sm ml-1">{job.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{job.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{job.postedDate}</span>
                  <Button size="sm" className="bg-corporate-green hover:bg-corporate-lightGreen text-white">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
