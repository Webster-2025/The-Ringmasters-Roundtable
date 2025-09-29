import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import RoutesPage from './pages/Routes';
import Budget from './pages/Budget';
import Events from './pages/Events';
import Compare from './pages/Compare';
import Itinerary from './pages/Itinerary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/events" element={<Events />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/itinerary" element={<Itinerary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
