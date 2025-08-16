"use client";

import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/hero-bg.png')` }}
    >
      <div className="pt-6 px-6">
        <Navbar />
      </div>

      {/* Bottom-left content layout */}
      <div className="absolute bottom-8 left-8 w-full max-w-xl">
        {/* Row 1 */}
        <div className="flex mb-4">
          {/* Block A: Heading */}
          <div className="w-4/6 ">
            <h1 className="text-7xl font-bold text-white">CREATING</h1>
          </div>
          {/* Block B: Subheading */}
          <div className="w-2/6  pl-15  ">
            <h2 className="text-4xl text-white">Ways</h2>
            <h2 className="text-4xl text-white">Pure</h2>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mb-4">
          {/* Block C: Paragraph */}
          <p className="text-white text-sm">
            Browse curated collections of classical and contemporary artwork
            from renowned and emerging artists. Explore, admire, and own a piece
            of timeless creativity.
          </p>
        </div>

        {/* Row 3 */}
        <div className="flex space-x-4">
          {/* Block D: Button */}
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Explore Gallery
          </button>
          {/* Block E: Button */}
          <button className="border border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
