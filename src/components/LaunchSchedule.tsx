import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, AlertCircle } from 'lucide-react';
import LaunchTime from './LaunchTime';

interface LaunchScheduleProps {
  date: string;
  time: string;
  status: 'upcoming' | 'success' | 'failure';
  missionStatus?: 'scheduled' | 'delayed' | 'hold' | 'scrubbed';
}

const LaunchSchedule: React.FC<LaunchScheduleProps> = ({
  date,
  time,
  status,
  missionStatus = 'scheduled'
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [originalTime, setOriginalTime] = useState('');
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    // Store the original UTC time and calculate remaining time
    const [timeValue] = time.split(' ');
    if (timeValue) {
      const utcDate = new Date(`${date}T${timeValue}Z`);
      setOriginalTime(utcDate.toISOString());

      const updateRemainingTime = () => {
        const now = new Date();
        const diff = utcDate.getTime() - now.getTime();

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setRemainingTime(`${days} days ${hours} hours ${minutes} minutes`);
        } else {
          setRemainingTime('Launch time has passed');
        }
      };

      updateRemainingTime();
      const timer = setInterval(updateRemainingTime, 60000); // Update every minute

      return () => clearInterval(timer);
    }
  }, [date, time]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'text-green-500';
      case 'delayed': return 'text-yellow-500';
      case 'hold': return 'text-orange-500';
      case 'scrubbed': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const formatDateInTimezone = (isoDate: string, timezone: string) => {
    try {
      const date = new Date(isoDate);
      return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: timezone,
        hour12: false
      }).format(date);
    } catch (error) {
      return 'Invalid date';
    }
  };

  const commonTimezones = [
    { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
    { value: 'America/New_York', label: 'EST (Eastern Time)' },
    { value: 'America/Los_Angeles', label: 'PST (Pacific Time)' },
    { value: 'Europe/London', label: 'GMT (Greenwich Mean Time)' },
    { value: 'Asia/Tokyo', label: 'JST (Japan Standard Time)' },
    { value: 'Australia/Sydney', label: 'AEST (Australian Eastern Time)' }
  ];

  return (
    <div className="bg-spacex-gray/20 p-6 rounded-lg border border-spacex-gray/30">
      {/* Main Launch Time Display */}
      <div className="mb-6">
        <LaunchTime date={date} time={time} status={status} />
      </div>

      {/* Remaining Time Display */}
      {status === 'upcoming' && remainingTime && (
        <div className="mb-6 p-4 bg-black/30 rounded-lg border border-spacex-gray/30">
          <p className="text-sm text-gray-400 mb-2">Time Remaining:</p>
          <p className="text-white font-mono text-lg">{remainingTime}</p>
        </div>
      )}

      {/* Mission Status */}
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle size={16} className={getStatusColor(missionStatus)} />
        <span className={`text-sm font-medium ${getStatusColor(missionStatus)}`}>
          Mission Status: {missionStatus.charAt(0).toUpperCase() + missionStatus.slice(1)}
        </span>
      </div>

      {/* Original UTC Time */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar size={16} />
          <span>Original Launch Date: {new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={16} />
          <span>Original Launch Time: {time}</span>
        </div>
      </div>

      {/* Timezone Selector */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Globe size={16} />
          <label htmlFor="timezone" className="text-sm">View in Different Timezone:</label>
        </div>
        <select
          id="timezone"
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
          className="w-full bg-black/50 border border-spacex-gray/30 rounded-lg px-3 py-2 text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {commonTimezones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>

        {/* Converted Time Display */}
        {originalTime && (
          <div className="mt-4 p-4 bg-black/30 rounded-lg border border-spacex-gray/30">
            <p className="text-sm text-gray-400 mb-2">Launch Time in Selected Timezone:</p>
            <p className="text-white font-mono">
              {formatDateInTimezone(originalTime, selectedTimezone)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchSchedule;