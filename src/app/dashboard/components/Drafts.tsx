"use client";
import { Plus } from "lucide-react";
export default function Draft() {
  return (
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
  );
}
