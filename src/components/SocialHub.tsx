
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SocialPlatform = {
  name: string;
  icon: React.ElementType;
  url: string;
  followers: string;
  color: string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com',
    followers: '23K',
    color: 'bg-[#0A66C2]',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
    followers: '15.8K',
    color: 'bg-[#1DA1F2]',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
    followers: '32K',
    color: 'bg-[#1877F2]',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
    followers: '18.5K',
    color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com',
    followers: '8.2K',
    color: 'bg-[#FF0000]',
  },
];

const SocialHub = () => {
  return (
    <section className="py-10 section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-2">Stay Connected</h2>
          <p className="section-subtitle mb-8">
            Follow us for the latest industry insights, career tips, and company news.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialPlatforms.map((platform) => (
            <div 
              key={platform.name} 
              className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-200 hover-scale transition-all duration-300"
            >
              {/* Regular state */}
              <div className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${platform.color} text-white mb-4`}>
                  <platform.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-800">{platform.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{platform.followers} followers</p>
              </div>
              
              {/* Hover state */}
              <div className="absolute inset-0 bg-white p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-gray-800 mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">Join our {platform.followers} followers for exclusive updates</p>
                <Button 
                  asChild
                  size="sm" 
                  className={`${platform.color} hover:opacity-90 text-white`}
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Follow Us
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Share your career journey with us using the hashtag</p>
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-corporate-blue font-medium">#DreamGatewayJourney</div>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
