import React, { useState } from 'react';
import { Rocket, ArrowRight, Shield, Fuel, Layers, Navigation2 } from 'lucide-react';

interface Measurement {
  metric: string;
  imperial: string;
}

interface VehicleDetails {
  name: string;
  dimensions: {
    height: Measurement;
    diameter: Measurement;
    mass: Measurement;
  };
  propulsion: {
    engines: string;
    thrust: Measurement;
    type: string;
  };
  payload: {
    leo: Measurement;
    gto: Measurement;
    mars: Measurement;
  };
  performance: {
    launches: number;
    successes: number;
    successRate: number;
  };
  specifications: {
    stages: number;
    fuelType: string;
    fuelCapacity: Measurement;
    burnTime: string;
  };
  cost: {
    perLaunch: string;
    development: string;
  };
  safety: {
    protocols: string[];
    certifications: string[];
    emergencyProcedures: string[];
    maintenanceSchedule: {
      type: string;
      interval: string;
    }[];
  };
  environmental: {
    emissions: {
      type: string;
      value: string;
      impact: string;
    }[];
    wasteManagement: string[];
    noiseControl: string[];
    sustainability: string[];
  };
}

const falcon9Data: VehicleDetails = {
  name: "Falcon 9",
  dimensions: {
    height: { metric: "70 meters", imperial: "230 feet" },
    diameter: { metric: "3.7 meters", imperial: "12 feet" },
    mass: { metric: "549,054 kg", imperial: "1,210,457 lb" }
  },
  propulsion: {
    engines: "9 Merlin 1D",
    thrust: { metric: "7,607 kN", imperial: "1,710,000 lbf" },
    type: "LOX/RP-1"
  },
  payload: {
    leo: { metric: "22,800 kg", imperial: "50,265 lb" },
    gto: { metric: "8,300 kg", imperial: "18,300 lb" },
    mars: { metric: "4,020 kg", imperial: "8,860 lb" }
  },
  performance: {
    launches: 283,
    successes: 281,
    successRate: 99.3
  },
  specifications: {
    stages: 2,
    fuelType: "LOX (liquid oxygen) / RP-1 (kerosene)",
    fuelCapacity: { metric: "287,430 kg", imperial: "633,460 lb" },
    burnTime: "162 seconds (first stage)"
  },
  cost: {
    perLaunch: "$67 million",
    development: "$300 million"
  },
  safety: {
    protocols: [
      "Triple redundant flight computers",
      "Automated flight termination system",
      "Engine-out capability",
      "Pressure vessel qualification",
      "Structural margin verification"
    ],
    certifications: [
      "NASA Human Rating Certification",
      "FAA Launch Vehicle License",
      "ISO 9001:2015 Certification",
      "AS9100 Aerospace Certification"
    ],
    emergencyProcedures: [
      "Automated abort sequence",
      "Range safety protocols",
      "Emergency propellant dumping",
      "Safe mode activation",
      "Ground safety perimeter"
    ],
    maintenanceSchedule: [
      { type: "Pre-flight inspection", interval: "24 hours before launch" },
      { type: "Engine inspection", interval: "After each flight" },
      { type: "Full system review", interval: "Every 10 flights" },
      { type: "Component replacement", interval: "As per wear indicators" }
    ]
  },
  environmental: {
    emissions: [
      {
        type: "CO2",
        value: "100-200 tonnes per launch",
        impact: "Moderate - offset by reusability"
      },
      {
        type: "NOx",
        value: "< 1 tonne per launch",
        impact: "Low - high altitude dispersion"
      },
      {
        type: "Particulate Matter",
        value: "Minimal",
        impact: "Very low - filtered exhaust"
      }
    ],
    wasteManagement: [
      "Recycling of manufacturing materials",
      "Proper disposal of hazardous materials",
      "Water recovery systems",
      "Propellant recycling program"
    ],
    noiseControl: [
      "Sound suppression water system",
      "Acoustic protection structures",
      "Launch timing optimization",
      "Community noise monitoring"
    ],
    sustainability: [
      "Reusable first stage",
      "Solar-powered facilities",
      "Recycled materials in manufacturing",
      "Zero-waste initiatives"
    ]
  }
};

const VehicleInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const vehicle = falcon9Data;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Rocket },
    { id: 'propulsion', label: 'Propulsion', icon: ArrowRight },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'specifications', label: 'Specifications', icon: Layers },
    { id: 'environmental', label: 'Environmental', icon: Layers }
  ];

  const renderPropulsionSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Rocket className="text-blue-500" size={24} />
          <h3 className="text-xl font-semibold">Engine Configuration</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">First Stage</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• 9 Merlin 1D engines in octagonal pattern</li>
              <li>• Sea level thrust: 7,607 kN (1,710,000 lbf)</li>
              <li>• Vacuum thrust: 8,227 kN (1,849,500 lbf)</li>
              <li>• Throttle capability: 40% to 100%</li>
              <li>• Restart capability: Up to 3 times</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Second Stage</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• 1 Merlin Vacuum Engine</li>
              <li>• Vacuum thrust: 934 kN (210,000 lbf)</li>
              <li>• Multiple restart capability</li>
              <li>• Burn time: Up to 397 seconds</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Fuel className="text-orange-500" size={24} />
          <h3 className="text-xl font-semibold">Propellant Systems</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Fuel Specifications</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Fuel: Rocket-grade kerosene (RP-1)</li>
              <li>• Oxidizer: Liquid oxygen (LOX)</li>
              <li>• Mixture ratio: 2.27:1 (LOX:RP-1)</li>
              <li>• Total propellant mass: 287,430 kg</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Tank Configuration</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Aluminum-lithium alloy tanks</li>
              <li>• Separate LOX and RP-1 tanks</li>
              <li>• Helium pressurization system</li>
              <li>• Advanced thermal insulation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Navigation2 className="text-purple-500" size={24} />
          <h3 className="text-xl font-semibold">Engine Control</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Control Systems</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Triple redundant flight computers</li>
              <li>• Individual engine gimbal control</li>
              <li>• Advanced thrust vector control</li>
              <li>• Real-time performance monitoring</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Performance Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Engine-out capability</li>
              <li>• Autonomous thrust balancing</li>
              <li>• Precision throttle control</li>
              <li>• Optimized trajectory management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="text-red-500" size={24} />
          <h3 className="text-xl font-semibold">Performance Metrics</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Engine Performance</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Specific impulse (sea level): 282 seconds</li>
              <li>• Specific impulse (vacuum): 311 seconds</li>
              <li>• Chamber pressure: 1,410 psi</li>
              <li>• Expansion ratio: 16:1</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Operational Capabilities</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Rapid engine startup sequence</li>
              <li>• Deep throttling capability</li>
              <li>• Extended burn time operation</li>
              <li>• Relight capability for landing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSafetySection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-yellow-500" size={24} />
          <h3 className="text-xl font-semibold">Safety Protocols</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.safety.protocols.map((protocol, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full" />
              <span>{protocol}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-orange-500" size={24} />
          <h3 className="text-xl font-semibold">Emergency Procedures</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.safety.emergencyProcedures.map((procedure, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full" />
              <span>{procedure}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="text-blue-500" size={24} />
          <h3 className="text-xl font-semibold">Certifications</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.safety.certifications.map((cert, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-green-500" size={24} />
          <h3 className="text-xl font-semibold">Maintenance Schedule</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.safety.maintenanceSchedule.map((schedule, index) => (
            <li key={index} className="flex flex-col">
              <span className="font-medium">{schedule.type}</span>
              <span className="text-gray-400 text-sm">{schedule.interval}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderSpecificationsSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Rocket className="text-blue-500" size={24} />
          <h3 className="text-xl font-semibold">Vehicle Structure</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">First Stage</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Length: 41.2m</li>
              <li>• Diameter: 3.7m</li>
              <li>• Material: Aluminum-lithium alloy</li>
              <li>• Recovery System: Grid fins and landing legs</li>
              <li>• Reusability: Up to 10 flights</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Second Stage</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Length: 12.6m</li>
              <li>• Diameter: 3.7m</li>
              <li>• Material: Aluminum-lithium alloy</li>
              <li>• Payload Fairing: 13.1m height</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="text-purple-500" size={24} />
          <h3 className="text-xl font-semibold">Performance Specifications</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Launch Capabilities</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Max Payload to LEO: 22,800 kg</li>
              <li>• Max Payload to GTO: 8,300 kg</li>
              <li>• Max Payload to Mars: 4,020 kg</li>
              <li>• Launch Success Rate: 99%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Flight Parameters</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Max Speed: 7,500 km/h</li>
              <li>• Max Altitude: 250 km</li>
              <li>• Flight Duration: Variable</li>
              <li>• Landing Accuracy: 10m radius</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Fuel className="text-orange-500" size={24} />
          <h3 className="text-xl font-semibold">Propulsion Details</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Engine Specifications</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Engine Type: Merlin 1D</li>
              <li>• Number of Engines: 9 (first stage)</li>
              <li>• Thrust per Engine: 845 kN</li>
              <li>• Specific Impulse: 282s (sea level)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Fuel System</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Fuel Type: RP-1 (kerosene)</li>
              <li>• Oxidizer: Liquid oxygen</li>
              <li>• Total Capacity: 287,430 kg</li>
              <li>• Consumption Rate: 1,233 kg/s</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-green-500" size={24} />
          <h3 className="text-xl font-semibold">Control Systems</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• GPS Systems: Dual redundant</li>
              <li>• Inertial Navigation: Triple redundant</li>
              <li>• Flight Computers: Fault-tolerant</li>
              <li>• Control Surfaces: Grid fins</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Communication</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Telemetry: Real-time data</li>
              <li>• Ground Control: Continuous link</li>
              <li>• Backup Systems: Multiple channels</li>
              <li>• Emergency Protocol: Autonomous</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnvironmentalSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-green-500" size={24} />
          <h3 className="text-xl font-semibold">Emissions Data</h3>
        </div>
        <ul className="space-y-4">
          {vehicle.environmental.emissions.map((emission, index) => (
            <li key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium">{emission.type}</span>
                <span className="text-gray-400">{emission.value}</span>
              </div>
              <p className="text-sm text-gray-400">{emission.impact}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-blue-500" size={24} />
          <h3 className="text-xl font-semibold">Waste Management</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.environmental.wasteManagement.map((practice, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
              <span>{practice}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-yellow-500" size={24} />
          <h3 className="text-xl font-semibold">Noise Control</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.environmental.noiseControl.map((measure, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full" />
              <span>{measure}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-green-500" size={24} />
          <h3 className="text-xl font-semibold">Sustainability</h3>
        </div>
        <ul className="space-y-3">
          {vehicle.environmental.sustainability.map((initiative, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 mt-2 bg-green-500 rounded-full" />
              <span>{initiative}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-spacex-gray/20 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80"
            alt="Falcon 9"
            className="w-full h-[60vh] object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">{vehicle.name}</h1>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Success Rate</span>
                <span className="ml-2 text-green-400">{vehicle.performance.successRate}%</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Total Launches</span>
                <span className="ml-2">{vehicle.performance.launches}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-4 mb-8">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all
                  ${activeTab === id
                    ? 'bg-white text-black'
                    : 'bg-spacex-gray/20 text-white hover:bg-spacex-gray/30'
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'propulsion' && renderPropulsionSection()}
          {activeTab === 'safety' && renderSafetySection()}
          {activeTab === 'specifications' && renderSpecificationsSection()}
          {activeTab === 'environmental' && renderEnvironmentalSection()}

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Height</span>
                    <span>{vehicle.dimensions.height.metric} ({vehicle.dimensions.height.imperial})</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Diameter</span>
                    <span>{vehicle.dimensions.diameter.metric} ({vehicle.dimensions.diameter.imperial})</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Mass</span>
                    <span>{vehicle.dimensions.mass.metric} ({vehicle.dimensions.mass.imperial})</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                <h3 className="text-xl font-semibold mb-4">Propulsion</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Engines</span>
                    <span>{vehicle.propulsion.engines}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Thrust</span>
                    <span>{vehicle.propulsion.thrust.metric} ({vehicle.propulsion.thrust.imperial})</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Type</span>
                    <span>{vehicle.propulsion.type}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                <h3 className="text-xl font-semibold mb-4">Payload Capacity</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">LEO</span>
                    <span>{vehicle.payload.leo.metric} ({vehicle.payload.leo.imperial})</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">GTO</span>
                    <span>{vehicle.payload.gto.metric} ({vehicle.payload.gto.imperial})</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Mars</span>
                    <span>{vehicle.payload.mars.metric} ({vehicle.payload.mars.imperial})</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Stages</span>
                    <span>{vehicle.specifications.stages}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Fuel Type</span>
                    <span>{vehicle.specifications.fuelType}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Burn Time</span>
                    <span>{vehicle.specifications.burnTime}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                <h3 className="text-xl font-semibold mb-4">Cost</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Per Launch</span>
                    <span>{vehicle.cost .perLaunch}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Development</span>
                    <span>{vehicle.cost.development}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
                <h3 className="text-xl font-semibold mb-4">Performance</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Total Launches</span>
                    <span>{vehicle.performance.launches}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Successful</span>
                    <span>{vehicle.performance.successes}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Success Rate</span>
                    <span className="text-green-400">{vehicle.performance.successRate}%</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;