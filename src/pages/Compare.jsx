import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaDollarSign, FaCloudSun, FaUtensils, FaLandmark, FaShoppingBag } from 'react-icons/fa';

const Compare = () => {
  const [destination1, setDestination1] = useState('');
  const [destination2, setDestination2] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for comparison
  const mockDestinations = {
    'bali': {
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      reviews: '12.5k',
      description: 'Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
      price: '$$',
      bestTime: 'April - October',
      avgTemp: '27-32°C',
      highlights: ['Beaches', 'Temples', 'Rice Terraces', 'Diving'],
      categories: {
        food: 4.7,
        culture: 4.9,
        adventure: 4.5,
        nightlife: 4.3,
        shopping: 4.0
      },
      pros: ['Affordable', 'Beautiful beaches', 'Rich culture', 'Friendly locals'],
      cons: ['Can be crowded', 'Traffic', 'Tourist scams']
    },
    'paris': {
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1431274173421-c1a5b82f3754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      reviews: '45.2k',
      description: 'Famous for its art, fashion, gastronomy and culture, with world-class landmarks like the Eiffel Tower and the Louvre.',
      price: '$$$$',
      bestTime: 'April - June, October - November',
      avgTemp: '15-25°C',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'],
      categories: {
        food: 5.0,
        culture: 5.0,
        adventure: 3.8,
        nightlife: 4.5,
        shopping: 4.8
      },
      pros: ['Rich history', 'World-class museums', 'Amazing food', 'Romantic atmosphere'],
      cons: ['Expensive', 'Crowded', 'Tourist scams', 'Language barrier']
    },
    'tokyo': {
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      reviews: '38.7k',
      description: 'A mix of ultramodern and traditional, from neon-lit skyscrapers to historic temples.',
      price: '$$$',
      bestTime: 'March - April, October - November',
      avgTemp: '10-30°C',
      highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Tsukiji Market', 'Akihabara'],
      categories: {
        food: 5.0,
        culture: 4.9,
        adventure: 4.3,
        nightlife: 4.7,
        shopping: 4.9
      },
      pros: ['Incredible food', 'Efficient public transport', 'Clean and safe', 'Unique culture'],
      cons: ['Expensive', 'Language barrier', 'Crowded', 'Small hotel rooms']
    },
    'new-york': {
      name: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      reviews: '52.1k',
      description: 'The city that never sleeps, known for its iconic skyline, Broadway shows, and cultural diversity.',
      price: '$$$$',
      bestTime: 'April - June, September - November',
      avgTemp: '0-30°C',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Broadway'],
      categories: {
        food: 4.8,
        culture: 4.9,
        adventure: 4.5,
        nightlife: 4.8,
        shopping: 4.7
      },
      pros: ['Endless activities', 'World-class museums', 'Diverse food scene', 'Iconic landmarks'],
      cons: ['Expensive', 'Crowded', 'Noisy', 'Can be overwhelming']
    },
    'sydney': {
      name: 'Sydney, Australia',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      reviews: '28.3k',
      description: 'Famous for its stunning harbor, beautiful beaches, and the iconic Sydney Opera House.',
      price: '$$$',
      bestTime: 'September - November, March - May',
      avgTemp: '10-26°C',
      highlights: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge', 'Blue Mountains'],
      categories: {
        food: 4.6,
        culture: 4.5,
        adventure: 4.7,
        nightlife: 4.3,
        shopping: 4.2
      },
      pros: ['Beautiful beaches', 'Outdoor lifestyle', 'Friendly locals', 'Great food scene'],
      cons: ['Expensive', 'Far from other countries', 'Sun protection needed', 'Wildlife hazards']
    }
  };
  
  const [selectedDestinations, setSelectedDestinations] = useState({
    left: 'bali',
    right: 'paris'
  });
  
  const leftDestination = mockDestinations[selectedDestinations.left];
  const rightDestination = mockDestinations[selectedDestinations.right];
  
  const compareCategories = [
    { id: 'food', name: 'Food & Dining', icon: <FaUtensils className="text-red-500" /> },
    { id: 'culture', name: 'Culture', icon: <FaLandmark className="text-amber-500" /> },
    { id: 'adventure', name: 'Adventure', icon: <FaCloudSun className="text-green-500" /> },
    { id: 'nightlife', name: 'Nightlife', icon: <FaStar className="text-purple-500" /> },
    { id: 'shopping', name: 'Shopping', icon: <FaShoppingBag className="text-blue-500" /> },
  ];
  
  const renderRatingBars = (leftScore, rightScore) => {
    const maxScore = 5;
    const leftWidth = (leftScore / maxScore) * 100;
    const rightWidth = (rightScore / maxScore) * 100;
    
    return (
      <div className="flex items-center space-x-4">
        <div className="w-32 text-right">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${leftWidth}%` }}
            ></div>
          </div>
        </div>
        <span className="text-sm font-medium w-8 text-center">vs</span>
        <div className="w-32">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500" 
              style={{ width: `${rightWidth}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8">
          Destination Duel
        </h1>
        
        {/* Destination Selector */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-6">Compare Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">First Destination</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-blue-300" />
                  </div>
                  <select
                    value={selectedDestinations.left}
                    onChange={(e) => setSelectedDestinations({
                      ...selectedDestinations,
                      left: e.target.value
                    })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {Object.entries(mockDestinations).map(([key, dest]) => (
                      <option key={key} value={key} disabled={key === selectedDestinations.right}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-center py-2">
                <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  VS
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Second Destination</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-red-300" />
                  </div>
                  <select
                    value={selectedDestinations.right}
                    onChange={(e) => setSelectedDestinations({
                      ...selectedDestinations,
                      right: e.target.value
                    })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    {Object.entries(mockDestinations).map(([key, dest]) => (
                      <option key={key} value={key} disabled={key === selectedDestinations.left}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comparison Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'details'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Detailed Comparison
              </button>
              <button
                onClick={() => setActiveTab('proscons')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'proscons'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pros & Cons
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Destination */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={leftDestination.image} 
                      alt={leftDestination.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{leftDestination.name}</h3>
                  <div className="flex items-center text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`${i < Math.floor(leftDestination.rating) ? 'text-amber-500' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-gray-600">{leftDestination.rating} ({leftDestination.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-600 mb-4">{leftDestination.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaDollarSign className="text-gray-500 w-5 mr-2" />
                      <span className="text-gray-700">Price Level: </span>
                      <span className="ml-2 font-medium">{leftDestination.price}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 w-5 mr-2" />
                      <span className="text-gray-700">Best Time: </span>
                      <span className="ml-2 font-medium">{leftDestination.bestTime}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCloudSun className="text-gray-500 w-5 mr-2" />
                      <span className="text-gray-700">Avg. Temp: </span>
                      <span className="ml-2 font-medium">{leftDestination.avgTemp}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Destination */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={rightDestination.image} 
                      alt={rightDestination.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{rightDestination.name}</h3>
                  <div className="flex items-center text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`${i < Math.floor(rightDestination.rating) ? 'text-amber-500' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-gray-600">{rightDestination.rating} ({rightDestination.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-600 mb-4">{rightDestination.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaDollarSign className="text-gray-500 w-5 mr-2" />
                      <span className="text-gray-700">Price Level: </span>
                      <span className="ml-2 font-medium">{rightDestination.price}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 w-5 mr-2" />
                      <span className="text-gray-700">Best Time: </span>
                      <span className="ml-2 font-medium">{rightDestination.bestTime}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCloudSun className="text-gray-500 w-5 mr-2" />
                      <span className="text-gray-700">Avg. Temp: </span>
                      <span className="ml-2 font-medium">{rightDestination.avgTemp}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-blue-600">{leftDestination.name}</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-600">Category</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-red-600">{rightDestination.name}</h4>
                  </div>
                </div>
                
                {compareCategories.map((category) => (
                  <div key={category.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {leftDestination.categories[category.id].toFixed(1)} vs {rightDestination.categories[category.id].toFixed(1)}
                      </div>
                    </div>
                    {renderRatingBars(
                      leftDestination.categories[category.id],
                      rightDestination.categories[category.id]
                    )}
                  </div>
                ))}
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2">
                        {leftDestination.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
                              {i + 1}
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        {rightDestination.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2">
                              {i + 1}
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'proscons' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{leftDestination.name}</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="space-y-2">
                      {leftDestination.pros.map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                    <ul className="space-y-2">
                      {leftDestination.cons.map((con, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">{rightDestination.name}</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="space-y-2">
                      {rightDestination.pros.map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                    <ul className="space-y-2">
                      {rightDestination.cons.map((con, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Recommendation */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Our Recommendation</h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="mb-4 md:mb-0 md:max-w-2xl">
              Based on your preferences and the comparison above, we recommend 
              <span className="font-bold"> {leftDestination.rating > rightDestination.rating ? leftDestination.name : rightDestination.name} </span>
              as your next travel destination. It offers a better overall experience according to our analysis.
            </p>
            <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
