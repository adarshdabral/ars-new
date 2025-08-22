'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const tabs = [
  { name: 'Work', path: '/work' },
  { name: 'Mood Board', path: '/moodboard' },
  { name: 'Your Stats', path: '/stats' },
  { name: 'Drafts', path: '/draft' }
];

const UserDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Work');

  const artworks = [
    '/artworks/art1.jpg',
    '/artworks/art2.jpg',
    // Add more as needed
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    router.push(tab.path);
  };

  return (
    <div className="w-full max-w-6xl sm:max-w-screen-xl mx-auto px-4 sm:px-6 py-8 overflow-x-hidden">

      {/* Banner + Profile */}
      <div className="relative w-full h-40 sm:h-52 bg-gray-200 rounded-md mb-12 flex items-end justify-center">
        <div className="absolute -bottom-10 left-6 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-300 border-4 border-white" />
      </div>

      <div className="flex flex-col sm:flex-row sm:ml-6 gap-12 sm:gap-20">
        {/* Left: Profile Info */}
        <div className="w-full sm:w-64 flex flex-col gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">Artist Name</h2>
            <p className="text-xs sm:text-sm text-gray-500">@artistname</p>
            <p className="text-xs text-gray-400">Member since July 20, 2024</p>
          </div>

          <button className="bg-[#0C0583] text-white py-2 rounded-md text-xs sm:text-sm w-full max-w-xs">
            Edit Profile Info
          </button>

          <div className="text-xs sm:text-sm text-gray-700">
            <p>
              Project Views: <span className="font-semibold">120</span>
            </p>
            <p>
              Artwork Sold: <span className="font-semibold">30</span>
            </p>
            <p>
              Following: <span className="font-semibold">200</span>
            </p>
            <p>
              Followers: <span className="font-semibold">400</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mt-2 mb-1 text-sm sm:text-base">About Me</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              A passionate artist and designer at ARS. Love blending tradition with innovation
              through my art.
            </p>
          </div>

          <button className="mt-2 border border-gray-300 px-3 py-1 rounded text-xs sm:text-sm max-w-xs">
            Connect Account
          </button>
        </div>

        {/* Right: Tabs and Artworks */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-4 sm:gap-6 mb-6 border-b border-gray-300 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab)}
                className={`whitespace-nowrap pb-2 text-xs sm:text-sm font-medium ${
                  activeTab === tab.name
                    ? 'border-b-2 border-[#0C0583] text-[#0C0583]'
                    : 'text-gray-500'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Upload Card */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-md h-32 sm:h-40 cursor-pointer hover:bg-gray-50">
              <span className="text-3xl sm:text-4xl font-bold text-[#0C0583]">+</span>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Upload your artwork</p>
            </div>

            {/* Render Artworks */}
            {artworks.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-32 sm:h-40 rounded-md overflow-hidden shadow-sm"
              >
                <Image src={img} alt={`artwork-${idx}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
