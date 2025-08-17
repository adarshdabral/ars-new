import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Sarthak Dhiman ",
      role: "Founder &  CEO, Strategy & Branding",
      image: "/team/sourabh.jpg",
    },
    {
      name: "Ankit Verma",
      role: "Co-Founder, Financial Investments & Marketing",
      image: "/team/suryakant.jpg",
    },
    {
      name: "Nupur Verma",
      role: "Co-Founder, From The Industry",
      image: "/team/rajat.jpg",
    },
    {
      name: "Ananya Bisht",
      role: " UI/UX Designer, Head Design Team",
      image: "/team/deepak.jpg",
    },
    {
      name: "Gurkirat Singh Bawa ",
      role: "UI/UX Designer, Social Media & Content Head",
      image: "/team/arya.jpg",
    },
    {
      name: "Harshwardhan Dass",
      role: "COO, Opearations Lead",
      image: "/team/sudhansu.jpg",
    },
    {
      name: "Dev Sharma",
      role: " Frontend Developer ",
      image: "/team/vishal.jpg",
    },
    {
      name: "Adarsh Dabral",
      role: " Frontend Developer",
      image: "/team/abhishek.jpg",
    },
    {
      name: "Nimish Kumar Sahu",
      role: "Backend Developer",
      image: "/team/nisha.jpg",
    },
    {
      name: "Jagmeet Singh",
      role: "AI/ML Engineer ",
      image: "/team/tripathi.jpg",
    },
    {
      name: "Vaishnavi",
      role: "AI & Automation Engineer",
      image: "/team/meenakshi.jpg",
    },
    {
      name: "Keshav",
      role: "Threat Intelligence Analyst",
      image: "/team/shashank.jpg",
    },
  ];
  return (
    <main>
      <div
        className="relative w-full h-[600px] overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/landing/arsbg.png')" }}
      >
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Intro Section */}
        <p className="text-lg mb-4">
          <span className="font-bold">ARS The Art Gallery</span> is a
          digital-first platform where artists can collaborate, list, and sell
          their original artworks while we find the right collectors, audiences,
          and buyers for them.
        </p>
        <p className="text-lg mb-12">
          We are not just another online gallery, we are bridging the gap
          between untapped creative talent and high-intent buyers by combining
          curation, technology, community, and commerce.
        </p>

        {/* Meet the Team */}
        <h2 className="text-3xl font-serif mb-8">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover w-full h-auto"
              />
              <p className="mt-4 font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
