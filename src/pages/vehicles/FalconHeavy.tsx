import React from 'react';
import { ArrowRight, Rocket, Shield, Fuel, Layers, Power, Gauge, Target } from 'lucide-react';

const FalconHeavy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.spacex.com/media/FalconHeavy_vertical.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight animate-fade-in">
            FALCON HEAVY
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            OVER 5 MILLION LBS OF THRUST
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Power className="text-orange-500" size={24} />
                  <span className="text-3xl font-bold">5M+</span>
                </div>
                <p className="text-gray-400 text-sm">POUNDS OF THRUST</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="text-blue-500" size={24} />
                  <span className="text-3xl font-bold">27</span>
                </div>
                <p className="text-gray-400 text-sm">MERLIN ENGINES</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Gauge className="text-purple-500" size={24} />
                  <span className="text-3xl font-bold">3</span>
                </div>
                <p className="text-gray-400 text-sm">REUSABLE CORES</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-red-500" size={24} />
                  <span className="text-3xl font-bold">100%</span>
                </div>
                <p className="text-gray-400 text-sm">MISSION SUCCESS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80"
            alt="Falcon Heavy Launch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-8">OVERVIEW</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Falcon Heavy is the most powerful operational rocket in the world by a factor of two. 
              With the ability to lift into orbit nearly 64 metric tons (141,000 lb), 
              Falcon Heavy can lift more than twice the payload of the next closest operational vehicle.
            </p>
            <button className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full overflow-hidden">
              <span className="relative z-10">LEARN MORE</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">SPECIFICATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="text-blue-500" size={24} />
                <h3 className="text-xl font-semibold">HEIGHT</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">70m</div>
                  <div className="text-gray-400">229.6 ft</div>
                </div>
              </div>
            </div>
            <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-purple-500" size={24} />
                <h3 className="text-xl font-semibold">DIAMETER</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">12.2m</div>
                  <div className="text-gray-400">40 ft</div>
                </div>
              </div>
            </div>
            <div className="bg-spacex-gray/20 p-8 rounded-lg border border-spacex-gray/30">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-green-500" size={24} />
                <h3 className="text-xl font-semibold">MASS</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">1,420,788 kg</div>
                  <div className="text-gray-400">3,125,735 lb</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FalconHeavy;