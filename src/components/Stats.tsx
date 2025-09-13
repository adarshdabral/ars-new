"use client";

import { useState } from "react";
import { ChevronDown, Eye, Image, User, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

const TABS = [
  { name: "Work", path: "/work" },
  { name: "Mood Board", path: "/moodboard" },
  { name: "Your Stats", path: "/your-stats" },
  { name: "Drafts", path: "/draft" },
];

const STAT_CARDS = [
  { value: "120", label: "Project Views", icon: Eye, color: "from-blue-500 to-indigo-500" },
  { value: "40", label: "Artworks Sold", icon: Image, color: "from-green-400 to-emerald-500" },
  { value: "250", label: "Profile Views", icon: User, color: "from-purple-500 to-fuchsia-500" },
  { value: "10k", label: "Total Earnings", icon: DollarSign, color: "from-yellow-400 to-orange-500" },
];

export default function UserStats() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [activeTab, setActiveTab] = useState("Your Stats");
  const router = useRouter();

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    router.push(tab.path);
  };

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
          <p>
            Project Views <span className="float-right font-semibold">120</span>
          </p>
          <p>
            Artwork Sold <span className="float-right font-semibold">40</span>
          </p>
          <p>
            Following <span className="float-right font-semibold">250</span>
          </p>
          <p>
            Followers <span className="float-right font-semibold">400</span>
          </p>
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
            <div className="w-4 h-4 bg-blue-900 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full lg:w-3/4 p-4">
        {/* Header Tabs */}
        <div className="border-b text-sm mb-6">
          <nav className="flex space-x-8">
            {TABS.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab)}
                className={`pb-2 ${
                  activeTab === tab.name
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-end mb-6">
          <div className="relative inline-block">
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-900"
            >
              <option>All Projects</option>
              <option>Sold Projects</option>
              <option>In Progress</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAT_CARDS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                {/* Gradient Header with Icon */}
                <div
                  className={`h-20 bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                {/* Card Content */}
                <div className="bg-white p-6 text-center">
                  <p className="text-3xl font-extrabold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
