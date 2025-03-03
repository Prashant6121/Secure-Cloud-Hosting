import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import AnimatedSpaceBackground from '../components/AnimatedSpaceBackground';

interface MissionStat {
  value: number;
  target: number;
  label: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

const Mission = () => {
  const [stats, setStats] = useState<MissionStat[]>([
    { value: 0, target: 227, label: 'TOTAL LAUNCHES' },
    { value: 0, target: 185, label: 'TOTAL LANDINGS' },
    { value: 0, target: 157, label: 'TOTAL REFLIGHTS' }
  ]);

  useEffect(() => {
    const animateStats = () => {
      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          value: stat.value < stat.target ? stat.value + 1 : stat.target
        }))
      );
    };

    const interval = setInterval(() => {
      const allComplete = stats.every(stat => stat.value === stat.target);
      if (!allComplete) {
        animateStats();
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const timelineEvents: TimelineEvent[] = [
    {
      date: "05/2002",
      title: "SpaceX Founded",
      description: "Elon Musk founds Space Exploration Technologies Corp.",
      completed: true
    },
    {
      date: "09/2008",
      title: "First Successful Launch",
      description: "Falcon 1 becomes the first privately developed liquid fuel rocket to reach orbit.",
      completed: true
    },
    {
      date: "12/2010",
      title: "First Dragon Flight",
      description: "First flight of Dragon spacecraft, and first private company to return spacecraft from orbit.",
      completed: true
    },
    {
      date: "05/2012",
      title: "ISS Docking",
      description: "First private company to dock with the International Space Station.",
      completed: true
    },
    {
      date: "12/2015",
      title: "First Landing",
      description: "First successful landing of an orbital class rocket's first stage.",
      completed: true
    },
    {
      date: "02/2018",
      title: "Falcon Heavy Debut",
      description: "Successful first flight of Falcon Heavy, the world's most powerful operational rocket.",
      completed: true
    },
    {
      date: "05/2020",
      title: "Crew Dragon Launch",
      description: "First private company to send humans into orbit.",
      completed: true
    },
    {
      date: "04/2023",
      title: "Starship Test Flight",
      description: "First integrated flight test of Starship and Super Heavy Booster.",
      completed: true
    },
    {
      date: "12/2025",
      title: "Mars Cargo Mission",
      description: "Planned first cargo mission to Mars using Starship.",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Animated Background */}
      <div className="relative h-screen">
        <AnimatedSpaceBackground />
        <div className="absolute inset-0 z-10">
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500
                           animate-pulse">
                MISSION
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30
                         transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">MISSION TIMELINE</h2>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-8 relative group"
              >
                <div className="w-32 flex-shrink-0">
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className={`h-full border-l-2 transition-colors pl-8 pb-12 relative
                                ${event.completed ? 'border-blue-500' : 'border-gray-800'}`}>
                    <div className={`absolute -left-[5px] top-0 w-3 h-3 rounded-full transition-colors
                                  ${event.completed ? 'bg-blue-500' : 'bg-gray-800'}`} />
                    <div className={`text-xl font-medium mb-2 transition-colors
                                  ${event.completed ? 'text-white' : 'text-gray-400'}`}>
                      {event.title}
                    </div>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Gallery */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">MISSION GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80'
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-video relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Mission Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;