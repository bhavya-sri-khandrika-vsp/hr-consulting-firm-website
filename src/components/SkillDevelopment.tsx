
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Award, Tag, PlayCircle, ChevronRight } from 'lucide-react';

// Course data
const courses = [
  {
    id: 1,
    title: "Technical Interview Mastery",
    description: "Learn how to solve coding problems and answer technical questions with confidence.",
    level: "Intermediate",
    duration: "4 hours",
    rating: 4.8,
    students: 1245,
    price: "Free",
    tags: ["Most Popular", "Technical", "Coding"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Mastering LinkedIn for Job Search",
    description: "Optimize your LinkedIn profile and leverage the platform to find the right opportunities.",
    level: "Beginner",
    duration: "2.5 hours",
    rating: 4.7,
    students: 3560,
    price: "Free",
    tags: ["In-Demand", "Personal Branding"],
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    title: "Data Analysis with Python",
    description: "Essential Python skills for analyzing data and creating visualizations for business insights.",
    level: "Intermediate",
    duration: "8 hours",
    rating: 4.9,
    students: 2340,
    price: "$49.99",
    tags: ["In-Demand Skills", "Technical"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Business Communication",
    description: "Develop clear, concise, and effective professional communication skills.",
    level: "All Levels",
    duration: "3 hours",
    rating: 4.6,
    students: 1800,
    price: "Free",
    tags: ["Soft Skills", "Free"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: 5,
    title: "UX/UI Design Fundamentals",
    description: "Learn the principles of user-centered design and create amazing digital experiences.",
    level: "Beginner",
    duration: "6 hours",
    rating: 4.7,
    students: 1560,
    price: "$39.99",
    tags: ["Creative", "Technical"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Project Management Essentials",
    description: "Master the fundamentals of project planning, execution, and monitoring.",
    level: "Intermediate",
    duration: "5 hours",
    rating: 4.8,
    students: 2100,
    price: "$29.99",
    tags: ["Certification", "Management"],
    image: "https://images.unsplash.com/photo-1590402494582-44b93c3f251f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Filter options
const filterOptions = [
  { id: "all", label: "All Courses" },
  { id: "free", label: "Free" },
  { id: "popular", label: "Most Popular" },
  { id: "in-demand", label: "In-Demand Skills" },
  { id: "certification", label: "Certifications" }
];

const SkillDevelopment = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const filteredCourses = courses.filter(course => {
    if (activeFilter === "all") return true;
    if (activeFilter === "free") return course.price === "Free";
    return course.tags.some(tag => 
      tag.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section className="py-16 bg-corporate-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">Upskill to Outshine</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Access our curated learning paths and job-focused training modules to advance your career.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterOptions.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={activeFilter === filter.id ? "bg-corporate-blue" : ""}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.id === "free" && <Tag className="mr-1 h-4 w-4" />}
              {filter.id === "popular" && <Star className="mr-1 h-4 w-4" />}
              {filter.id === "in-demand" && <Award className="mr-1 h-4 w-4" />}
              {filter.id === "certification" && <Award className="mr-1 h-4 w-4" />}
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card 
              key={course.id} 
              className="overflow-hidden transition-all hover:shadow-lg group"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Star 
                            key={index} 
                            className={`h-4 w-4 ${index < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm">{course.rating} ({course.students} students)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {hoveredCourse === course.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                    <Button className="bg-white text-corporate-blue hover:bg-white/90 group">
                      <PlayCircle className="mr-2 h-5 w-5 text-corporate-blue group-hover:text-corporate-darkBlue" />
                      Preview Course
                    </Button>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-corporate-blue transition-colors">
                    {course.title}
                  </CardTitle>
                </div>
                <CardDescription>
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        tag.includes("Popular") ? "bg-yellow-100 text-yellow-700" : 
                        tag.includes("Demand") ? "bg-blue-100 text-blue-700" : 
                        tag.includes("Free") ? "bg-green-100 text-green-700" :
                        tag.includes("Technical") ? "bg-purple-100 text-purple-700" :
                        tag.includes("Soft") ? "bg-pink-100 text-pink-700" :
                        tag.includes("Certification") ? "bg-orange-100 text-orange-700" :
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <div className="font-bold text-lg">
                  {course.price}
                </div>
                <Button className="bg-corporate-green hover:bg-corporate-lightGreen">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white">
            View All Courses <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopment;
