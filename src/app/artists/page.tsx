import Navbar from "@/components/Navbar";
import React from "react";

export default function ArtistsPage() {
  const artists = Array.from({ length: 9 }).map((_, idx) => ({
    id: idx + 1,
    name: "Rahul Kumar",
    username: "@rahulkumar",
    artworks: 40,
    followers: 750,
    projectViews: "1.5k",
  }));

  return (
    <>
      <Navbar />
      <section className="w-full max-w-screen-xl mx-auto px-6 py-16 bg-gray-50 min-h-screen">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
          Our Artists
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Cover Image Area */}
              <div className="relative h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
                <div className="absolute inset-0 bg-gray-300"></div>

                {/* Profile Picture - positioned to overlap cover */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                  <div className="w-20 h-20 bg-gray-400 rounded-full border-4 border-white shadow-md" />
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-12 pb-6 px-6 flex flex-col items-center text-center">
                {/* Artist Info */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{artist.username}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 text-center mb-6 w-full">
                  <div className="border-r border-gray-200 last:border-r-0">
                    <p className="text-lg font-bold text-gray-800">
                      {artist.artworks}
                    </p>
                    <p className="text-xs text-gray-500">Artworks Sold</p>
                  </div>
                  <div className="border-r border-gray-200 last:border-r-0">
                    <p className="text-lg font-bold text-gray-800">
                      {artist.followers}
                    </p>
                    <p className="text-xs text-gray-500">Followers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {artist.projectViews}
                    </p>
                    <p className="text-xs text-gray-500">Project Views</p>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="bg-[#2B1B8B] hover:bg-[#1F1570] text-white px-8 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
