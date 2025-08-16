'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = ['Work', 'Mood Board', 'Your Stats', 'Drafts'];

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('Work');

  const artworks = [
    '/artworks/art1.jpg',
    '/artworks/art2.jpg',
    // Add more as needed
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-12">
      {/* Banner + Profile */}
      <div className="relative w-full h-52 bg-gray-200 rounded-md mb-16 flex items-end justify-center">
        <div className="absolute -bottom-10 left-10 w-24 h-24 rounded-full bg-gray-300 border-4 border-white" />
      </div>

      <div className="ml-10 flex gap-20">
        {/* Left: Profile Info */}
        <div className="w-64 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold">Artist Name</h2>
            <p className="text-sm text-gray-500">@artistname</p>
            <p className="text-xs text-gray-400">Member since July 20, 2024</p>
          </div>

          <button className="bg-[#0C0583] text-white py-2 rounded-md text-sm">Edit Profile Info</button>

          <div className="text-sm text-gray-700">
            <p>Project Views: <span className="font-semibold">120</span></p>
            <p>Artwork Sold: <span className="font-semibold">30</span></p>
            <p>Following: <span className="font-semibold">200</span></p>
            <p>Followers: <span className="font-semibold">400</span></p>
          </div>

          <div>
            <h3 className="font-semibold mt-2 mb-1">About Me</h3>
            <p className="text-sm text-gray-600">
              A passionate artist and designer at ARS. Love blending tradition with innovation through my art.
            </p>
          </div>

          <button className="mt-2 border border-gray-300 px-3 py-1 rounded text-sm">Connect Account</button>
        </div>

        {/* Right: Tabs and Artwork */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab ? 'border-b-2 border-[#0C0583] text-[#0C0583]' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Upload Card */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-md h-40 cursor-pointer hover:bg-gray-50">
              <span className="text-2xl font-bold text-[#0C0583]">+</span>
              <p className="text-sm text-gray-600 mt-1">Upload your artwork</p>
            </div>

            {/* Render Artworks */}
            {artworks.map((img, idx) => (
              <div key={idx} className="relative w-full h-40 rounded-md overflow-hidden shadow-sm">
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
