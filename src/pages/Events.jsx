import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaTicketAlt, FaMusic, FaUtensils, FaLandmark, FaRunning } from 'react-icons/fa';

const Events = () => {
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState('this-weekend');
  const [category, setCategory] = useState('all');
  
  // Mock events data
  const mockEvents = [
    {
      id: 1,
      title: 'Jazz in the Park',
      date: '2023-06-15',
      time: '18:00',
      location: 'Central Park',
      category: 'music',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Enjoy an evening of smooth jazz performances from local artists in the beautiful Central Park.'
    },
    {
      id: 2,
      title: 'Food Festival',
      date: '2023-06-16',
      time: '11:00',
      location: 'Downtown Square',
      category: 'food',
      price: '$15-50',
      image: 'https://images.unsplash.com/photo-1504674900247-087703934569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Taste dishes from over 50 local restaurants and food trucks at this annual food festival.'
    },
    {
      id: 3,
      title: 'Historical Tour',
      date: '2023-06-17',
      time: '10:00',
      location: 'Old Town District',
      category: 'culture',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'A guided walking tour through the historic district, featuring architecture from the 18th century.'
    },
    {
      id: 4,
      title: 'Yoga in the Park',
      date: '2023-06-18',
      time: '08:00',
      location: 'Riverside Park',
      category: 'sports',
      price: 'Donation',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Start your Sunday morning with a peaceful yoga session by the river. All levels welcome.'
    },
    {
      id: 5,
      title: 'Art Exhibition',
      date: '2023-06-19',
      time: '12:00',
      location: 'Modern Art Museum',
      category: 'art',
      price: '$18',
      image: 'https://images.unsplash.com/photo-1531913764164-f85c52d6e654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Contemporary art exhibition featuring works from emerging local artists.'
    },
    {
      id: 6,
      title: 'Wine Tasting',
      date: '2023-06-20',
      time: '19:00',
      location: 'Vineyard Estate',
      category: 'food',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'An evening of fine wines and gourmet pairings at the beautiful Vineyard Estate.'
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Events', icon: <FaTicketAlt /> },
    { id: 'music', name: 'Music', icon: <FaMusic /> },
    { id: 'food', name: 'Food & Drink', icon: <FaUtensils /> },
    { id: 'culture', name: 'Culture', icon: <FaLandmark /> },
    { id: 'sports', name: 'Sports & Wellness', icon: <FaRunning /> },
  ];
  
  const dateRanges = [
    { id: 'today', name: 'Today' },
    { id: 'tomorrow', name: 'Tomorrow' },
    { id: 'this-weekend', name: 'This Weekend' },
    { id: 'next-week', name: 'Next Week' },
    { id: 'this-month', name: 'This Month' },
  ];
  
  const filteredEvents = mockEvents.filter(event => {
    // Filter by category
    if (category !== 'all' && event.category !== category) {
      return false;
    }
    
    // Filter by location (if provided)
    if (location && !event.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    
    // Note: In a real app, we would implement date filtering logic here
    
    return true;
  });
  
  const getCategoryColor = (category) => {
    switch(category) {
      case 'music':
        return 'bg-purple-100 text-purple-800';
      case 'food':
        return 'bg-red-100 text-red-800';
      case 'culture':
        return 'bg-amber-100 text-amber-800';
      case 'sports':
        return 'bg-green-100 text-green-800';
      case 'art':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8">
          Local Happenings
        </h1>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-4">Discover Events</h2>
            <form className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search by location or event name..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-white mb-1">When</label>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-300"
                  >
                    {dateRanges.map(range => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-white mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-300"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
          
          {/* Category Tabs */}
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {event.price === 'Free' ? 'FREE' : `From ${event.price}`}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>{formatDate(event.date)} • {event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      More Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-xl p-12 text-center">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find more events.</p>
          </div>
        )}
        
        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Never Miss an Event Again</h3>
            <p className="mb-6 opacity-90">Subscribe to our newsletter and get the best events delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
