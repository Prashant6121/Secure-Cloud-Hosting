import React, { useState } from 'react';
import { Rocket, Shield, Fuel, Layers, Power, Gauge, Target, Calendar, Clock, Check, Zap, Cpu, Wifi } from 'lucide-react';
import DragonAnimation from '../../components/DragonAnimation';

const Dragon = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const navigationButtons = [
    {
      id: 'specifications',
      title: 'SPECIFICATIONS',
      description: 'Discover the technical details, dimensions, and capabilities that make this dragon spacecraft a marvel of engineering. Learn about its payload capacity, life support systems, and advanced technology.',
      icon: Layers,
      color: 'blue'
    },
    {
      id: 'features',
      title: 'FEATURES',
      description: 'Explore the unique design elements and innovative systems that set this dragon apart. From its reusable components to its state-of-the-art navigation, see what makes this spacecraft exceptional.',
      icon: Shield,
      color: 'purple'
    },
    {
      id: 'missions',
      title: 'MISSIONS',
      description: 'Journey through past, present, and planned missions. Track successful launches, historic achievements, and upcoming expeditions that showcase this dragon\'s role in space exploration.',
      icon: Rocket,
      color: 'orange'
    }
  ];

  const specifications = {
    height: { metric: "8.1 m", imperial: "26.7 ft" },
    diameter: { metric: "4 m", imperial: "13 ft" },
    capsuleVolume: { metric: "9.3 m³", imperial: "328 ft³" },
    trunkVolume: { metric: "37 m³", imperial: "1,300 ft³" },
    launchPayload: { metric: "6,000 kg", imperial: "13,228 lbs" },
    returnPayload: { metric: "3,000 kg", imperial: "6,614 lbs" },
    propulsion: {
      dracoThrusters: 16,
      superDracos: 8,
      dracoThrust: { metric: "400 N", imperial: "90 lbf" },
      superDracoThrust: { metric: "71 kN", imperial: "16,000 lbf" }
    },
    power: {
      solarArrays: "2 sets",
      solarArraySpan: { metric: "16.5 m", imperial: "54 ft" },
      batteryCapacity: "20 kWh"
    },
    thermalControl: {
      heatShieldTemp: { metric: "1,850°C", imperial: "3,362°F" },
      coolingSystem: "Active liquid cooling"
    }
  };

  const missions = [
    {
      name: "Commercial Resupply Services",
      description: "Regular cargo delivery missions to the International Space Station",
      completed: 30,
      details: [
        "Over 45,000 kg of cargo delivered",
        "Critical science experiments transported",
        "Essential supplies for ISS crew",
        "Return capability for research samples"
      ]
    },
    {
      name: "Commercial Crew Program",
      description: "Transportation of astronauts to and from the International Space Station",
      completed: 12,
      details: [
        "Regular crew rotation missions",
        "Emergency escape capability",
        "Autonomous docking system",
        "Life support for up to 7 crew"
      ]
    },
    {
      name: "Private Space Tourism",
      description: "Civilian space travel and orbital experiences",
      completed: 2,
      details: [
        "Multi-day orbital experiences",
        "Custom flight profiles",
        "Comprehensive training program",
        "Unique viewing cupola"
      ]
    }
  ];

  const features = [
    {
      title: "Environmental Control",
      description: "Advanced life support systems for crew comfort and safety",
      icon: <Gauge className="text-blue-500" size={24} />,
      details: [
        "Temperature control between 18-27°C",
        "Humidity regulation",
        "Air filtration and recycling",
        "Pressure maintenance at 1 atm",
        "CO2 scrubbing system",
        "Emergency oxygen supply"
      ]
    },
    {
      title: "Propulsion Systems",
      description: "Redundant thrusters for orbital maneuvering and landing",
      icon: <Rocket className="text-green-500" size={24} />,
      details: [
        "16 Draco thrusters for orbital maneuvers",
        "8 SuperDraco engines for launch escape",
        "Hypergolic propellant system",
        "Precision attitude control",
        "Autonomous trajectory planning",
        "Emergency abort capability"
      ]
    },
    {
      title: "Communication Systems",
      description: "Advanced communication and telemetry capabilities",
      icon: <Wifi className="text-purple-500" size={24} />,
      details: [
        "S-band communication system",
        "GPS navigation",
        "Automated rendezvous system",
        "Ground station network",
        "Redundant data links",
        "Real-time telemetry"
      ]
    },
    {
      title: "Power Generation",
      description: "Reliable power systems for extended missions",
      icon: <Zap className="text-yellow-500" size={24} />,
      details: [
        "Dual solar array deployment",
        "High-capacity lithium batteries",
        "Power distribution system",
        "Thermal management",
        "Emergency power backup",
        "Solar array tracking"
      ]
    },
    {
      title: "Avionics",
      description: "Advanced flight control and navigation systems",
      icon: <Cpu className="text-red-500" size={24} />,
      details: [
        "Triple redundant flight computers",
        "Custom operating system",
        "Fault detection and isolation",
        "Automated docking system",
        "Mission control interface",
        "Emergency protocols"
      ]
    },
    {
      title: "Cargo Systems",
      description: "Flexible cargo accommodation for various mission types",
      icon: <Layers className="text-orange-500" size={24} />,
      details: [
        "Pressurized cargo section",
        "Unpressurized trunk",
        "Automated cargo handling",
        "Temperature-controlled storage",
        "Late load capability",
        "Return cargo capacity"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <DragonAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black">
          <div className="h-full flex flex-col">
            {/* Top Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-in">
                  DRAGON
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
                  SENDING HUMANS AND CARGO INTO SPACE
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pb-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {navigationButtons.map((button) => {
                    const IconComponent = button.icon;
                    const isHovered = hoveredButton === button.id;
                    
                    return (
                      <button
                        key={button.id}
                        onClick={() => setActiveTab(button.id)}
                        onMouseEnter={() => setHoveredButton(button.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        className={`group relative overflow-hidden rounded-lg border border-white/10 transition-all duration-300
                                 ${isHovered ? 'bg-white/10' : 'bg-black/40'} backdrop-blur-sm`}
                      >
                        <div className="p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <IconComponent 
                              className={`transition-colors duration-300
                                      ${isHovered ? `text-${button.color}-400` : 'text-white'}`} 
                              size={24} 
                            />
                            <h3 className="text-xl font-bold">{button.title}</h3>
                          </div>
                          <p className={`text-sm transition-colors duration-300
                                     ${isHovered ? 'text-white' : 'text-gray-400'}`}>
                            {button.description}
                          </p>
                          <div className={`absolute bottom-0 left-0 h-1 transition-all duration-300 transform
                                       ${isHovered ? 'w-full' : 'w-0'} bg-${button.color}-500`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
            <div className="flex items-center gap-3 mb-2">
              <Power className="text-blue-500" size={24} />
              <span className="text-3xl font-bold">7</span>
            </div>
            <p className="text-gray-400">CREW CAPACITY</p>
          </div>
          <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="text-green-500" size={24} />
              <span className="text-3xl font-bold">6,000+</span>
            </div>
            <p className="text-gray-400">KG OF CARGO</p>
          </div>
          <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-purple-500" size={24} />
              <span className="text-3xl font-bold">30+</span>
            </div>
            <p className="text-gray-400">LAUNCHES</p>
          </div>
          <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-orange-500" size={24} />
              <span className="text-3xl font-bold">210</span>
            </div>
            <p className="text-gray-400">DAYS IN ORBIT</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">OVERVIEW</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Dragon is the first private spacecraft to deliver cargo to the International Space Station 
                  and safely return cargo to Earth. It's also the first private spacecraft to carry humans 
                  to the ISS, marking a new era in space exploration.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  The spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and 
                  beyond. Dragon is equipped with 16 Draco thrusters used for orbital maneuvering and 
                  attitude control, and up to 8 SuperDraco engines that power the spacecraft's launch 
                  escape system.
                </p>
                <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                  <h3 className="text-xl font-bold mb-4">KEY CAPABILITIES</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1" size={20} />
                      <span>Autonomous docking with the ISS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1" size={20} />
                      <span>Pressurized and unpressurized cargo delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1" size={20} />
                      <span>Emergency escape system throughout ascent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-green-500 mt-1" size={20} />
                      <span>Propulsive landing capability</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80"
                  alt="Dragon spacecraft"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specifications Section */}
      {activeTab === 'specifications' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">TECHNICAL SPECIFICATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="text-blue-500" size={24} />
                  <h3 className="text-xl font-semibold">DIMENSIONS</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-medium text-gray-400">Height</div>
                    <div className="text-2xl font-bold">{specifications.height.metric}</div>
                    <div className="text-gray-400">{specifications.height.imperial}</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-400">Diameter</div>
                    <div className="text-2xl font-bold">{specifications.diameter.metric}</div>
                    <div className="text-gray-400">{specifications.diameter.imperial}</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="text-purple-500" size={24} />
                  <h3 className="text-xl font-semibold">VOLUME</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-medium text-gray-400">Capsule</div>
                    <div className="text-2xl font-bold">{specifications.capsuleVolume.metric}</div>
                    <div className="text-gray-400">{specifications.capsuleVolume.imperial}</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-400">Trunk</div>
                    <div className="text-2xl font-bold">{specifications.trunkVolume.metric}</div>
                    <div className="text-gray-400">{specifications.trunkVolume.imperial}</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-green-500" size={24} />
                  <h3 className="text-xl font-semibold">PAYLOAD</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-medium text-gray-400">Launch</div>
                    <div className="text-2xl font-bold">{specifications.launchPayload.metric}</div>
                    <div className="text-gray-400">{specifications.launchPayload.imperial}</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-400">Return</div>
                    <div className="text-2xl font-bold">{specifications.returnPayload.metric}</div>
                    <div className="text-gray-400">{specifications.returnPayload.imperial}</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="text-red-500" size={24} />
                  <h3 className="text-xl font-semibold">PROPULSION</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-medium text-gray-400">Draco Thrusters</div>
                    <div className="text-2xl font-bold">{specifications.propulsion.dracoThrusters}</div>
                    <div className="text-gray-400">Thrust: {specifications.propulsion.dracoThrust.metric}</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-400">SuperDraco Engines</div>
                    <div className="text-2xl font-bold">{specifications.propulsion.superDracos}</div>
                    <div className="text-gray-400">Thrust: {specifications.propulsion.superDracoThrust.metric}</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-yellow-500" size={24} />
                  <h3 className="text-xl font-semibold">POWER</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-medium text-gray-400">Solar Arrays</div>
                    <div className="text-2xl font-bold">{specifications.power.solarArrays}</div>
                    <div className="text-gray-400">Span: {specifications.power.solarArraySpan.metric}</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-400">Battery Capacity</div>
                    <div className="text-2xl font-bold">{specifications.power.batteryCapacity}</div>
                  </div>
                </div>
              </div>

              <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                <div className="flex items-center gap-3 mb-6">
                  <Gauge className="text-orange-500" size={24} />
                  <h3 className="text-xl font-semibold">THERMAL</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-medium text-gray-400">Heat Shield Max</div>
                    <div className="text-2xl font-bold">{specifications.thermalControl.heatShieldTemp.metric}</div>
                    <div className="text-gray-400">{specifications.thermalControl.heatShieldTemp.imperial}</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-400">Cooling System</div>
                    <div className="text-2xl font-bold">{specifications.thermalControl.coolingSystem}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      {activeTab === 'features' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">KEY FEATURES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                  <div className="flex items-center gap-3 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1" size={16} />
                        <span className="text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Missions Section */}
      {activeTab === 'missions' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">MISSION HISTORY</h2>
            <div className="space-y-8">
              {missions.map((mission, index) => (
                <div key={index} className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold">{mission.name}</h3>
                        <div className="flex items-center gap-2 bg-spacex-gray/30 px-3 py-1 rounded-full">
                          <Calendar className="text-blue-500" size={16} />
                          <div className="text-sm">
                            <span className="font-bold">{mission.completed}</span>
                            <span className="text-gray-400 ml-1">Completed</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">{mission.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mission.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1" size={16} />
                            <span className="text-gray-400">{detail}</span>
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
    </div>
  );
};

export default Dragon;