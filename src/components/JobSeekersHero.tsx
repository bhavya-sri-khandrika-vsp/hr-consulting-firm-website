
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, User, UserPlus } from 'lucide-react';

const JobSeekersHero = () => {
  const [experienceLevel, setExperienceLevel] = useState<'experienced' | 'fresher'>('experienced');

  return (
    <section className="py-12 md:py-20 bg-corporate-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-blue">
            Advance Your Career with the Right Opportunity
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Thousands of curated roles, career resources, and expert support — all in one place.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <Button 
              variant={experienceLevel === 'experienced' ? 'default' : 'outline'} 
              onClick={() => setExperienceLevel('experienced')}
              className="group"
            >
              <User className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              I'm Experienced
            </Button>
            <Button 
              variant={experienceLevel === 'fresher' ? 'default' : 'outline'} 
              onClick={() => setExperienceLevel('fresher')}
              className="group"
            >
              <UserPlus className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              I'm a Fresher
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="text-base px-6 py-6 bg-corporate-blue hover:bg-corporate-darkBlue transition-all hover:translate-y-[-2px] group">
              Browse Jobs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="text-base px-6 py-6 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white transition-all hover:translate-y-[-2px] group">
              Upload Your Resume
              <Upload className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-[-2px]" />
            </Button>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px] animate-slide-in">
          <div className="absolute inset-0 bg-corporate-blue/5 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-6 transform translate-y-2 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-corporate-green rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="h-16 w-1 bg-gradient-to-b from-corporate-green to-transparent"></div>
                <div className="w-24 h-24 md:w-28 md:h-28 bg-corporate-blue rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="h-16 w-1 bg-gradient-to-b from-corporate-blue to-transparent"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-corporate-darkBlue rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekersHero;
