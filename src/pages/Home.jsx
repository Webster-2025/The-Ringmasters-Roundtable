import React from 'react';
import { FaUmbrellaBeach, FaRoute, FaMoneyBillWave, FaCalendarAlt, FaBalanceScale, FaClipboardList } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';

const features = [
  {
    icon: <WiDaySunny className="text-5xl text-yellow-500" />,
    title: 'Weather Forecast',
    description: 'Get accurate weather predictions for your travel dates'
  },
  {
    icon: <FaRoute className="text-4xl text-blue-500" />,
    title: 'Smart Routing',
    description: 'Find the best routes and travel options'
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-green-500" />,
    title: 'Budget Planning',
    description: 'Estimate costs and optimize your travel budget'
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-purple-500" />,
    title: 'Event Discovery',
    description: 'Find local events and activities at your destination'
  },
  {
    icon: <FaBalanceScale className="text-4xl text-red-500" />,
    title: 'Compare Destinations',
    description: 'Evaluate multiple locations based on your preferences'
  },
  {
    icon: <FaClipboardList className="text-4xl text-pink-500" />,
    title: 'Itinerary Builder',
    description: 'Create and manage your perfect travel schedule'
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ringmaster's Roundtable</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Uniting scouts, gazers, and planners for the perfect tour. Plan your journey with the wisdom of the circus council.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Plan Your Journey
              </button>
              <button className="px-8 py-4 bg-white text-dark font-medium rounded-lg shadow hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-300">
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-display font-bold text-center text-dark mb-12">
          Your Travel Council Awaits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Begin Your Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who trust Ringmaster's Roundtable to plan their perfect journey.
          </p>
          <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300">
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
