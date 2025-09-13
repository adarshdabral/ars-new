"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "@/components/Navbar";

const artworks = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop",
    title: "Red Bull Portrait",
    description:
      "Buyers get curated original art with framing. AR previews, Automation Models. Artist sets their fixed prices. Buyers gain trust and affordability.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    title: "Dreaming Fish",
    description:
      "Experience surrealism in every stroke. Premium canvas delivery with authenticity guaranteed. Limited edition collection with certificate.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop",
    title: "Modern Gaze",
    description:
      "A thought-provoking fusion of culture and abstraction. Curated compositions featuring rare artworks with premium framing options.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    title: "Abstract Vision",
    description:
      "Contemporary art meets classical technique. Each piece comes with authentication and premium delivery service.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop",
    title: "Golden Hour",
    description:
      "Warm tones and masterful composition. Limited availability with certificate of authenticity included.",
  },
];

export default function ArtworkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleArtworks = () => {
    const visible = [];
    for (let i = 0; i <= 2; i++) {
      const index = (currentIndex + i) % artworks.length;
      visible.push({
        ...artworks[index],
        position: i,
        index: index,
      });
    }
    return visible;
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-[600px] overflow-hidden bg-cover bg-no-repeat bg-bottom"
        style={{ backgroundImage: "url('/shop/shophero.jpeg')" }}
      >
        {/* Artwork Display - Moved down with pt-32 instead of pt-20 */}
        <div className="absolute inset-x-0 top-0 flex flex-col items-center pt-32">
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {/* Artworks Container */}
            <div className="relative h-72 flex items-center justify-center">
              {/* Left Navigation Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-1/2 transform -translate-x-[200px] top-1/2 -translate-y-1/2 z-30 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={nextSlide}
                className="absolute left-1/2 transform translate-x-[152px] top-1/2 -translate-y-1/2 z-30 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>

              {getVisibleArtworks().map((artwork) => {
                const { position } = artwork;
                let transform = "";
                let zIndex = 10;
                let opacity = 1;

                if (position === 0) {
                  transform = "translateX(0)";
                  zIndex = 30;
                } else if (position === 1) {
                  transform = "translateX(280px) scale(0.7)";
                  zIndex = 20;
                  opacity = 0.7;
                } else if (position === 2) {
                  transform = "translateX(450px) scale(0.5)";
                  zIndex = 10;
                  opacity = 0.4;
                }

                return (
                  <div
                    key={artwork.id}
                    className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                    }}
                    onClick={() => position !== 0 && goToSlide(artwork.index)}
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-48 h-64 object-cover shadow-inner"
                    />
                  </div>
                );
              })}
            </div>

            {/* Artwork Information Fixed Below Center */}
            <div className="flex justify-center">
              <div className="w-48 text-left">
                <h2 className="text-2xl font-serif mb-2 ">
                  {artworks[currentIndex].title}
                </h2>
                <p className="text-sm leading-4 mb-4 ">
                  {artworks[currentIndex].description}
                </p>
                <button className="px-6 py-1 text-sm bg-white font-medium rounded-full shadow-lg hover:bg-amber-50 hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
