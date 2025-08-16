'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 space-y-10">
      {/* Row 1: Block A and Block B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block A - About ARS */}
        <div className="flex items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black" style={{ fontFamily: 'TheSeasons' }}>
            About ARS
          </h2>
        </div>

        {/* Block B - Little para about ARS */}
        <div className="text-gray-700 text-base sm:text-lg md:text-xl" style={{ fontFamily: 'Poppins' }}>
          <p>
            ARS (Artistic Rendering Studio) is a creative community that empowers artists, encourages exploration, and
            brings imagination to life through stunning visual experiences.
          </p>
        </div>
      </div>

      {/* Row 2: Block C - Full width image */}
      <div className="w-full h-60 sm:h-72 md:h-96 relative rounded-xl overflow-hidden shadow-md">
        <Image src="/images/ars-banner.jpg" alt="ARS Banner" layout="fill" objectFit="cover" />
      </div>

      {/* Row 3: Block D1 and D2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block D1 - Image */}
        <div className="h-60 sm:h-72 md:h-96 relative rounded-xl overflow-hidden shadow-md">
          <Image src="/images/ars-d1.jpg" alt="ARS D1" layout="fill" objectFit="cover" />
        </div>

        {/* Block D2 - Centered Content */}
        <div className="flex flex-col justify-center p-5 sm:p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2" style={{ fontFamily: 'TheSeasons' }}>
           For Artists
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3" style={{ fontFamily: 'Poppins' }}>
            Create. Publish. Earn. <br /><br /><br />
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3" style={{ fontFamily: 'Poppins' }}>
          Create your profile in minutes. Upload and publish your work—digital or physical. Set your prices and retain control. Earn from every sale, with no hidden fees. Optional publishing tools (print on demand, licensing, etc.)
          </p>
          <Link href="/join">
            <button
              className="text-white text-sm sm:text-base px-5 sm:px-6 py-2 rounded-full hover:brightness-110 transition w-fit"
  style={{ backgroundColor: '#13007D', fontFamily: 'Poppins' }}
            >
              Join as an Artist
            </button>
          </Link>
        </div>
      </div>

      {/* Row 4: Block D3 and D4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block D3 - Centered Content */}
        <div className="flex flex-col justify-center p-5 sm:p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2" style={{ fontFamily: 'TheSeasons' }}>
           For Buyers
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3" style={{ fontFamily: 'Poppins' }}>
            Discover Authentic Art <br /><br />
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3" style={{ fontFamily: 'Poppins' }}>
            Explore diverse artwork from emerging and established artists. Buy original pieces or limited-edition prints. Support artists directly. Personalized recommendations and wishlists.
          </p>
          <Link href="/join">
            <button
              className="text-white text-sm sm:text-base px-5 sm:px-6 py-2 rounded-full hover:brightness-110 transition w-fit"
  style={{ backgroundColor: '#13007D', fontFamily: 'Poppins' }}
            >
              Start Browsing Artworks
            </button>
          </Link>
        </div>

        {/* Block D4 - Image */}
        <div className="h-60 sm:h-72 md:h-96 relative rounded-xl overflow-hidden shadow-md">
          <Image src="/images/ars-d4.jpg" alt="ARS D4" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}
