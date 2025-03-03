import React, { useEffect, useRef, useState } from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const Starshield = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay failed');
      });
    }
  }, []);

  const scrollToCapabilities = () => {
    capabilitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const capabilities = [
    {
      title: 'EARTH OBSERVATION',
      description: 'Starshield satellites provide assured global coverage with integrated analytics.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
    },
    {
      title: 'COMMUNICATIONS',
      description: 'Starshield provides global, end-to-end encrypted communications to the warfighter with Starlink\'s inter-satellite laser communications terminal.',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80'
    },
    {
      title: 'HOSTED PAYLOAD',
      description: 'Starshield satellites support the most demanding customer payload requirements.',
      image: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source
              src="https://www.spacex.com/media/starshield_hero_desktop.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <Shield className="w-24 h-24 mb-8 animate-fade-in" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            STARSHIELD
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            Supporting national security through SpaceX's proven technology
          </p>
        </div>

        <button
          onClick={scrollToCapabilities}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce
                   hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        >
          <ArrowRight className="w-8 h-8 rotate-90" />
        </button>
      </div>

      {/* Capabilities Section */}
      <div className="py-24" ref={capabilitiesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-spacex-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            CONTACT
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            To learn more about Starshield capabilities and services, contact our team.
          </p>
          <a
            href="mailto:admin@liveproject.live"
            className="inline-flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full
                     hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <span>admin@liveproject.live</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Starshield;