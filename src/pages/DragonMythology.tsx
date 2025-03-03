import React, { useState, useEffect, useRef } from 'react';
import { Flame, Wind, Shield, Scroll, Book, Globe, Crown, Scale } from 'lucide-react';
import AnimatedSpaceBackground from '../components/AnimatedSpaceBackground';

const DragonMythology = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dragonTypes = [
    {
      region: "Eastern",
      description: "Serpentine celestial beings associated with wisdom and power",
      traits: ["Long, serpentine body", "No wings", "Spiritual powers", "Water affinity"],
      image: "https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?auto=format&fit=crop&q=80"
    },
    {
      region: "Western",
      description: "Mighty reptilian creatures known for hoarding treasure",
      traits: ["Large wings", "Fire breath", "Armored scales", "Territorial"],
      image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80"
    },
    {
      region: "Norse",
      description: "Powerful beings often representing cosmic forces",
      traits: ["Serpentine form", "Ancient wisdom", "World-spanning size", "Prophecy"],
      image: "https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?auto=format&fit=crop&q=80"
    }
  ];

  const famousDragons = [
    {
      name: "Fafnir",
      origin: "Norse Mythology",
      description: "A dwarf-turned-dragon who guarded cursed gold",
      type: "Treasure Guardian"
    },
    {
      name: "Tiamat",
      origin: "Mesopotamian Mythology",
      description: "Primordial goddess of the salt sea",
      type: "Creator Deity"
    },
    {
      name: "Long",
      origin: "Chinese Mythology",
      description: "Divine water-associated beings of great wisdom",
      type: "Celestial Being"
    },
    {
      name: "Smaug",
      origin: "Literature",
      description: "Powerful dragon from The Hobbit",
      type: "Treasure Hoarder"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <AnimatedSpaceBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-transparent to-black" />

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight animate-fade-in
                       bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-amber-500
                       [text-shadow:0_0_30px_rgba(239,68,68,0.5)]">
            DRAGONS
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay
                     [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
            LEGENDARY BEINGS OF POWER AND MYSTERY
          </p>
        </div>

        {/* Key Statistics */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="text-red-500" size={24} />
                  <span className="text-3xl font-bold">3,000°C</span>
                </div>
                <p className="text-gray-400 text-sm">FLAME TEMPERATURE</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="text-amber-500" size={24} />
                  <span className="text-3xl font-bold">200 KM/H</span>
                </div>
                <p className="text-gray-400 text-sm">FLIGHT SPEED</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="text-orange-500" size={24} />
                  <span className="text-3xl font-bold">100%</span>
                </div>
                <p className="text-gray-400 text-sm">SCALE PROTECTION</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Crown className="text-yellow-500" size={24} />
                  <span className="text-3xl font-bold">1000+</span>
                </div>
                <p className="text-gray-400 text-sm">YEARS LIFESPAN</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-red-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'types', 'abilities', 'mythology'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-red-500 text-white'
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
                Dragons are legendary creatures that have captured human imagination for millennia. 
                These powerful beings appear in mythologies and folklore across cultures, 
                symbolizing various aspects of nature, power, wisdom, and the supernatural.
              </p>
              <div className="space-y-6">
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                  <h3 className="text-xl font-bold mb-4">COMMON CHARACTERISTICS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Scale className="text-red-500 mt-1 flex-shrink-0" size={20} />
                      <span>Armored scales providing exceptional protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flame className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                      <span>Ability to breathe fire or other elemental powers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Crown className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                      <span>Noble and majestic bearing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Book className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                      <span>Ancient wisdom and knowledge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Types Section */}
      {activeTab === 'types' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">DRAGON TYPES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dragonTypes.map((type, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={type.image}
                    alt={type.region}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                      {type.region} Dragons
                    </h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.traits.map((trait, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-red-500 rounded-full" />
                          {trait}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Abilities Section */}
      {activeTab === 'abilities' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">DRAGON ABILITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 p-8 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Flame className="text-red-500" size={24} />
                  <h3 className="text-xl font-semibold">BREATH WEAPONS</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium mb-2">Fire Breath</div>
                    <div className="text-gray-400">Temperature up to 3,000°C</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Ice Breath</div>
                    <div className="text-gray-400">Freezing capabilities to -100°C</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Lightning Breath</div>
                    <div className="text-gray-400">Electrical discharge of 100,000V</div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/20 p-8 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-orange-500" size={24} />
                  <h3 className="text-xl font-semibold">DEFENSES</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium mb-2">Armored Scales</div>
                    <div className="text-gray-400">Impenetrable to conventional weapons</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Magical Resistance</div>
                    <div className="text-gray-400">Natural immunity to spells</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Regeneration</div>
                    <div className="text-gray-400">Rapid healing capabilities</div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/20 p-8 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Book className="text-yellow-500" size={24} />
                  <h3 className="text-xl font-semibold">MAGIC & WISDOM</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium mb-2">Spellcasting</div>
                    <div className="text-gray-400">Natural affinity for magic</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Ancient Knowledge</div>
                    <div className="text-gray-400">Centuries of accumulated wisdom</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Prophecy</div>
                    <div className="text-gray-400">Ability to see possible futures</div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/20 p-8 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Wind className="text-amber-500" size={24} />
                  <h3 className="text-xl font-semibold">PHYSICAL PROWESS</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium mb-2">Flight</div>
                    <div className="text-gray-400">Speeds up to 200 km/h</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Strength</div>
                    <div className="text-gray-400">Capable of lifting 50+ tons</div>
                  </li>
                  <li>
                    <div className="font-medium mb-2">Longevity</div>
                    <div className="text-gray-400">Lifespan of 1000+ years</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mythology Section */}
      {activeTab === 'mythology' && (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">FAMOUS DRAGONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {famousDragons.map((dragon, index) => (
                <div key={index} className="bg-red-900/20 p-8 rounded-lg border border-red-500/30">
                  <div className="flex items-start gap-3 mb-4">
                    <Scroll className="text-red-500 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{dragon.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Globe size={16} />
                        <span>{dragon.origin}</span>
                        <span className="mx-2">•</span>
                        <Crown size={16} />
                        <span>{dragon.type}</span>
                      </div>
                      <p className="text-gray-300">{dragon.description}</p>
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

export default DragonMythology;