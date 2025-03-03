import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, MapPin, ExternalLink, Rocket, Check, X, Play, Clock, Target, Repeat } from 'lucide-react';
import LaunchTime from '../components/LaunchTime';
import LaunchSchedule from '../components/LaunchSchedule';

interface Launch {
  id: string;
  date: string;
  time: string;
  name: string;
  provider: string;
  vehicle: string;
  site: string;
  description: string;
  payloads: string[];
  backgroundUrl: string;
  status: 'upcoming' | 'success' | 'failure';
  missionStatus?: 'scheduled' | 'delayed' | 'hold' | 'scrubbed';
  highlights?: string[];
}

const launches: Launch[] = [
  {
    id: 'ul1',
    date: '2025-03-18',
    time: '14:30 UTC',
    name: 'STARLINK GROUP 6-11',
    provider: 'SpaceX',
    vehicle: 'Falcon 9',
    site: 'Cape Canaveral Space Force Station, FL',
    description: 'A Falcon 9 rocket will launch another batch of Starlink satellites to continue building SpaceX\'s internet constellation.',
    payloads: ['54 Starlink v2 Mini satellites'],
    backgroundUrl: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80',
    status: 'upcoming',
    missionStatus: 'scheduled'
  },
  {
    id: 'ul2',
    date: '2025-03-22',
    time: '09:15 UTC',
    name: 'CREW-9 MISSION',
    provider: 'SpaceX',
    vehicle: 'Falcon 9',
    site: 'Kennedy Space Center, FL',
    description: 'A Crew Dragon spacecraft will ferry four astronauts to the International Space Station for a six-month stay.',
    payloads: ['4 astronauts', 'Science payloads', 'ISS supplies'],
    backgroundUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80',
    status: 'upcoming',
    missionStatus: 'scheduled'
  },
  {
    id: 'pl1',
    date: '2024-09-15',
    time: '18:20 UTC',
    name: 'STARLINK GROUP 6-9',
    provider: 'SpaceX',
    vehicle: 'Falcon 9',
    site: 'Vandenberg Space Force Base, CA',
    description: 'Successfully deployed 22 Starlink satellites to low Earth orbit.',
    payloads: ['22 Starlink satellites'],
    backgroundUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80',
    status: 'success',
    highlights: [
      'First stage landed on droneship',
      'Perfect orbital insertion',
      'Rapid reuse turnaround'
    ]
  },
  {
    id: 'pl2',
    date: '2024-08-30',
    time: '12:45 UTC',
    name: 'ARTEMIS III',
    provider: 'NASA',
    vehicle: 'SLS Block 1',
    site: 'Kennedy Space Center, FL',
    description: 'Historic mission carrying astronauts to the lunar surface.',
    payloads: ['Orion spacecraft', 'Lunar lander', 'Science payloads'],
    backgroundUrl: 'https://images.unsplash.com/photo-1457364559154-aa2644600ebb?auto=format&fit=crop&q=80',
    status: 'success',
    highlights: [
      'Successful lunar landing',
      'First woman on the Moon',
      'Week-long surface operations'
    ]
  }
];

const missionStats = {
  completedMissions: 227,
  totalLandings: 185,
  totalReflights: 157
};

const Launches: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    completedMissions: 0,
    totalLandings: 0,
    totalReflights: 0
  });
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        completedMissions: Math.round(missionStats.completedMissions * progress),
        totalLandings: Math.round(missionStats.totalLandings * progress),
        totalReflights: Math.round(missionStats.totalReflights * progress)
      });

      if (step === steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const { upcomingLaunches, pastLaunches } = useMemo(() => {
    const now = new Date();
    
    const upcoming = launches
      .filter(launch => launch.status === 'upcoming')
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    const past = launches
      .filter(launch => launch.status !== 'upcoming')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { upcomingLaunches: upcoming, pastLaunches: past };
  }, []);

  const formatDate = (dateStr: string, timeStr: string) => {
    const date = new Date(`${dateStr}T${timeStr.split(' ')[0]}`);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
      timeZoneName: 'short'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[40vh] sm:h-[50vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=1080"
            alt="Rocket Launch"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-between py-16 sm:py-24">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                LAUNCHES
              </h1>
              <p className="text-lg sm:text-xl text-gray-300">
                Tracking our journey to space
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-blue-500" size={24} />
                  <span className="text-3xl font-bold">{animatedStats.completedMissions}</span>
                </div>
                <p className="text-gray-400 text-sm">COMPLETED MISSIONS</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-green-500" size={24} />
                  <span className="text-3xl font-bold">{animatedStats.totalLandings}</span>
                </div>
                <p className="text-gray-400 text-sm">TOTAL LANDINGS</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-3 mb-2">
                  <Repeat className="text-purple-500" size={24} />
                  <span className="text-3xl font-bold">{animatedStats.totalReflights}</span>
                </div>
                <p className="text-gray-400 text-sm">TOTAL REFLIGHTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex space-x-8 whitespace-nowrap">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-2 border-b-2 transition-colors min-w-[120px] ${
                activeTab === 'upcoming'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              UPCOMING
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-4 px-2 border-b-2 transition-colors min-w-[120px] ${
                activeTab === 'past'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              PAST
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-4 sm:space-y-6">
          {(activeTab === 'upcoming' ? upcomingLaunches : pastLaunches).map((launch) => (
            <div 
              key={launch.id}
              className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-black 
                       rounded-lg border border-gray-800 hover:border-[#005288] transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                <img
                  src={launch.backgroundUrl}
                  alt={launch.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`px-3 py-1 text-white text-sm font-medium rounded
                                  ${launch.status === 'success' ? 'bg-green-600' : 
                                    launch.status === 'failure' ? 'bg-red-600' : 'bg-[#005288]'}`}>
                        {launch.status === 'upcoming' ? 'UPCOMING' : 
                         launch.status === 'success' ? 'SUCCESSFUL' : 'FAILED'}
                      </div>
                      <span className="text-[#005288] font-medium">{launch.provider}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{launch.name}</h2>

                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{formatDate(launch.date, launch.time)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Rocket size={16} />
                        <span>{launch.vehicle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{launch.site}</span>
                      </div>
                    </div>

                    {launch.status === 'upcoming' && (
                      <LaunchSchedule
                        date={launch.date}
                        time={launch.time}
                        status={launch.status}
                        missionStatus={launch.missionStatus}
                      />
                    )}

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {launch.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {launch.payloads.map((payload, index) => (
                        <div 
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full
                                 flex items-center gap-2"
                        >
                          <Rocket size={14} />
                          {payload}
                        </div>
                      ))}
                    </div>

                    {launch.status !== 'upcoming' && launch.highlights && (
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">MISSION HIGHLIGHTS</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {launch.highlights.map((highlight, index) => (
                            <div 
                              key={index}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <Check className="text-green-500 flex-shrink-0 mt-1" size={14} />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {((activeTab === 'upcoming' && upcomingLaunches.length === 0) ||
          (activeTab === 'past' && pastLaunches.length === 0)) && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg text-gray-400">
              {activeTab === 'upcoming'
                ? 'No upcoming launches scheduled.'
                : 'No past launches to display.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Launches;