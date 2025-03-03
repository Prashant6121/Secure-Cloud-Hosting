import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Shield, Briefcase, Bell, ChevronDown, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const vehicles = [
    { name: 'FALCON 9', path: '/vehicles/falcon-9' },
    { name: 'FALCON HEAVY', path: '/vehicles/falcon-heavy' },
    { name: 'DRAGON', path: '/vehicles/dragon' },
    { name: 'STARSHIP', path: '/vehicles/starship' },
  ];

  const mainNavItems = [
    { name: 'LAUNCHES', path: '/launches', icon: Calendar },
    { name: 'STARSHIELD', path: '/starshield', icon: Shield },
    { name: 'MISSION', path: '/mission', icon: Briefcase },
    { name: 'UPDATES', path: '/updates', icon: Bell },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white text-xl md:text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
            >
              SPACEX
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Vehicles Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsVehiclesOpen(true)}
                onMouseLeave={() => setIsVehiclesOpen(false)}
                className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium tracking-wider
                         transition-colors duration-300 group min-w-[120px]"
              >
                <Rocket size={20} />
                <span>VEHICLES</span>
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isVehiclesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsVehiclesOpen(true)}
                onMouseLeave={() => setIsVehiclesOpen(false)}
                className={`absolute left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl
                         transition-all duration-200 ${isVehiclesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <div className="py-2">
                  {vehicles.map((vehicle) => (
                    <Link
                      key={vehicle.path}
                      to={vehicle.path}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10
                               transition-colors duration-200"
                    >
                      {vehicle.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Navigation Items */}
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium tracking-wider
                           transition-colors duration-300 relative group min-w-[120px] ${
                             location.pathname === item.path ? 'text-white' : ''
                           }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 
                                 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-300 hover:text-white 
                       hover:bg-white/10 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Link 
              to="/" 
              className="text-white text-xl font-bold tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              SPACEX
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {/* Mobile Vehicles Section */}
            <div className="mb-4">
              <div className="px-4 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                Vehicles
              </div>
              {vehicles.map((vehicle) => (
                <Link
                  key={vehicle.path}
                  to={vehicle.path}
                  className="flex items-center gap-3 px-4 py-4 text-base font-medium text-gray-300 hover:text-white 
                           hover:bg-white/5 transition-all duration-200 active:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket size={20} />
                  {vehicle.name}
                </Link>
              ))}
            </div>

            {/* Other Mobile Navigation Items */}
            <div className="border-t border-gray-800 pt-4">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-4 text-base font-medium text-gray-300 hover:text-white 
                             hover:bg-white/5 transition-all duration-200 active:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;