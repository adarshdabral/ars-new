'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';

interface WishlistProductProps {
  name: string;
  price: string;
  image: string;
}

export default function WishlistProduct({ name, price, image }: WishlistProductProps) {
  return (
    <div className="border border-gray-300 p-4 flex flex-col">
      {/* Title & Price */}
      <p className="text-[12px] leading-tight mb-1">{name}</p>
      <p className="text-[12px] leading-tight mb-3">{price}</p>

      {/* Artwork Image with margin */}
      <div className="flex justify-center mb-4 px-4">
        <Image
          src={image}
          alt={name}
          width={220}
          height={240}
          className="object-contain"
        />
      </div>

      {/* Heart & Add to Cart on same row */}
      <div className="flex items-center gap-10 mt-auto">
        <Heart
          className="w-6 h-6 text-[#13007D]"
          fill="#13007D"
        />
        <button
          className="bg-[#13007D] text-white text-[12px] px-8 py-[6px] rounded-full"
          style={{ minWidth: '140px' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
