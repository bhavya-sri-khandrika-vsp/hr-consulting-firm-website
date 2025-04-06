
import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Heart, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Success stories data
const successStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    quote: "After 6 months of searching with no luck, I worked with the team who helped me improve my resume and interview skills. Within 3 weeks, I landed my dream job at a top tech company!",
    reactions: { likes: 34, loves: 12, comments: 8 }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Designer",
    company: "Creative Digital Agency",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    quote: "The career coaching and portfolio review services were invaluable. They helped me transform my work and presentation style, which ultimately led to multiple job offers.",
    reactions: { likes: 42, loves: 18, comments: 5 }
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Marketing Director",
    company: "Global Brands Inc.",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    quote: "As a career changer, I was struggling to position myself in the marketing industry. The personalized guidance helped me leverage my transferable skills and find my perfect role.",
    reactions: { likes: 28, loves: 21, comments: 7 }
  },
  {
    id: 4,
    name: "David Patel",
    role: "Financial Analyst",
    company: "Investment Partners Ltd.",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    quote: "The specific industry knowledge and connections of the consultants were game-changing. They knew exactly what financial institutions were looking for and prepared me accordingly.",
    reactions: { likes: 19, loves: 8, comments: 3 }
  },
  {
    id: 5,
    name: "Sophia Garcia",
    role: "HR Manager",
    company: "Enterprise Solutions",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    quote: "I had been overlooked for promotions several times. The career advancement coaching helped me identify opportunities and develop the leadership skills I needed to move up.",
    reactions: { likes: 31, loves: 14, comments: 6 }
  }
];

const SuccessStories = () => {
  const carouselRef = useRef(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">Success Stories & Community Wall</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from candidates who found their dream roles with our support.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {successStories.map((story) => (
                <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all h-full">
                    <CardContent className="p-0">
                      <div className="p-4 border-b">
                        <div className="flex items-start space-x-3">
                          <img 
                            src={story.image} 
                            alt={story.name} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-corporate-blue">{story.name}</h3>
                            <p className="text-sm text-gray-600">{story.role}</p>
                            <p className="text-xs text-gray-500">{story.company}, {story.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="italic text-gray-700 mb-4">"{story.quote}"</p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex space-x-3">
                            <button className="flex items-center text-gray-500 hover:text-corporate-blue transition-colors text-sm">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{story.reactions.likes}</span>
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors text-sm">
                              <Heart className="h-4 w-4 mr-1" />
                              <span>{story.reactions.loves}</span>
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-corporate-green transition-colors text-sm">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>{story.reactions.comments}</span>
                            </button>
                          </div>
                          <span className="text-xs text-gray-400">2 weeks ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </div>
          </Carousel>
          
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10"
              onClick={() => {
                if (carouselRef.current) {
                  (carouselRef.current as any).scrollPrev();
                }
              }}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10"
              onClick={() => {
                if (carouselRef.current) {
                  (carouselRef.current as any).scrollNext();
                }
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 border">
          <h3 className="text-xl font-semibold text-corporate-blue mb-4">Share Your Success Story</h3>
          <p className="text-gray-600 mb-6">
            Landed your dream job with our help? We'd love to hear about your experience and share it with our community.
          </p>
          <Button className="bg-corporate-blue hover:bg-corporate-darkBlue text-white">
            Submit Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
