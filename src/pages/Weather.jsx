import React, { useState } from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy, WiThunderstorm, WiSnow } from 'react-icons/wi';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(null);
  
  // Mock weather data - in a real app, this would come from an API
  const mockWeatherData = {
    location: location || 'Your Destination',
    current: {
      temp: 72,
      condition: 'Sunny',
      icon: 'sunny',
      humidity: 45,
      wind: 8,
    },
    forecast: [
      { day: 'Mon', temp: 72, condition: 'Sunny', icon: 'sunny' },
      { day: 'Tue', temp: 75, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
      { day: 'Wed', temp: 68, condition: 'Rain', icon: 'rain' },
      { day: 'Thu', temp: 70, condition: 'Cloudy', icon: 'cloudy' },
      { day: 'Fri', temp: 74, condition: 'Sunny', icon: 'sunny' },
    ]
  };

  const getWeatherIcon = (icon) => {
    switch(icon) {
      case 'sunny':
        return <WiDaySunny className="text-5xl text-yellow-400" />;
      case 'rain':
        return <WiRain className="text-5xl text-blue-400" />;
      case 'cloudy':
        return <WiCloudy className="text-5xl text-gray-400" />;
      case 'partly-cloudy':
        return <WiDayCloudy className="text-5xl text-gray-400" />;
      case 'thunderstorm':
        return <WiThunderstorm className="text-5xl text-purple-400" />;
      case 'snow':
        return <WiSnow className="text-5xl text-blue-200" />;
      default:
        return <WiDaySunny className="text-5xl text-yellow-400" />;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, we would fetch weather data here
    setForecast(mockWeatherData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8">
          Sky Gazer's Forecast
        </h1>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Check Weather Conditions</h2>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter destination..."
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-300 transition-colors duration-300"
              >
                Check Weather
              </button>
            </form>
          </div>
          
          {forecast && (
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{forecast.location}</h3>
                  <p className="text-gray-600">Current Conditions</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  {getWeatherIcon(forecast.current.icon)}
                  <span className="text-5xl font-bold ml-2">{forecast.current.temp}°F</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className="font-medium">{forecast.current.condition}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="font-medium">{forecast.current.humidity}%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Wind</p>
                  <p className="font-medium">{forecast.current.wind} mph</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Feels Like</p>
                  <p className="font-medium">{forecast.current.temp}°F</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4">5-Day Forecast</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {forecast.forecast.map((day, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium text-gray-800">{day.day}</p>
                    <div className="my-2">{getWeatherIcon(day.icon)}</div>
                    <p className="text-gray-600">{day.temp}°F</p>
                    <p className="text-sm text-gray-500">{day.condition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-dark mb-4">Travel Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <WiDaySunny className="text-2xl text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold">Sun Protection</h4>
                <p className="text-sm text-gray-600">High UV index expected. Don't forget your sunscreen and sunglasses.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <WiRain className="text-2xl text-yellow-500" />
              </div>
              <div>
                <h4 className="font-semibold">Rain Gear</h4>
                <p className="text-sm text-gray-600">Chance of rain on Wednesday. Consider packing an umbrella.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
