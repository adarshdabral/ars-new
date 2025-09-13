"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
export default function LandingPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <section
        className="min-h-[600px] md:h-[600px] bg-cover bg-center flex flex-col justify-between relative"
        style={{ backgroundImage: `url('/images/hero-bg.png')` }}
      >
        <div className="w-full">
          <Navbar />
        </div>

        {/* Bottom area content */}
        <div className="mb-8 md:mb-20 w-full px-5 max-w-[1800px] mx-auto">
          <div className="max-w-xl">
            {/* Mobile Layout */}
            <div className="block md:hidden text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                CREATING
              </h1>
              <div className="flex justify-center items-center space-x-8 mb-6">
                <h2 className="text-2xl sm:text-3xl text-white">Ways</h2>
                <h2 className="text-2xl sm:text-3xl text-white">Pure</h2>
              </div>
              <div className="mb-6 px-4">
                <p className="text-white text-sm leading-relaxed">
                  A platform where artists showcase, sell, and publish their
                  work and buyers discover original pieces they'll love
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                  Start Selling
                </button>
                <button className="w-full sm:w-auto border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                  Explore Market
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex mb-4">
                <div className="flex-1">
                  <h1 className="text-7xl font-bold text-white">Elevating Artists</h1>
                </div>
                <div className="flex-1 pl-4">
                  {/* <h2 className="text-4xl text-white">Ways</h2>
                  <h2 className="text-4xl text-white">Pure</h2> */}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-white text-sm">
                  Browse curated collections of classical and contemporary
                  artwork from renowned and emerging artists. Explore, admire,
                  and own a piece of timeless creativity.
                </p>
                <br /><br />
              </div>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                  Explore Gallery
                </button>
                <button className="border border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
<section className="w-full px-5 py-10 bg-offwhite text-black">
  {/* Heading row */}
  <div className="flex justify-between items-center pb-6 max-w-[1800px] mx-auto">
    <h2 className="text-5xl md:text-7xl font-bold">Our Work</h2>
    <Link href="/work">
      <button className="text-sm border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
        View More →
      </button>
    </Link>
  </div>

  {/* CAROUSELS WRAPPER */}
  <div className="space-y-10">
    {[1, 2].map((carouselIndex) => (
      <div
        key={carouselIndex}
        className="overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab max-w-[1800px] mx-auto"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-6 px-4 w-fit">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start basis-1/5 min-w-[200px] max-w-[280px] aspect-[4/5] bg-black/10 border border-white/20 rounded-lg overflow-hidden"
            >
              <img
                src={`/images/portrait${i + 1}.png`}
                alt={`Portrait ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      <br /><br />

      {/* ABOUT SECTION */}
      {/* <section className="w-full py-8 sm:py-10 md:py-12">
        <div className="max-w-[1800px] mx-auto w-full space-y-10">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
                style={{ fontFamily: "TheSeasons" }}
              >
                About ARS
              </h2>
            </div>
            <div
              className="text-gray-700 text-base sm:text-lg md:text-xl"
              style={{ fontFamily: "Poppins" }}
            >
              <p>
                Buyers get curated original art with framing, AR previews,
                Automation Models. Artist sets their fixed prices. Buyers gain
                trust and affordability.
              </p>
            </div>
          </div>

          
          <div className="w-[97%] h-72 sm:h-72 md:h-96 m-auto relative overflow-hidden shadow-md">
            <Image
              src="/landing/arsbg.png"
              alt="ARS Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 max-w-[1400px] mx-auto">
            <div className="h-96 md:h-[400px] relative rounded-2xl overflow-hidden">
              <Image
                src="/landing/artist.png"
                alt="ARS D1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-6 bg-gray-50 rounded-xl">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2"
                style={{ fontFamily: "TheSeasons" }}
              >
                For Artists
              </h3>
              <p
                className="text-gray-700 text-sm sm:text-base md:text-lg mb-3"
                style={{ fontFamily: "Poppins" }}
              >
                Create. Publish. Earn. <br />
                <br />
                <br />
              </p>
              <p
                className="text-gray-700 text-sm sm:text-base md:text-lg mb-3"
                style={{ fontFamily: "Poppins" }}
              >
                Create your profile in minutes. Upload and publish your
                work—digital or physical. Set your prices and retain control.
                Earn from every sale, with no hidden fees. Optional publishing
                tools (print on demand, licensing, etc.)
              </p>
              <Link href="/join">
                <button
                  className="text-white text-sm sm:text-base px-5 sm:px-6 py-2 rounded-full hover:brightness-110 transition w-fit"
                  style={{ backgroundColor: "#13007D", fontFamily: "Poppins" }}
                >
                  Join as an Artist
                </button>
              </Link>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[] mx-auto">
            <div className="flex flex-col justify-center p-5 sm:p-6 bg-gray-50 rounded-xl">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2"
                style={{ fontFamily: "TheSeasons" }}
              >
                For Buyers
              </h3>
              <p
                className="text-gray-700 text-sm sm:text-base md:text-lg mb-3"
                style={{ fontFamily: "Poppins" }}
              >
                Discover Authentic Art <br />
                <br />
              </p>
              <p
                className="text-gray-700 text-sm sm:text-base md:text-lg mb-3"
                style={{ fontFamily: "Poppins" }}
              >
                Explore diverse artwork from emerging and established artists.
                Buy original pieces or limited-edition prints. Support artists
                directly. Personalized recommendations and wishlists.
              </p>
              <Link href="/join">
                <button
                  className="text-white text-sm sm:text-base px-5 sm:px-6 py-2 rounded-full hover:brightness-110 transition w-fit"
                  style={{ backgroundColor: "#13007D", fontFamily: "Poppins" }}
                >
                  Start Browsing Artworks
                </button>
              </Link>
            </div>


            <div className="h-96 md:h-[400px] relative rounded-2xl overflow-hidden">
              <Image
                src="/landing/buyers.png"
                alt="ARS D4"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      <style jsx global>{`
        .cursor-grab:active {
          cursor: grabbing;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
