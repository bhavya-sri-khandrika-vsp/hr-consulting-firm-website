
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Video, Book, Mic, Bookmark, BookmarkCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Resources data
const resources = {
  resumeTips: [
    {
      id: 1,
      title: "Creating an ATS-Friendly Resume",
      description: "Learn how to optimize your resume to pass through Applicant Tracking Systems.",
      type: "article",
      duration: "5 min read",
      author: "Leslie Morgan, HR Director"
    },
    {
      id: 2,
      title: "Resume Do's and Don'ts",
      description: "Essential tips for creating a professional resume that stands out.",
      type: "video",
      duration: "8:24",
      author: "Career Development Team"
    },
    {
      id: 3,
      title: "Resume Templates for Different Industries",
      description: "Download professionally designed templates tailored for specific sectors.",
      type: "download",
      duration: "5 templates",
      author: "Design Team"
    }
  ],
  interviewPreparation: [
    {
      id: 4,
      title: "Mastering Behavioral Questions",
      description: "How to structure your answers using the STAR method.",
      type: "article",
      duration: "7 min read",
      author: "James Wilson, Interview Coach"
    },
    {
      id: 5,
      title: "Mock Interview Techniques",
      description: "Practice techniques to build confidence and reduce interview anxiety.",
      type: "video",
      duration: "15:30",
      author: "Sarah Johnson, Career Consultant"
    },
    {
      id: 6,
      title: "50 Most Common Interview Questions",
      description: "Prepare answers for these frequently asked questions across industries.",
      type: "download",
      duration: "PDF Guide",
      author: "Recruitment Team"
    }
  ],
  workplaceTrends: [
    {
      id: 7,
      title: "Remote Work Trends in 2025",
      description: "How companies are adapting to hybrid and remote work models.",
      type: "article",
      duration: "10 min read",
      author: "Mark Stevens, Workplace Analyst"
    },
    {
      id: 8,
      title: "The Future of AI in the Workplace",
      description: "Understanding how AI is changing job roles and necessary skills.",
      type: "podcast",
      duration: "32:45",
      author: "Tech Insights Podcast"
    },
    {
      id: 9,
      title: "Salary Trends Report 2025",
      description: "Comprehensive analysis of compensation trends across industries.",
      type: "download",
      duration: "Full Report",
      author: "Analytics Department"
    }
  ],
  softSkills: [
    {
      id: 10,
      title: "Emotional Intelligence in Leadership",
      description: "How to develop and demonstrate EQ in the workplace.",
      type: "article",
      duration: "8 min read",
      author: "Dr. Emily Chen, Psychologist"
    },
    {
      id: 11,
      title: "Effective Communication Techniques",
      description: "Master verbal and non-verbal communication for professional settings.",
      type: "video",
      duration: "12:15",
      author: "Communication Skills Academy"
    },
    {
      id: 12,
      title: "Conflict Resolution Workshop",
      description: "Interactive exercises to improve conflict management skills.",
      type: "workshop",
      duration: "45 min",
      author: "HR Development Team"
    }
  ]
};

const CareerResources = () => {
  const [savedResources, setSavedResources] = useState<number[]>([]);

  const toggleSaveResource = (id: number) => {
    if (savedResources.includes(id)) {
      setSavedResources(savedResources.filter(resourceId => resourceId !== id));
    } else {
      setSavedResources([...savedResources, id]);
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'download':
        return <FileText className="h-5 w-5" />;
      case 'podcast':
        return <Mic className="h-5 w-5" />;
      case 'workshop':
        return <Book className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">Career Resources – Learn While You Search</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Enhance your job search with expert insights, tips, and tools to help you stand out.</p>
        </div>
        
        <Tabs defaultValue="resumeTips" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="resumeTips" className="text-sm md:text-base">Resume Tips</TabsTrigger>
            <TabsTrigger value="interviewPreparation" className="text-sm md:text-base">Interview Preparation</TabsTrigger>
            <TabsTrigger value="workplaceTrends" className="text-sm md:text-base">Workplace Trends</TabsTrigger>
            <TabsTrigger value="softSkills" className="text-sm md:text-base">Soft Skill Building</TabsTrigger>
          </TabsList>
          
          {Object.entries(resources).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden transition-all hover:shadow-md group">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-2">
                          <span className={`p-2 rounded-full ${
                            resource.type === 'article' ? 'bg-blue-100 text-blue-600' : 
                            resource.type === 'video' ? 'bg-red-100 text-red-600' : 
                            resource.type === 'podcast' ? 'bg-purple-100 text-purple-600' : 
                            resource.type === 'workshop' ? 'bg-green-100 text-green-600' : 
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {getResourceIcon(resource.type)}
                          </span>
                          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            {resource.type}
                          </span>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => toggleSaveResource(resource.id)}
                        >
                          {savedResources.includes(resource.id) ? 
                            <BookmarkCheck className="h-5 w-5 text-corporate-blue fill-corporate-blue" /> : 
                            <Bookmark className="h-5 w-5 text-gray-400 group-hover:text-corporate-blue transition-colors" />
                          }
                        </Button>
                      </div>
                      <CardTitle className="text-xl group-hover:text-corporate-blue transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <Collapsible>
                        <CollapsibleTrigger className="text-sm text-corporate-blue hover:underline">View Details</CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 text-sm text-gray-600 space-y-2 animate-accordion-down">
                          <p><strong>Created by:</strong> {resource.author}</p>
                          <p><strong>Duration:</strong> {resource.duration}</p>
                          <p className="text-gray-500 italic">
                            This resource will help you develop important skills for your career journey.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button className="w-full bg-corporate-blue hover:bg-corporate-darkBlue text-white">
                        {resource.type === 'download' ? 'Download' : 
                         resource.type === 'article' ? 'Read Article' : 
                         resource.type === 'video' ? 'Watch Video' : 
                         resource.type === 'podcast' ? 'Listen Now' : 
                         resource.type === 'workshop' ? 'Start Workshop' : 
                         'Access Resource'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CareerResources;
