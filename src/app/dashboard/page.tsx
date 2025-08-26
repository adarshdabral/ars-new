"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat, Kalnia } from "next/font/google";

import Work from "./components/Work";
import Moodboard from "./components/MoodBoard";
import Stats from "./components/Stats";
import Draft from "./components/Drafts";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800", "900"],
});
const kalnia = Kalnia({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tabs = ["Work", "Mood Board", "Your Stats", "Drafts", "About me"];

export default function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState("Work");

  // -------- Mobile Layout --------
  const MobileDesign = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Link href="/dashboard">
        <div
          className={`bg-black text-white text-center py-3 text-lg font-bold cursor-pointer ${montserrat.className}`}
        >
          ARS{" "}
          <span className={`${kalnia.className} font-light`}>
            The Art Gallery
          </span>
        </div>
      </Link>

      {/* Cover */}
      <div className="relative h-32 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-sm text-gray-600">Cover Image</p>
        </div>
      </div>

      {/* Profile */}
      <div className="px-4 pb-4 relative">
        <div className="absolute left-1/2 -top-8 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white shadow-lg" />
        </div>

        <div className="text-center mb-4 pt-10">
          <h2 className="text-xl font-semibold text-gray-900">Artist Name</h2>
          <p className="text-sm text-gray-500">@artistname ✏️</p>
          <p className="text-xs text-gray-400 mt-1">Member since: 2024-07-20</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#7A5AF8] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === "Work" && <Work />}
          {activeTab === "Mood Board" && <Moodboard />}
          {activeTab === "Your Stats" && <Stats />}
          {activeTab === "Drafts" && <Draft />}
          {activeTab === "About me" && (
            <div className="bg-white p-4 rounded-lg shadow-sm text-center text-gray-500">
              Add your bio here...
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // -------- Desktop Layout --------
  const DesktopDesign = () => (
    <div>
      <Link href="/">
        <div
          className={`bg-black text-white text-center py-2 text-xl font-bold cursor-pointer ${montserrat.className}`}
        >
          ARS{" "}
          <span className={`${kalnia.className} font-light`}>
            The Art Gallery
          </span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Cover */}
        <div className="relative w-full h-56 bg-gray-200 rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-gray-600">Cover Image</p>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Left Panel */}
          <div className="w-[250px] flex flex-col gap-4">
            <div className="w-32 h-32 mx-auto -mt-24 z-50 bg-gray-300 rounded-full border-4 border-white shadow-lg" />

            <div className="text-center">
              <h2 className="text-sm font-semibold">Artist Name</h2>
              <p className="text-sm text-gray-500">@artistname</p>
              <p className="text-xs text-gray-400 mt-1">
                Member since: 2024-07-20
              </p>
            </div>

            <button className="w-full text-sm text-white font-semibold bg-[#13007D] rounded px-3 py-2">
              Edit Profile
            </button>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                About me
              </h3>
              <p className="text-xs text-gray-700 bg-gray-200 rounded p-2">
                Add your bio here...
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-medium text-gray-700">
                  Connect Account
                </h3>
                <span className="text-xs">✏️</span>
              </div>
              <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center">
                <button className="w-6 h-6 rounded-full bg-[#7A5AF8] text-white text-sm flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

          {/* Right Panel */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium cursor-pointer ${
                    activeTab === tab
                      ? "border-b-2 border-[#0C0583] text-[#0C0583]"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "Work" && <Work />}
            {activeTab === "Mood Board" && <Moodboard />}
            {activeTab === "Your Stats" && <Stats />}
            {activeTab === "Drafts" && <Draft />}
            {activeTab === "About me" && (
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-500">
                Add your bio here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile */}
      <div className="block lg:hidden">
        <MobileDesign />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopDesign />
      </div>
    </>
  );
}
