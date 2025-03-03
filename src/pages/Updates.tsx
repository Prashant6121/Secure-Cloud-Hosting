import React, { useState, useEffect } from 'react';
import { Search, Rss, Share2, Filter, Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';

interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'feature' | 'announcement' | 'maintenance' | 'release';
  tags: string[];
}

// Sample updates data
const updates: Update[] = [
  {
    id: '1',
    date: '2025-03-15',
    title: 'New Mission Control Interface',
    description: 'Introducing our completely redesigned mission control interface with real-time telemetry data, enhanced visualization tools, and improved user experience for mission operators.',
    type: 'feature',
    tags: ['UI', 'Mission Control', 'Telemetry']
  },
  {
    id: '2',
    date: '2025-03-10',
    title: 'Starship SN20 Launch Success',
    description: 'Successfully completed the orbital test flight of Starship SN20, marking a major milestone in our journey to Mars. The vehicle demonstrated perfect performance during ascent, orbital insertion, and landing.',
    type: 'announcement',
    tags: ['Starship', 'Launch', 'Milestone']
  },
  {
    id: '3',
    date: '2025-03-05',
    title: 'Scheduled Maintenance Notice',
    description: 'Platform maintenance scheduled for March 7th, 2025. Expected downtime of 2 hours for system upgrades and performance improvements.',
    type: 'maintenance',
    tags: ['Maintenance', 'Downtime']
  },
  {
    id: '4',
    date: '2025-03-01',
    title: 'Dragon Capsule Updates',
    description: 'Released version 2.5 of the Dragon capsule software, featuring improved docking procedures and enhanced life support systems.',
    type: 'release',
    tags: ['Dragon', 'Software', 'Safety']
  }
];

const ITEMS_PER_PAGE = 5;

const UpdatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = Array.from(new Set(updates.flatMap(update => update.tags)));

  // Filter updates based on search, type, and tags
  const filteredUpdates = updates.filter(update => {
    const matchesSearch = 
      update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || update.type === selectedType;
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => update.tags.includes(tag));

    return matchesSearch && matchesType && matchesTags;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredUpdates.length / ITEMS_PER_PAGE);
  const paginatedUpdates = filteredUpdates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'feature': return 'bg-blue-500';
      case 'announcement': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'release': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleShare = (update: Update) => {
    if (navigator.share) {
      navigator.share({
        title: update.title,
        text: update.description,
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-spacex-gray/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Updates & Announcements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay informed about the latest developments, features, and announcements from SpaceX.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-spacex-gray/20 border border-spacex-gray/30 rounded-lg
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => window.open('/rss.xml', '_blank')}
              className="px-4 py-2 bg-spacex-gray/20 border border-spacex-gray/30 rounded-lg text-white
                       hover:bg-spacex-gray/30 transition-colors duration-200 flex items-center gap-2"
            >
              <Rss size={20} />
              <span className="hidden sm:inline">RSS Feed</span>
            </button>
            
            <div className="relative group">
              <button
                className="px-4 py-2 bg-spacex-gray/20 border border-spacex-gray/30 rounded-lg text-white
                         hover:bg-spacex-gray/30 transition-colors duration-200 flex items-center gap-2"
              >
                <Filter size={20} />
                <span className="hidden sm:inline">Filter</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-black border border-spacex-gray/30 rounded-lg shadow-xl
                           opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                <div className="p-2">
                  <div className="mb-2 text-sm text-gray-400">Type</div>
                  {['all', 'feature', 'announcement', 'maintenance', 'release'].map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedType === type ? 'bg-blue-500/20 text-blue-400' : 'text-white hover:bg-spacex-gray/20'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-spacex-gray/20 text-gray-300 hover:bg-spacex-gray/30'
              }`}
            >
              <Tag size={14} />
              {tag}
            </button>
          ))}
        </div>

        {/* Updates List */}
        <div className="space-y-6">
          {paginatedUpdates.map(update => (
            <div
              key={update.id}
              className="bg-spacex-gray/10 border border-spacex-gray/20 rounded-lg p-6 transition-all duration-300
                       hover:bg-spacex-gray/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(update.type)}`}>
                      {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(update.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{update.title}</h3>
                  <p className="text-gray-300 mb-4">{update.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {update.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-spacex-gray/20 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => handleShare(update)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-200"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="text-gray-300">
              Page {currentPage} of {totalPages}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatesPage;