"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800", "900"],
});

export default function StepPanel({ step }: { step: number }) {
  const steps = ["Sign up your account", "Set up your profile"];

  return (
    <div
      className={`relative ${montserrat.className} w-full sm:w-[420px] h-[400px] sm:h-[600px]`}
    >
      <Image
        src="/auth/authart.jpg"
        alt="ARS"
        width={420}
        height={600}
        className="w-full h-full p-4 rounded-[50px]"
      />
      <div className="absolute bottom-10 left-0 inset-x-0 p-4 flex flex-col items-center text-white">
        <h1 className="text-3xl font-bold">Get Started with Us</h1>
        <p className="text-center">
          Complete these easy steps to register your account
        </p>
        {steps.map((text, index) => (
          <div
            key={index}
            className={`${
              step === index + 1 ? "bg-[#13007D]" : "bg-[#989898]"
            } w-[250px] flex items-center gap-2 rounded-[5px] text-xs px-2 py-1 mt-2`}
          >
            <span className="h-5 w-5 flex items-center justify-center text-sm rounded-full bg-black text-white font-medium">
              {index + 1}
            </span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
