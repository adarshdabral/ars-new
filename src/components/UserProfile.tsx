'use client';

import Image from 'next/image';

const artworks = [
  '/artworks/art1.jpg',
  '/artworks/art2.jpg',
  // Add more as needed
];

const UserProfile = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-12">
      {/* Banner */}
      <div className="relative w-full h-52 bg-gray-200 rounded-md mb-16 flex items-end justify-center">
        <div className="absolute -bottom-10 left-10 w-24 h-24 rounded-full bg-gray-300 border-4 border-white" />
      </div>

      <div className="ml-10 flex gap-20">
        {/* Left: Artist Info */}
        <div className="w-64 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold">Artist Name</h2>
            <p className="text-sm text-gray-500">@artistname</p>
            <p className="text-xs text-gray-400">Member since July 19, 2024</p>
          </div>

          <button className="bg-[#0C0583] text-white py-2 rounded-md text-sm">Follow</button>

          <div className="text-sm text-gray-700">
            <p>Project Views: <span className="font-semibold">120</span></p>
            <p>Artwork Sold: <span className="font-semibold">40</span></p>
            <p>Following: <span className="font-semibold">260</span></p>
            <p>Followers: <span className="font-semibold">400</span></p>
          </div>

          <div>
            <h3 className="font-semibold mt-2 mb-1">About Me</h3>
            <p className="text-sm text-gray-600">
              A passionate artist and designer at ARS. Love to create bold visual stories that blend culture with current context.
            </p>
          </div>
        </div>

        {/* Right: Artwork Section */}
        <div className="flex-1">
          <div className="flex border-b mb-6">
            <button className="text-sm font-medium text-[#0C0583] border-b-2 border-[#0C0583] pb-2 px-4">Work</button>
          </div>

          {/* Artwork Display */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {artworks.map((img, idx) => (
              <div key={idx} className="relative w-full h-40 rounded-md overflow-hidden shadow-sm">
                <Image src={img} alt={`Artwork ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
