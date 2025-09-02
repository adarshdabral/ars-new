"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function SetupProfileForm({ onNext }: { onNext: () => void }) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // ✅ Append the image manually
    const imageFile = fileInputRef.current?.files?.[0];
    if (imageFile) {
      formData.append("profileImage", imageFile);
    }

    const userId = localStorage.getItem("x-user-id");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}artist/complete-profile`,
        formData, // ✅ correct
        {
          headers: {
            "x-user-id": userId,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setError(null);
      setLoading(false);
      alert("Check mail for verification link.");
      router.push("/login");
    } catch (err: any) {
      setError(err.response?.data || err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-[400px] py-4">
      <div className="flex flex-col items-center justify-center w-full p-4">
        <h2 className={`text-2xl font-extrabold ${montserrat.className}`}>
          Set Up Profile
        </h2>
        <p className="text-sm font-[500]">
          Enter your details to set up your account
        </p>

        {/* Upload Circle */}
        <div
          className="w-24 h-24 rounded-full border bg-neutral-300 border-gray-400 mt-5 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {preview ? (
            <Image src={preview} alt="Preview" width={96} height={96} />
          ) : (
            <Image src="/png/upload.svg" alt="Upload" width={24} height={24} />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <p className="text-xs mt-2">Upload Your Profile</p>
      </div>

      {/* Form Fields */}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* First & Last Name */}
        <div className="flex gap-5 items-center px-4 mb-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-[600]">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Brian"
              className="border shadow-sm h-10 text-sm rounded-[5px] w-[170px] p-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-[600]">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Clark"
              className="border shadow-sm h-10 text-sm rounded-[5px] w-[170px] p-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 mb-4">
          <label className="text-xs font-[600]">Username</label>
          <input
            name="username"
            type="text"
            required
            placeholder="Write Your Username"
            className="border h-10 shadow-sm p-4 text-sm rounded-[5px] w-[360px]"
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-2 px-4 mb-4">
          <label className="text-xs font-[600]">Phone</label>
          <input type="hidden" name="countryCode" value="+91" />
          <div className="flex items-center gap-2">
            <div className="border shadow-2xl h-10 flex items-center rounded-[5px] w-[50px] justify-center">
              +91
            </div>
            <input
              name="phoneNumber"
              type="text"
              required
              maxLength={10}
              placeholder="Enter your phone Number"
              className="border shadow-sm h-10 text-sm rounded-[5px] w-[302px] p-4"
            />
          </div>
        </div>

        {/* Age & Gender */}
        <div className="flex gap-5 items-center px-4 mb-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-[600]">Age</label>
            <input
              name="age"
              type="number"
              required
              placeholder="18"
              className="border shadow-sm h-10 text-sm rounded-[5px] w-[170px] p-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-[600]">Gender</label>
            <select
              className="border shadow-sm h-10 w-32 text-sm rounded-[5px]"
              name="gender"
              required
              defaultValue=""
            >
              <option disabled hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* About Me */}
        <div className="flex flex-col gap-2 px-4">
          <label className="text-xs font-[600]">About Me</label>
          <input
            name="bio"
            type="text"
            placeholder="Write a small bio"
            className="border h-10 shadow-sm p-4 text-sm rounded-[5px] w-[360px]"
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 mt-2 text-center w-full">
            {error}
          </p>
        )}
        {/* Button */}
        <div className="flex justify-center gap-4 ml-4 mt-7">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#13007D] text-white rounded-[5px] text-sm w-[175px] py-1 flex items-center justify-center disabled:opacity-60 cursor-pointer"
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
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
}
