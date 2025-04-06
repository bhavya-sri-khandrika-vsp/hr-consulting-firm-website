
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TalentBridge</h3>
            <p className="text-gray-400 mb-6">
              Connecting exceptional talent with leading companies to create successful futures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-corporate-blue p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-corporate-blue p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-corporate-blue p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-corporate-blue p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <a href="#jobs" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Job Openings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services#core-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Permanent Hiring
                </a>
              </li>
              <li>
                <a href="/services#core-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contract Staffing
                </a>
              </li>
              <li>
                <a href="/services#core-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Executive Search
                </a>
              </li>
              <li>
                <a href="/services#core-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> HR Consulting
                </a>
              </li>
              <li>
                <a href="/services#core-services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Career Coaching
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-corporate-green" />
                <span className="text-gray-400">
                  123 Business Avenue, <br /> New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-corporate-green" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-corporate-green" />
                <a href="mailto:info@talentbridge.com" className="text-gray-400 hover:text-white transition-colors">
                  info@talentbridge.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TalentBridge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
