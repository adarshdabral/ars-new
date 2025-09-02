"use client";
import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800", "900"],
});

export default function SignupForm({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/signup`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (data.email) {
        localStorage.setItem("x-user-id", response.data.user?.id);
      }
      setLoading(false);
      setStep(2);
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div
      className={` ${montserrat.className} flex flex-col justify-center py-2 w-[400px]`}
    >
      <div className="flex flex-col items-center justify-center w-full p-4">
        <h2 className={`text-2xl font-extrabold`}>Sign Up Account</h2>
        <p className="text-sm font-[500]">
          Enter your details to create your account
        </p>
        <div className="flex w-[230px] font-semibold mt-4 justify-between">
          <button
            className="border flex gap-2 text-sm rounded-[5px] px-4 py-2 border-[#E1E1E1]"
            onClick={() => {
              window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/google`;
            }}
          >
            <Image
              src="/png/google-95.svg"
              alt="Google"
              width={20}
              height={20}
            />
            Google
          </button>
          <button className="border rounded-[5px] flex gap-2 text-sm px-4 py-2 border-[#E1E1E1]">
            <Image src="/png/apple-91.svg" alt="Apple" width={20} height={20} />
            Apple
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <li className="w-[200px] border-1 list-none h-0"></li>
        <span>Or</span>
        <li className="w-[200px] border-1 list-none h-0"></li>
      </div>

      <form
        className={`flex flex-col ${montserrat.className}`}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 px-4 mb-4">
          <label className="text-xs font-[700]">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email@youremail.com"
            className="border shadow-sm h-10 text-sm p-4 rounded-[5px] w-full max-w-[360px]"
            required
          />
        </div>
        <div className="flex flex-col gap-2 px-4">
          <label className="text-xs font-[700]">Create a Password</label>
          <div className="relative w-full max-w-[360px]">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border shadow-sm h-10 text-sm p-4 rounded-[5px] w-full pr-10"
              required
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#13007D] text-white rounded-[5px] text-sm w-[360px] ml-4 py-1 mt-7 cursor-pointer flex items-center justify-center disabled:opacity-60"
        >
          {loading && (
            <svg
              className="animate-spin h-4 w-4 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <a href="/login" className="text-xs text-center mt-2">
          Already have an account
        </a>
      </form>
    </div>
  );
}
