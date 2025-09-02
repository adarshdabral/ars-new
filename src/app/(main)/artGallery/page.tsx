import Image from "next/image";
import Navbar from "@/components/Navbar";
const galleryImages = [
  {
    src: "/dummyArts/0115c75c5487ecb7f38153afaff633d5.jpg",
    alt: "0115c75c5487ecb7f38153afaff633d5",
  },
  {
    src: "/dummyArts/1-a-spring-day-in-the-forest-peder-monsted.jpg",
    alt: "1 a spring day in the forest peder monsted",
  },
  {
    src: "/dummyArts/105007.jpg",
    alt: "105007",
  },
  {
    src: "/dummyArts/12-15-11-5-5-20-58m.jpg",
    alt: "12 15 11 5 5 20 58m",
  },
  {
    src: "/dummyArts/1f680182116175.5d139b3ba7041.jpg",
    alt: "1f680182116175.5d139b3ba7041",
  },
  {
    src: "/dummyArts/2a9526efb4a1eff0a590fddfb208af94.jpg",
    alt: "2a9526efb4a1eff0a590fddfb208af94",
  },
  {
    src: "/dummyArts/370b4d78b9dfe3d4cc9748a2798d280e.jpg",
    alt: "370b4d78b9dfe3d4cc9748a2798d280e",
  },
  {
    src: "/dummyArts/436fff2ceb1c800c74c0f26be7a58c59.jpg",
    alt: "436fff2ceb1c800c74c0f26be7a58c59",
  },
  {
    src: "/dummyArts/4704ec63f65a80726f634490cc32c8df.jpg",
    alt: "4704ec63f65a80726f634490cc32c8df",
  },
  {
    src: "/dummyArts/4e9da2d0b6decec638dd4b1b68796566.jpg",
    alt: "4e9da2d0b6decec638dd4b1b68796566",
  },
  {
    src: "/dummyArts/4e9ebd8e7007e16eb9e6158de479924c.jpg",
    alt: "4e9ebd8e7007e16eb9e6158de479924c",
  },
  {
    src: "/dummyArts/5b514dce6e0b6caa745fd4ee872c9431.png",
    alt: "5b514dce6e0b6caa745fd4ee872c9431",
  },
  {
    src: "/dummyArts/645afe2cbda2db904d9c14059eb8b769.jpg",
    alt: "645afe2cbda2db904d9c14059eb8b769",
  },
  {
    src: "/dummyArts/6504533-SSKOHBRA-6.jpg",
    alt: "6504533 SSKOHBRA 6",
  },
  {
    src: "/dummyArts/6c7d80db68d4e6b241e3168f97d959c5.jpg",
    alt: "6c7d80db68d4e6b241e3168f97d959c5",
  },
];

export default function ArtPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-[1800px] mx-auto min-h-screen">
        {/* Gallery Heading */}
        <div className="text-center py-16">
          <h1 className="text-5xl font-serif font-bold tracking-wide">
            ART GALLERY
          </h1>
        </div>

        {/* Masonry Image Grid */}
        <div className="my-12 px-3">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div className="break-inside-avoid mb-6" key={img.src + idx}>
                <div className="rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
