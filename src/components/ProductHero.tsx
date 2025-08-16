'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductHero = () => {
  const [selectedImage, setSelectedImage] = useState('/product-image.jpg'); // Default image

  const thumbnailImages = [
    '/product-image.jpg',
    '/thumb1.jpg',
    '/thumb2.jpg',
    '/thumb3.jpg',
    '/thumb4.jpg',
  ]; // Update these paths with your actual images

  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left section */}
      <div className="col-span-1 flex flex-col justify-between">
        <div className="text-sm uppercase tracking-wider text-gray-500">Product Category</div>
        <h1 className="text-4xl font-serif font-bold mt-2">PRODUCT NAME</h1>
        <p className="text-sm text-gray-600 mt-1">By Artist</p>

        <div className="mt-6">
          <h2 className="font-medium text-lg mb-2">Product Information</h2>
          <p className="text-gray-600 text-sm">
            Majestic yet subdued, unique art with floating ink patterns. Limited edition. High-quality print and paper. Buyer gets more, artist affordability.
          </p>
        </div>

        <div className="mt-6">
          <details className="mb-2">
            <summary className="cursor-pointer font-semibold">Details</summary>
            <p className="text-gray-600 text-sm mt-1">Paper, ink, size dimensions...</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">Delivery & Returns</summary>
            <p className="text-gray-600 text-sm mt-1">Standard delivery: 5-7 days. Return within 14 days.</p>
          </details>
        </div>
      </div>

      {/* Center Image */}
      <div className="col-span-1 flex justify-center">
        <div className="border shadow-lg">
          <Image
            src={selectedImage}
            alt="Product Image"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="col-span-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4">₹ 2300</h2>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {thumbnailImages.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                width={60}
                height={60}
                className={`cursor-pointer border ${selectedImage === img ? 'border-black' : 'border-gray-300'}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100">Add to bag</button>
            <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:opacity-90">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
