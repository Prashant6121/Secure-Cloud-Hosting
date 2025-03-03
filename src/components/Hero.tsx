import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import SpaceBackground from './SpaceBackground';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const backgrounds = [
    {
      url: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
      position: "center"
    },
    {
      url: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
      position: "center"
    },
    {
      url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80",
      position: "center"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

    // Background rotation
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 4000); // 4 seconds per background

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('next-launch');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background with Fallback */}
        <div className="absolute inset-0 bg-black">
          {/* Fallback Image - Mobile Optimized */}
          <img
            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=1080"
            alt="Rocket Engine Test"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            loading="eager"
            fetchpriority="high"
          />
          
          {/* Main Video - Mobile Optimized */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source
              src="https://www.spacex.com/media/Raptor_Engine_Testing.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content - Mobile Optimized */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight 
                         animate-fade-in bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200
                         [text-shadow:0_0_30px_rgba(255,255,255,0.5)]">
              ENGINEERING THE FUTURE
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 
                          blur-xl opacity-50 animate-pulse"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay
                     [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
            Pushing the boundaries of rocket propulsion
          </p>
        </div>

        {/* Scroll Indicator - Mobile Optimized */}
        <button
          onClick={scrollToNext}
          className={`absolute bottom-safe-bottom left-1/2 transform -translate-x-1/2 text-white 
                     transition-opacity duration-300 p-4 touch-target
                     ${scrolled ? 'opacity-0' : 'opacity-100'} animate-bounce`}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Next Mission Section - Mobile Optimized */}
      <section className="relative min-h-screen bg-black overflow-hidden" id="next-launch">
        {/* Animated Background Layers */}
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-1000 ease-in-out transform"
            style={{
              backgroundImage: `url(${bg.url})`,
              backgroundPosition: bg.position,
              backgroundSize: 'cover',
              opacity: currentBg === index ? 1 : 0,
              zIndex: currentBg === index ? 1 : 0,
              transform: `scale(${currentBg === index ? 1 : 1.1})`,
            }}
          />
        ))}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black z-10" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 z-20">
          <div className="max-w-3xl">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight relative">
                <span className="relative inline-block">
                  NEXT MISSION
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 
                                blur-2xl opacity-75 scale-150"></div>
                </span>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 
                              blur-3xl opacity-50 animate-pulse"></div>
              </h2>
            </div>
            <div className="relative overflow-hidden">
              <p className="text-xl text-gray-300 transform transition-all duration-500
                         animate-slide-up">
                Starlink Mission
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;