"use client";

import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF, FaPinterest, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#13007D] text-white px-6 sm:px-12 pt-12 pb-8">
      {/* Top Section: GET IN TOUCH + Social Icons */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide" style={{ fontFamily: "TheSeasons" }}>
          GET IN TOUCH
        </h2>

        {/* Social Media Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {[
            { icon: <FaInstagram />, label: "INSTAGRAM" },
            { icon: <FaYoutube />, label: "YOUTUBE" },
            { icon: <FaFacebookF />, label: "FACEBOOK" },
            { icon: <FaPinterest />, label: "PINTEREST" },
            { icon: <FaLinkedinIn />, label: "LINKEDIN" },
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-2 border border-white text-sm sm:text-base px-4 py-1.5 rounded-full hover:bg-white hover:text-[#13007D] transition"
              style={{ fontFamily: "Poppins" }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-10 mb-8" />

      {/* Lower Section: Logo + Links + Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* B: Logo + Tagline */}
        <div className="flex-shrink-0">
          {/* Placeholder for ARS Logo Image */}
          <div className="w-40 h-24 relative">
            {/* Replace src with your logo path */}
            <Image src="/ars-logo.png" alt="ARS Logo" fill className="object-contain" />
          </div>
          <p className="text-sm mt-2" style={{ fontFamily: "Poppins" }}>THE ART GALLERY</p>
        </div>

        {/* C: Contact Links */}
        <div className="flex flex-col gap-2" style={{ fontFamily: "Poppins" }}>
          <h4 className="uppercase text-white text-base sm:text-lg" style={{ fontFamily: "TheSeasons" }}>
            Contact
          </h4>
          {["FAQs", "Privacy Policy", "Terms & Conditions"].map((text, i) => (
            <div key={i} className="flex justify-between items-center w-52 border-b border-white/30 pb-1 hover:pl-1 transition-all">
              <span>{text}</span>
              <span>→</span>
            </div>
          ))}
        </div>

        {/* D: Newsletter */}
        <div className="flex flex-col gap-2" style={{ fontFamily: "Poppins" }}>
          <h4 className="uppercase text-white text-base sm:text-lg" style={{ fontFamily: "TheSeasons" }}>
            Stay in touch
          </h4>
          <div className="flex items-center border-b border-white/30 w-64">
            <input
              type="email"
              placeholder="Enter your mail"
              className="bg-transparent w-full py-1 px-2 text-sm focus:outline-none placeholder-white/70"
            />
            <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
