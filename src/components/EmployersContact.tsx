
import React from 'react';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const EmployersContact = () => {
  return (
    <section id="contact" className="section-padding bg-corporate-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Ready to transform your talent acquisition strategy? Choose your preferred way to connect with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group card-hover">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Request a Callback</h3>
              <p className="text-white/80 mb-5 text-sm">
                Let us know when you're available and we'll call you back.
              </p>
              <button className="w-full py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors text-white group-hover:bg-corporate-green">
                <span className="flex items-center justify-center">
                  Schedule Call <ArrowRight size={16} className="ml-2" />
                </span>
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group card-hover">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book a Consultation</h3>
              <p className="text-white/80 mb-5 text-sm">
                Schedule a meeting with our recruitment specialists.
              </p>
              <button className="w-full py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors text-white group-hover:bg-corporate-green">
                <span className="flex items-center justify-center">
                  Book Meeting <ArrowRight size={16} className="ml-2" />
                </span>
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group card-hover">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-white/80 mb-5 text-sm">
                Send us your requirements and we'll get back to you promptly.
              </p>
              <button className="w-full py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors text-white group-hover:bg-corporate-green">
                <span className="flex items-center justify-center">
                  Send Message <ArrowRight size={16} className="ml-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/80 mb-6">
            Prefer to talk right away? Call us directly at <span className="text-white font-semibold">+1 (555) 123-4567</span>
          </p>
          <p className="text-white/60 text-sm">
            Available Monday-Friday, 9am-6pm EST
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployersContact;
