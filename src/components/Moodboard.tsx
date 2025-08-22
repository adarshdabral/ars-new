"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const TABS = [
  { name: 'Work', path: '/work' },
  { name: 'Mood Board', path: '/moodboard' },
  { name: 'Your Stats', path: '/stats' },
  { name: 'Drafts', path: '/draft' }
];

const Moodboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Mood Board");
  const router = useRouter();

  const handleTabClick = (tab) => {
    setSelectedTab(tab.name);
    router.push(tab.path);
  };

  return (
    <div className="bg-white min-h-screen font-sans mb-16">
      {/* Banner */}
      <div className="max-w-6xl mx-auto px-6 mt-5 flex flex-col items-center pointer-events-none select-none">
        <div className="w-full h-32 rounded-2xl bg-gray-100 flex items-center justify-center relative">
          <span className="text-gray-400">Banner</span>
          <div className="absolute -bottom-8 left-10">
            <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex gap-12 mt-14 px-6 pointer-events-auto">
        {/* Profile sidebar */}
        <aside className="flex flex-col w-80 min-w-[18rem]">
          <div className="h-12" />
          <span className="text-xl font-semibold text-zinc-900 mt-2">Artist Name</span>
          <span className="text-sm text-gray-500 -mt-1">@artistname</span>
          <span className="text-xs text-gray-400 mt-2">Member since July 29, 2025</span>
          <button className="bg-[#13007D] hover:bg-[#1908b0] text-sm text-white px-4 py-2 mt-6 mb-3 rounded-full font-semibold">
            Edit Profile Info
          </button>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Project Views</span>
              <span className="font-semibold text-zinc-900">120</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Artwork Sold</span>
              <span className="font-semibold text-zinc-900">40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Following</span>
              <span className="font-semibold text-zinc-900">250</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100 mb-3">
              <span className="text-gray-700">Followers</span>
              <span className="font-semibold text-zinc-900">400</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="font-semibold text-base text-zinc-900 mb-1 mt-1">About me</div>
            <div className="text-sm text-gray-600">
              Buying art can be subject on which a lot has been written. Amazon, eBay, Saatchi, and 1stdibs are well known for their selection.
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <div className="font-semibold text-base text-zinc-900 mb-1">Connect Account</div>
            <div className="flex gap-3 items-center mb-1">
              <span className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-700">I</span>
              <span className="text-gray-700 text-sm">Instagram</span>
            </div>
            <div className="text-center mx-auto mt-3">
              <button className="bg-[#13007D] hover:bg-[#1908b0] text-xs font-semibold text-white px-3 py-1 rounded-full w-28">
                Connect
              </button>
            </div>
          </div>
        </aside>

        {/* Main Moodboard Section */}
        <section className="flex-1">
          {/* Tabs */}
          <div className="flex gap-8 mb-5 border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.name}
                className={`px-1 pb-2 font-semibold text-base border-b-2 ${
                  selectedTab === tab.name
                    ? "border-[#13007D] text-[#13007D]"
                    : "border-transparent text-gray-600"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          {/* Moodboard grid */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-100 rounded-lg h-60 p-5 flex flex-col">
              <div className="text-base font-medium text-black mb-3">Moodboard Name</div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div className="bg-gray-200 rounded-lg" />
                <div className="bg-gray-200 rounded-lg" />
                <div className="bg-gray-200 rounded-lg" />
                <div className="bg-gray-200 rounded-lg" />
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-60 p-5 flex flex-col">
              <div className="text-base font-medium text-black mb-3">Moodboard Name</div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div className="bg-gray-200 rounded-lg" />
                <div className="bg-gray-200 rounded-lg" />
                <div className="bg-gray-200 rounded-lg" />
                <div className="bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Moodboard;
