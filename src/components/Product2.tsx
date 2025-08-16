'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Name of artwork',
    price: '₹1200',
    image: '/more-products/art1.jpg',
  },
  {
    id: 2,
    name: 'Name of artwork',
    price: '₹1200',
    image: '/more-products/art2.jpg',
  },
  {
    id: 3,
    name: 'Name of artwork',
    price: '₹1200',
    image: '/more-products/art3.jpg',
  },
];

const Product2 = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-serif font-bold mb-12">MORE PRODUCTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="w-[240px] h-[320px] relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm mb-2">{product.name}</p>
            <span className="border border-blue-600 px-4 py-1 text-sm rounded-full text-blue-600 font-semibold">
              {product.price}
            </span>
          </div>
        ))}
      </div>

      <Link href="/shop">
        <button className="border border-black px-8 py-3 text-sm font-semibold tracking-widest hover:bg-black hover:text-white transition-all">
          GO TO SHOP →
        </button>
      </Link>
    </section>
  );
};

export default Product2;
