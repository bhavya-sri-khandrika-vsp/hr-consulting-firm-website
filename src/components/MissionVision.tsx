
import React from 'react';
import { Target, Eye, BarChart4, Users, Heart, Clock } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Mission & Vision</h2>
          <p className="section-subtitle">
            Guided by strong values and a clear vision, we're dedicated to making a meaningful impact in the recruitment industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-blue/10 text-corporate-blue mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-corporate-blue">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To bridge the gap between exceptional talent and forward-thinking organizations, creating meaningful professional connections that drive mutual growth and success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-corporate-blue">
                  <BarChart4 size={20} />
                </div>
                <p className="text-gray-700">Drive organizational growth through strategic talent acquisition</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-corporate-blue">
                  <Users size={20} />
                </div>
                <p className="text-gray-700">Connect professionals with opportunities that advance their careers</p>
              </div>
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-green/10 text-corporate-green mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-corporate-green">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be the most trusted partner in talent acquisition, recognized for our integrity, innovation, and commitment to transforming the recruitment landscape.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-corporate-green">
                  <Heart size={20} />
                </div>
                <p className="text-gray-700">Create a more human-centered approach to recruitment</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-corporate-green">
                  <Clock size={20} />
                </div>
                <p className="text-gray-700">Lead industry innovation through technology and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
