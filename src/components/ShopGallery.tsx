import React from "react";
import { Heart } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Name of artwork",
    price: "₹1200",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    variants: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=100&h=100&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Name of artwork",
    price: "₹1200",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
    variants: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=100&h=100&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Name of artwork",
    price: "₹1200",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop&crop=center",
    variants: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=100&h=100&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Name of artwork",
    price: "₹1200",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    variants: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=100&h=100&fit=crop",
    ],
  },
];

export default function ShopGallery() {
  return (
    <>
      <section className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-1/5 bg-[#fdfbf6] p-6 border-r border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-gray-700 mb-2">
                Category
              </h3>
              <div className="space-y-1">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Paintings
                </label>
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Sculptures
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-700 mb-2">
                Price Range
              </h3>
              <div className="space-y-1">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  ₹500 - ₹1000
                </label>
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  ₹1000 - ₹2000
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Gallery Grid */}
        <div className="w-4/5 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <div
                key={art.id}
                className="bg-yellow-50 border border-gray-200 p-4 relative hover:shadow-lg transition-shadow duration-200"
              >
                {/* Header with title and wishlist */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-normal text-gray-800">
                      {art.title}
                    </h3>
                    <p className="text-sm text-gray-800 font-medium">
                      {art.price}
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Framed Artwork */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    {/* Inner Frame/Mat */}

                    {/* Artwork */}
                    <div className="w-48 h-60 relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Variant Thumbnails */}
                <div className="flex gap-2 justify-center">
                  {art.variants.map((variant, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-gray-300 border border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <img
                        src={variant}
                        alt={`variant-${i}`}
                        className="w-full h-full object-cover opacity-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
