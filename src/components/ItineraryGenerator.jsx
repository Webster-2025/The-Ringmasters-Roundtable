import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaDollarSign, FaHeart, FaCamera, FaUtensils, FaLandmark, FaTree, FaMusic, FaShoppingBag, FaSpinner, FaPlane, FaHotel } from 'react-icons/fa';

const ItineraryGenerator = ({ onItineraryGenerated }) => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: 'medium',
    interests: []
  });

  const interests = [
    { id: 'culture', name: 'Culture & History', icon: <FaLandmark /> },
    { id: 'food', name: 'Food & Dining', icon: <FaUtensils /> },
    { id: 'nature', name: 'Nature & Parks', icon: <FaTree /> },
    { id: 'photography', name: 'Photography', icon: <FaCamera /> },
    { id: 'nightlife', name: 'Nightlife & Entertainment', icon: <FaMusic /> },
    { id: 'shopping', name: 'Shopping', icon: <FaShoppingBag /> }
  ];

  const budgetOptions = [
    { value: 'low', label: 'Budget ($)', description: 'Affordable options' },
    { value: 'medium', label: 'Moderate ($$)', description: 'Mid-range experiences' },
    { value: 'high', label: 'Luxury ($$$)', description: 'Premium experiences' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleInterest = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const generateItinerary = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: formData.destination,
          days: Math.ceil((new Date(formData.endDate) - new Date(formData.startDate)) / (1000 * 60 * 60 * 24)) + 1,
          interests: formData.interests,
          startDate: formData.startDate,
          budget: formData.budget,
          travelers: formData.travelers
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate itinerary');
      }
      
      const itinerary = await response.json();
      onItineraryGenerated(itinerary);
    } catch (error) {
      console.error('Error generating itinerary:', error);
      
      alert(`Failed to generate itinerary: ${error.message}\n\nPlease check:\n- Your destination name is correct\n- Backend server is running on port 5000\n- Internet connection is stable`);
      
      setIsGenerating(false);
      return;
    }
    
    setIsGenerating(false);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.destination.trim() !== '';
      case 2:
        return formData.startDate && formData.endDate;
      case 3:
        return formData.travelers > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-6xl text-blue-500 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Creating Your Perfect Itinerary</h2>
          <p className="text-gray-600">Fetching real attractions, restaurants, and hotels...</p>
          <div className="mt-6 bg-white rounded-lg p-6 shadow-lg max-w-md">
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                Finding attractions and landmarks
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaUtensils className="mr-2 text-red-500" />
                Discovering local restaurants
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaHotel className="mr-2 text-purple-500" />
                Locating accommodations
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 4</span>
            <span className="text-sm text-gray-500">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Step 1: Destination */}
          {step === 1 && (
            <div className="text-center">
              <FaMapMarkerAlt className="text-5xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Where would you like to go?</h2>
              <p className="text-gray-600 mb-6">Enter your dream destination</p>
              
              <input
                type="text"
                placeholder="e.g., Paris, Tokyo, New York"
                value={formData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
                className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Step 2: Dates */}
          {step === 2 && (
            <div className="text-center">
              <FaCalendarAlt className="text-5xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">When are you traveling?</h2>
              <p className="text-gray-600 mb-6">Select your travel dates</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Travelers & Budget */}
          {step === 3 && (
            <div className="text-center">
              <FaUsers className="text-5xl text-purple-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Travel Details</h2>
              <p className="text-gray-600 mb-6">How many travelers and what's your budget?</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.travelers}
                    onChange={(e) => handleInputChange('travelers', parseInt(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Budget Range</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleInputChange('budget', option.value)}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          formData.budget === option.value
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Interests */}
          {step === 4 && (
            <div className="text-center">
              <FaHeart className="text-5xl text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">What interests you?</h2>
              <p className="text-gray-600 mb-6">Select your travel interests (optional)</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      formData.interests.includes(interest.id)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{interest.icon}</div>
                    <div className="text-sm font-medium">{interest.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                step === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              }`}
            >
              Previous
            </button>
            
            {step < 4 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`px-6 py-2 rounded-lg font-medium ${
                  canProceed()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={generateItinerary}
                disabled={!canProceed()}
                className={`px-8 py-2 rounded-lg font-medium ${
                  canProceed()
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Generate Itinerary
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryGenerator;
