"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto z-50 bg-transparent py-10 px-5 flex items-center justify-between">
      {/* Left links */}
      <div className="flex space-x-6 text-lg font-medium">
        <Link href="/gallery">Art Gallery</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About Us</Link>
      </div>

      {/* Center logo */}
      <div className="text-xl font-bold tracking-wide">
        <Link href="/">ARS</Link>
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
    </nav>
  );
}
