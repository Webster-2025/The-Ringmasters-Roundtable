import { Link, useLocation } from 'react-router-dom';
import { FaUmbrellaBeach, FaRoute, FaMoneyBillWave, FaCalendarAlt, FaBalanceScale, FaClipboardList } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <WiDaySunny className="text-2xl" /> },
    { name: 'Weather', path: '/weather', icon: <WiDaySunny className="text-2xl" /> },
    { name: 'Routes', path: '/routes', icon: <FaRoute className="text-xl" /> },
    { name: 'Budget', path: '/budget', icon: <FaMoneyBillWave className="text-xl" /> },
    { name: 'Events', path: '/events', icon: <FaCalendarAlt className="text-xl" /> },
    { name: 'Compare', path: '/compare', icon: <FaBalanceScale className="text-xl" /> },
    { name: 'Itinerary', path: '/itinerary', icon: <FaClipboardList className="text-xl" /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎪</span>
              <span className="text-2xl font-display font-bold">Ringmaster's Roundtable</span>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-1 pb-4 md:pb-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'hover:bg-white/10'
                }`}
              >
                <span className="text-yellow-300">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
