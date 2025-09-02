"use client";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      <div>
        <p className="text-2xl font-bold">120</p>
        <p className="text-sm text-gray-600">Project Views</p>
      </div>
      <div>
        <p className="text-2xl font-bold">40</p>
        <p className="text-sm text-gray-600">Artworks Sold</p>
      </div>
      <div>
        <p className="text-2xl font-bold">250</p>
        <p className="text-sm text-gray-600">Profile Views</p>
      </div>
      <div>
        <p className="text-2xl font-bold">10k</p>
        <p className="text-sm text-gray-600">Total Earnings</p>
      </div>
    </div>
  );
}
