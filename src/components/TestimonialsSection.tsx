
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jennifer Rodriguez',
    position: 'VP of Human Resources',
    company: 'TechVision Inc.',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    quote: 'TalentBridge has been an invaluable partner in our recruitment process. Their ability to understand our company culture and find candidates who not only have the right skills but also fit our team dynamic has been remarkable.',
    rating: 5,
    type: 'employer',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Software Engineer',
    company: 'InnoTech Solutions',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Working with TalentBridge changed my job search experience completely. My recruiter took the time to understand my career goals and found me a position that perfectly matches my skills and aspirations. I couldn\'t be happier with my new role!',
    rating: 5,
    type: 'candidate',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'Elevate Marketing',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'As a fast-growing startup, finding the right talent quickly was crucial for us. TalentBridge delivered exceptional candidates who have become key contributors to our success. Their thorough understanding of our industry made all the difference.',
    rating: 5,
    type: 'employer',
  },
  {
    id: 4,
    name: 'David Williams',
    position: 'Finance Manager',
    company: 'Global Financial Group',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'After being in the same role for 7 years, I was hesitant about making a change. The team at TalentBridge guided me through the entire process and helped me secure a position that has advanced my career tremendously.',
    rating: 5,
    type: 'candidate',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-corporate-blue text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Don't just take our word for it. Hear what our clients and candidates have to say about their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                <img 
                  src={TESTIMONIALS[activeIndex].image} 
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg italic mb-6">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>
              
              <div className="font-bold text-corporate-blue text-lg">
                {TESTIMONIALS[activeIndex].name}
              </div>
              
              <div className="text-gray-600">
                {TESTIMONIALS[activeIndex].position}, {TESTIMONIALS[activeIndex].company}
              </div>
              
              <div className="mt-2">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  TESTIMONIALS[activeIndex].type === 'employer' 
                    ? 'bg-corporate-blue/10 text-corporate-blue'
                    : 'bg-corporate-green/10 text-corporate-green'
                }`}>
                  {TESTIMONIALS[activeIndex].type === 'employer' ? 'Employer' : 'Candidate'}
                </span>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-corporate-blue hover:bg-corporate-blue hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-corporate-blue hover:bg-corporate-blue hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
