
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Animation for counting up statistics
const CountUpStat = ({ end, label, duration = 2000 }: { end: number; label: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };

    const animate = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const relativeProgress = runtime / duration;

      if (relativeProgress < 1) {
        const currentCount = Math.floor(end * relativeProgress);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(startAnimation);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-center animate-fade-in">
      <div className="text-3xl font-bold text-white mb-1">{count}+</div>
      <div className="text-sm text-white/90">{label}</div>
    </div>
  );
};

const EmployersHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with darker overlay for better contrast */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      
      {/* Gradient overlay with increased opacity for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/95 to-corporate-green/80" />
      
      {/* Content container */}
      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Transform Your Talent Acquisition Strategy
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-slide-in">
            Partner with experts who understand your industry, deliver exceptional candidates, and drive measurable business results
          </p>
          <Button className="bg-corporate-green hover:bg-corporate-lightGreen text-white group animate-pulse-slow">
            Start Your Hiring Journey
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </div>
        
        {/* Stats container with improved visibility */}
        <div className="grid grid-cols-1 gap-6 bg-corporate-blue/30 backdrop-blur-md p-8 rounded-lg border border-white/20 animate-fade-in shadow-xl">
          <h3 className="text-white text-xl font-semibold mb-2 col-span-1 text-center">Our Impact By Numbers</h3>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Users className="text-corporate-green mb-2" size={28} />
              <CountUpStat end={3200} label="Placements" />
            </div>
            
            <div className="flex flex-col items-center bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Award className="text-corporate-green mb-2" size={28} />
              <CountUpStat end={92} label="Retention %" />
            </div>
            
            <div className="flex flex-col items-center bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Clock className="text-corporate-green mb-2" size={28} />
              <CountUpStat end={85} label="Faster Hiring %" />
            </div>
          </div>
          
          {/* Trusted by logos */}
          <div className="mt-6 col-span-1">
            <p className="text-white/80 text-center mb-3 text-sm">Trusted by Industry Leaders</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Microsoft', 'Amazon', 'Adobe', 'Salesforce'].map((client) => (
                <div 
                  key={client}
                  className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-white text-sm font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="h-16 md:h-20 w-full text-white fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H0C0,0,0,45,0,75Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default EmployersHero;
