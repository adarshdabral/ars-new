"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-[1800px] mx-auto z-50 bg-transparent py-5 px-5 items-center justify-between">
        {/* Left links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link href="/artGallery">Art Gallery</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
        </div>

        {/* Center logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link href="/">
            {" "}
            <Image src="/png/ars.png" alt="ARS Logo" width={60} height={60} />
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex space-x-4 text-sm font-medium">
          <Link href="/login">Login</Link>
          <Link href="/get-started">
            <span className="border border-white rounded-full px-4 py-3 hover:bg-white hover:text-black transition">
              Get Started
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        {/* Top row */}
        <div className="flex items-center bg-white justify-between px-5 py-4">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            <Link href="/">
              <Image src="/png/ars.png" alt="ARS Logo" width={60} height={60} />
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Link href="/login">Login</Link>
            <Link href="/get-started">
              <span className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
                Get Started
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom row (nav links) */}
        <div className="bg-[#0A0075] text-white text-center text-sm font-medium">
          <div className="flex justify-center space-x-8 py-3">
            <Link href="/artGallery">Art Gallery</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
