"use client";

export default function Moodboard() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="bg-gray-100 rounded-lg h-60 p-5 flex flex-col">
        <div className="text-base font-medium text-black mb-3">
          Moodboard Name
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          <div className="bg-gray-200 rounded-lg" />
          <div className="bg-gray-200 rounded-lg" />
          <div className="bg-gray-200 rounded-lg" />
          <div className="bg-gray-200 rounded-lg" />
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg h-60 p-5 flex flex-col">
        <div className="text-base font-medium text-black mb-3">
          Moodboard Name
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          <div className="bg-gray-200 rounded-lg" />
          <div className="bg-gray-200 rounded-lg" />
          <div className="bg-gray-200 rounded-lg" />
          <div className="bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
