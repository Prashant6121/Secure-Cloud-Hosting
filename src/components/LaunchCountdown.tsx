import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(12, 0, 0, 0); // Set to noon

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        setIsLoading(false);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    setIsLoading(false);

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array since we don't need to re-run this effect

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const getUnitLabel = (unit: string, value: number): string => {
    if (unit === 'days') return value === 1 ? 'DAY' : 'DAYS';
    if (unit === 'hours') return value === 1 ? 'HOUR' : 'HOURS';
    if (unit === 'minutes') return value === 1 ? 'MINUTE' : 'MINUTES';
    return value === 1 ? 'SECOND' : 'SECONDS';
  };

  if (isLoading) {
    return (
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-8"></div>
            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
          {isExpired ? 'LAUNCH COMPLETED' : 'NEXT LAUNCH'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit} 
              className="p-4 bg-gradient-to-b from-spacex-gray/30 to-spacex-gray/10 rounded-lg backdrop-blur-sm 
                         transition-all duration-300 hover:from-spacex-gray/40 hover:to-spacex-gray/20 
                         border border-spacex-gray/20"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 tabular-nums transition-all">
                {formatNumber(value)}
              </div>
              <div className="text-gray-400 uppercase text-xs sm:text-sm tracking-wider">
                {getUnitLabel(unit, value)}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 space-y-2">
          {!isExpired && (
            <>
              <p className="text-xl text-gray-200 font-medium">
                STARLINK GROUP 6-9
              </p>
              <p className="text-sm text-gray-400">
                FALCON 9 • CAPE CANAVERAL
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdown;