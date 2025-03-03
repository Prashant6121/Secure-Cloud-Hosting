import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Rocket, Shield, Fuel, Layers, Power, Gauge, Target, Calendar, Clock, Check, AlertTriangle } from 'lucide-react';

const Starship = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay failed');
      });
    }
  }, []);

  const milestones = [
    {
      date: "2019",
      title: "Starhopper Tests",
      description: "First successful hop tests of the Starship prototype"
    },
    {
      date: "2020-2021",
      title: "High-Altitude Tests",
      description: "Multiple high-altitude tests of Starship prototypes SN8 through SN15"
    },
    {
      date: "2023",
      title: "First Integrated Flight Test",
      description: "Combined Starship and Super Heavy booster test flight"
    },
    {
      date: "2024",
      title: "Orbital Test Flight",
      description: "Planned full orbital test flight with reentry"
    },
    {
      date: "2025",
      title: "Lunar Mission",
      description: "Planned uncrewed lunar landing mission"
    }
  ];

  const challenges = [
    {
      title: "Heat Shield Development",
      description: "Creating a reliable thermal protection system for reentry"
    },
    {
      title: "Propellant Transfer",
      description: "Developing in-orbit refueling capabilities"
    },
    {
      title: "Landing System",
      description: "Perfecting the vertical landing system for both stages"
    },
    {
      title: "Environmental Impact",
      description: "Minimizing environmental effects of frequent launches"
    }
  ];

  const missions = [
    {
      title: "LUNAR MISSIONS",
      description: "Supporting NASA's Artemis program for sustainable lunar presence",
      image: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&q=80",
      details: [
        "Lunar cargo delivery",
        "Human landing system",
        "Base construction support",
        "Resource utilization"
      ],
      stats: {
        payload: "100+ tons to lunar surface",
        duration: "Multi-month missions",
        crew: "Up to 100 people"
      }
    },
    {
      title: "MARS COLONIZATION",
      description: "Establishing the first human settlement on Mars",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80",
      details: [
        "Habitat deployment",
        "Resource production",
        "Scientific research",
        "Colony expansion"
      ],
      stats: {
        payload: "100+ tons to Mars surface",
        duration: "26-month cycles",
        infrastructure: "Self-sustaining city"
      }
    },
    {
      title: "EARTH ORBIT",
      description: "Revolutionary capabilities in low Earth orbit operations",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
      details: [
        "Satellite deployment",
        "Space station resupply",
        "Debris removal",
        "In-orbit servicing"
      ],
      stats: {
        payload: "150+ tons to LEO",
        turnaround: "Rapid reusability",
        missions: "Weekly launches"
      }
    },
    {
      title: "POINT-TO-POINT",
      description: "Ultra-fast Earth transportation between major cities",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
      details: [
        "30-minute intercontinental flight",
        "City-center spaceports",
        "Regular scheduled service",
        "Business & tourism"
      ],
      stats: {
        speed: "27,000 km/h",
        passengers: "Up to 100",
        range: "Anywhere on Earth"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80"
            alt="Starship"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source
              src="https://www.spacex.com/media/Starship_Website_2023.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight animate-fade-in">
            STARSHIP
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            MAKING LIFE MULTIPLANETARY
          </p>
        </div>

        {/* Key Statistics */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Power className="text-orange-500" size={24} />
                  <span className="text-3xl font-bold">17M+</span>
                </div>
                <p className="text-gray-400 text-sm">POUNDS OF THRUST</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="text-blue-500" size={24} />
                  <span className="text-3xl font-bold">150t</span>
                </div>
                <p className="text-gray-400 text-sm">PAYLOAD CAPACITY</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Gauge className="text-purple-500" size={24} />
                  <span className="text-3xl font-bold">123m</span>
                </div>
                <p className="text-gray-400 text-sm">TOTAL HEIGHT</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-red-500" size={24} />
                  <span className="text-3xl font-bold">9m</span>
                </div>
                <p className="text-gray-400 text-sm">DIAMETER</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'specifications', 'development', 'missions', 'challenges'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <div className="py-24 bg-black" ref={parallaxRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-8">OVERVIEW</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Starship represents SpaceX's next-generation fully reusable transportation system 
                designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond. 
                As the world's most powerful launch vehicle ever developed, it marks a significant 
                leap in space exploration capabilities.
              </p>
              <div className="space-y-6">
                <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                  <h3 className="text-xl font-bold mb-4">KEY INNOVATIONS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span>Fully reusable two-stage system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span>Rapid reusability with minimal refurbishment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span>In-orbit refueling capability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span>Advanced heat shield technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specifications Section */}
      {activeTab === 'specifications' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">TECHNICAL SPECIFICATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="text-blue-500" size={24} />
                  <h3 className="text-xl font-semibold">DIMENSIONS</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">123m</div>
                    <div className="text-gray-400">403 ft</div>
                  </div>
                  <div className="pt-4">
                    <div className="text-lg font-medium text-gray-400">Diameter</div>
                    <div className="text-2xl font-bold">9m</div>
                    <div className="text-gray-400">30 ft</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Power className="text-orange-500" size={24} />
                  <h3 className="text-xl font-semibold">PROPULSION</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">33</div>
                    <div className="text-gray-400">Raptor Engines</div>
                  </div>
                  <div className="pt-4">
                    <div className="text-lg font-medium text-gray-400">Thrust</div>
                    <div className="text-2xl font-bold">17M+ lbf</div>
                    <div className="text-gray-400">74.3M Newtons</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-purple-500" size={24} />
                  <h3 className="text-xl font-semibold">PAYLOAD CAPACITY</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">150t</div>
                    <div className="text-gray-400">to LEO (Reusable)</div>
                  </div>
                  <div className="pt-4">
                    <div className="text-lg font-medium text-gray-400">Volume</div>
                    <div className="text-2xl font-bold">1,000+ m³</div>
                    <div className="text-gray-400">Pressurized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Development Timeline */}
      {activeTab === 'development' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">DEVELOPMENT TIMELINE</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-spacex-gray/30 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <div className="mb-2">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Calendar size={16} />
                      <span>{milestone.date}</span>
                    </div>
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Missions Section */}
      {activeTab === 'missions' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">MISSION CAPABILITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missions.map((mission, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  </div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
                    <p className="text-gray-300 mb-6">{mission.description}</p>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-3">Capabilities</h4>
                      <ul className="space-y-2 mb-6">
                        {mission.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <h4 className="text-sm font-semibold mb-3 text-gray-400">MISSION STATS</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(mission.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-400 capitalize">{key}</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Challenges Section */}
      {activeTab === 'challenges' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">DEVELOPMENT CHALLENGES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="text-yellow-500 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                      <p className="text-gray-300">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
              <h3 className="text-xl font-bold mb-4">ENVIRONMENTAL CONSIDERATIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">EMISSIONS</h4>
                  <p className="text-gray-300">
                    SpaceX is working to minimize the environmental impact through:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span>Methane fuel choice for cleaner combustion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span>Reusability reducing manufacturing impact</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">NOISE REDUCTION</h4>
                  <p className="text-gray-300">
                    Launch site modifications and operational procedures to minimize:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span>Acoustic impact on surrounding areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span>Wildlife disturbance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Starship;