'use client';

import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  '/gallery/img1.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
  '/gallery/img7.jpg',
  '/gallery/img8.jpg',
  '/gallery/img9.jpg',
];

const ArtGallery = () => {
  return (
    <section className="w-full">
      {/* Gallery Heading */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-serif font-bold tracking-wide">ART GALLERY</h1>
      </div>

      {/* Masonry Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 mb-24">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="mb-4 overflow-hidden rounded-md shadow">
            <Image
              src={src}
              alt={`Artwork ${idx + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>


    </section>
  );
};

export default ArtGallery;
