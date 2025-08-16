'use client';

import { Plus } from 'lucide-react';

export default function Draft() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-6 px-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 p-4">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full" />
          <h2 className="mt-4 text-lg font-bold text-center">Artist Name</h2>
          <p className="text-sm text-gray-600">@artistname</p>
          <p className="text-sm text-gray-500 mb-4">Member since: July 26, 2025</p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm">
            Edit Profile Info
          </button>
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p>Project Views <span className="float-right font-semibold">120</span></p>
          <p>Artwork Sold <span className="float-right font-semibold">40</span></p>
          <p>Following <span className="float-right font-semibold">250</span></p>
          <p>Followers <span className="float-right font-semibold">400</span></p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">About me</h3>
          <p className="text-sm text-gray-600">
            Buyers get curated original art with framing, AR previews, Automation Models.
            Artist sets their fixed prices. Buyers gain trust and affordability.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Connect Account</h3>
          <div className="w-full bg-gray-100 rounded-md flex items-center justify-center py-2">
            <Plus className="w-4 h-4 text-blue-900" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-4">
        {/* Tabs */}
        <div className="border-b text-sm mb-6">
          <nav className="flex space-x-8">
            <button className="pb-2">Work</button>
            <button className="pb-2">Mood board</button>
            <button className="pb-2">Your Stats</button>
            <button className="pb-2 border-b-2 border-black font-semibold">Drafts</button>
          </nav>
        </div>

        {/* Draft Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Draft 1 Placeholder */}
          <div className="w-full h-52 bg-gray-200 rounded-lg" />

          {/* Create a Project Card */}
          <div className="border border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center p-4 h-52">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <Plus className="text-blue-900 w-5 h-5" />
            </div>
            <button className="mt-2 text-sm text-white bg-blue-900 px-4 py-1 rounded-full">
              Create a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
