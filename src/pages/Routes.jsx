import React, { useState } from 'react';
import { FaRoute, FaWalking, FaCar, FaTrain, FaPlane, FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa';

const Routes = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState('driving');
  
  // Mock route data
  const mockRoute = {
    distance: '245 mi',
    duration: '4h 15m',
    steps: [
      { instruction: 'Head northeast on Main St', distance: '0.2 mi', icon: 'start' },
      { instruction: 'Turn right onto Oak Ave', distance: '1.5 mi', icon: 'turn-right' },
      { instruction: 'Merge onto I-5 N', distance: '35 mi', icon: 'highway' },
      { instruction: 'Take exit 72 for State Hwy 18 E', distance: '120 mi', icon: 'exit' },
      { instruction: 'Continue on State Hwy 18 E', distance: '88 mi', icon: 'highway' },
    ],
    alternativeRoutes: [
      { type: 'fastest', time: '4h 15m', distance: '245 mi', tolls: 2 },
      { type: 'scenic', time: '5h 30m', distance: '280 mi', tolls: 0 },
      { type: 'eco', time: '4h 45m', distance: '260 mi', tolls: 1 },
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, we would fetch route data here
    console.log('Searching for route...');
  };

  const getTransportIcon = (mode) => {
    switch(mode) {
      case 'walking':
        return <FaWalking className="text-2xl" />;
      case 'driving':
        return <FaCar className="text-2xl" />;
      case 'transit':
        return <FaTrain className="text-2xl" />;
      case 'flying':
        return <FaPlane className="text-2xl" />;
      default:
        return <FaRoute className="text-2xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8">
          Trailblazer's Pathways
        </h1>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
            <h2 className="text-2xl font-bold mb-4">Plan Your Journey</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-green-300" />
                  </div>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Starting point"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                    required
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearchLocation className="text-green-300" />
                  </div>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                {['driving', 'walking', 'transit', 'flying'].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTravelMode(mode)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      travelMode === mode
                        ? 'bg-white text-green-700 shadow-md'
                        : 'bg-white/20 hover:bg-white/30 text-white'
                    }`}
                  >
                    {getTransportIcon(mode)}
                    <span className="ml-2 capitalize">{mode}</span>
                  </button>
                ))}
                
                <button 
                  type="submit"
                  className="ml-auto px-6 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-300 transition-colors duration-300 flex items-center"
                >
                  <FaRoute className="mr-2" />
                  Find Route
                </button>
              </div>
            </form>
          </div>
          
          <div className="p-6">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 md:h-96 mb-6 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Interactive map will be displayed here</p>
              </div>
            </div>
            
            {/* Route Summary */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Recommended Route</h3>
                  <p className="text-sm text-gray-600">Based on current conditions</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{mockRoute.duration}</div>
                  <div className="text-sm text-gray-600">{mockRoute.distance}</div>
                </div>
              </div>
            </div>
            
            {/* Step-by-step Directions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Step-by-step Directions</h3>
              <div className="space-y-4">
                {mockRoute.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{step.instruction}</p>
                      <p className="text-sm text-gray-500">{step.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Alternative Routes */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Alternative Routes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockRoute.alternativeRoutes.map((route, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="font-medium capitalize mb-2">{route.type} Route</div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{route.time}</span>
                      <span>{route.distance}</span>
                      <span>{route.tolls} toll{route.tolls !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          route.type === 'fastest' ? 'bg-blue-500' : 
                          route.type === 'scenic' ? 'bg-green-500' : 'bg-yellow-500'
                        }`} 
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-dark mb-4">Travel Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaCar className="text-xl text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">Best Time to Travel</h4>
                <p className="text-sm text-gray-600">Light traffic expected before 7 AM and after 7 PM.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaTrain className="text-xl text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Public Transport</h4>
                <p className="text-sm text-gray-600">Consider taking the train for a more relaxing journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
