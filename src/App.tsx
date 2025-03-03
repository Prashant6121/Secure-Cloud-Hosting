import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LaunchCountdown from './components/LaunchCountdown';
import VehicleInfo from './components/VehicleInfo';
import UpdatesPage from './pages/Updates';
import FalconHeavy from './pages/vehicles/FalconHeavy';
import Dragon from './pages/vehicles/Dragon';
import Starship from './pages/vehicles/Starship';
import Mission from './pages/Mission';
import Starshield from './pages/Starshield';
import Launches from './pages/Launches';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <LaunchCountdown />
                <VehicleInfo />
              </>
            } />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/vehicles/falcon-9" element={<VehicleInfo />} />
            <Route path="/vehicles/falcon-heavy" element={<FalconHeavy />} />
            <Route path="/vehicles/dragon" element={<Dragon />} />
            <Route path="/vehicles/starship" element={<Starship />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/starshield" element={<Starshield />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;