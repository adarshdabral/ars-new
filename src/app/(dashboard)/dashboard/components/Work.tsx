"use client";
import Image from "next/image";

const dummyArtworks = [
  { title: "Artwork 1", url: "/artworks/art1.jpg" },
  { title: "Artwork 2", url: "/artworks/art2.jpg" },
];

export default function Work() {
  return (
    <div className="flex gap-6 flex-wrap">
      {/* Upload Card */}
      <div className="w-60 h-60 border border-dashed border-[#7A5AF8] rounded-lg flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-600">Upload your artwork</p>
      </div>

      {/* Artwork Cards */}
      {dummyArtworks.map((art, idx) => (
        <div
          key={idx}
          className="w-60 h-60 rounded-lg overflow-hidden border shadow-sm bg-white"
        >
          <Image
            src={art.url}
            alt={art.title}
            width={240}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
