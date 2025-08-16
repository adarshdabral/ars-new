"use client";

import Image from "next/image";

const artists = Array.from({ length: 9 }).map((_, idx) => ({
  id: idx + 1,
  name: "Rahul Kumar",
  username: "@rahulKumar",
  artworks: 40,
  followers: 760,
  projectViews: "1.5k",
}));

const Artists = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        Our Artists
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
          >
            {/* Profile Picture Placeholder */}
            <div className="w-20 h-20 bg-gray-300 rounded-full mb-4" />

            {/* Artist Info */}
            <h3 className="text-lg font-semibold">{artist.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{artist.username}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
              <div>
                <p className="font-semibold">{artist.artworks}</p>
                <p className="text-gray-500 text-xs">Artworks Sold</p>
              </div>
              <div>
                <p className="font-semibold">{artist.followers}</p>
                <p className="text-gray-500 text-xs">Followers</p>
              </div>
              <div>
                <p className="font-semibold">{artist.projectViews}</p>
                <p className="text-gray-500 text-xs">Project Views</p>
              </div>
            </div>

            {/* Follow Button */}
            <button className="bg-[#0C0583] text-white px-4 py-1 rounded-full text-sm">
              Follow
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;
