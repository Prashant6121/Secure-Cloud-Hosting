import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface LaunchTimeProps {
  date: string;
  time: string;
  status: 'upcoming' | 'success' | 'failure';
}

const LaunchTime: React.FC<LaunchTimeProps> = ({ date, time, status }) => {
  const [timeDisplay, setTimeDisplay] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        // Parse UTC time from the input
        const [timeValue, timeZone] = time.split(' ');
        if (!timeValue || timeZone !== 'UTC') {
          throw new Error('Invalid time format');
        }

        const launchDate = new Date(`${date}T${timeValue}Z`); // Ensure UTC parsing
        const now = new Date();

        if (status === 'upcoming') {
          // Format local launch time with timezone name
          setTimeDisplay(new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'shortOffset',
            hour12: false
          }).format(launchDate));
        } else {
          // For past launches
          const diff = now.getTime() - launchDate.getTime();
          
          let timeAgo;
          if (diff < 60000) { // less than 1 minute
            timeAgo = 'just now';
          } else if (diff < 3600000) { // less than 1 hour
            const minutes = Math.floor(diff / 60000);
            timeAgo = `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
          } else if (diff < 86400000) { // less than 1 day
            const hours = Math.floor(diff / 3600000);
            timeAgo = `${hours} hour${hours === 1 ? '' : 's'} ago`;
          } else {
            const days = Math.floor(diff / 86400000);
            timeAgo = `${days} day${days === 1 ? '' : 's'} ago`;
          }

          // Format past launch time
          setTimeDisplay(
            `${new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZoneName: 'shortOffset',
              hour12: false
            }).format(launchDate)} (${timeAgo})`
          );
        }
      } catch (error) {
        setTimeDisplay('Date TBD');
      }
    };

    updateTime();
  }, [date, time, status]);

  if (!date || !time) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        <Clock size={16} />
        <span>Date TBD</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-400">
      <Clock size={16} />
      <span>{timeDisplay}</span>
    </div>
  );
};

export default LaunchTime;