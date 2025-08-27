"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const sections = ["basic", "account"];

export default function EditProfile() {
  const router = useRouter();

  function maskPhone(phone: string) {
    return phone.replace(/(\d{2})\d{6}(\d{2})/, "$1******$2");
  }

  // Mock profile data (replace with actual context/provider later if needed)
  const profile: any = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    phoneNumber: "9876543210",
    age: 25,
    gender: "male",
    profileImageUrl: "",
    bio: "I am a frontend developer.",
    address: {
      houseNumber: "123",
      locality: "MG Road",
      subLocality: "Sector 2",
      city: "Mumbai",
      state: "maharashtra",
      pincode: "400001",
    },
  };

  const [formData, setFormData] = useState({
    houseNumber: "",
    locality: "",
    subLocality: "",
    city: "",
    state: "",
    pincode: "",
    bio: "",
  });

  const [active, setActive] = useState("basic");
  const [isUpdating, setIsUpdating] = useState(false);
  const [Message, setMessage] = useState<string | null>(null);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    setTimeout(() => {
      setMessage("Profile updated successfully (UI only)");
      setIsUpdating(false);
    }, 1000);
  };

  // Dummy functions for account actions
  const handleDeactivateAccount = () => alert("Deactivate account (UI only)");
  const handleDeleteAccount = () => alert("Delete account (UI only)");
  const handleLogout = () => alert("Logout (UI only)");

  useEffect(() => {
    if (profile) {
      setFormData({
        houseNumber: profile?.address?.houseNumber || "",
        locality: profile?.address?.locality || "",
        subLocality: profile?.address?.subLocality || "",
        city: profile?.address?.city || "",
        state: profile?.address?.state || "",
        pincode: profile?.address?.pincode || "",
        bio: profile?.bio || "",
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-screen">
        {/* Header */}
        <div className="flex items-center p-4 md:p-6 pb-4 flex-shrink-0 border-b border-gray-200">
          <ChevronLeft
            onClick={() => router.back()}
            className="w-6 h-6 text-gray-600 mr-3 cursor-pointer"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Edit Profile
          </h1>
        </div>

        <div className="flex flex-1 gap-0 overflow-hidden">
          {/* Sidebar */}
          <div className="hidden md:block w-64 border-r border-gray-200">
            <div
              className={`p-4 cursor-pointer ${
                active === "basic"
                  ? "bg-blue-50 text-[#13007D] border-l-4 border-[#13007D]"
                  : "text-gray-700"
              }`}
            >
              Basic Information
            </div>
            <div
              className={`p-4 cursor-pointer ${
                active === "account"
                  ? "bg-blue-50 text-[#13007D] border-l-4 border-[#13007D]"
                  : "text-gray-700"
              }`}
            >
              Account
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-8 overflow-y-auto space-y-8 md:space-y-12">
            {/* Basic Information */}
            <div id="basic" className="border-b border-gray-200 pb-8 md:pb-12">
              <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-6 md:mb-8">
                Basic Information
              </h2>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Profile Picture */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {profile?.profileImageUrl ? (
                    <Image
                      src={profile.profileImageUrl}
                      alt="Profile"
                      width={128}
                      height={128}
                      className="rounded-full mb-4 object-cover w-24 h-24 md:w-32 md:h-32"
                    />
                  ) : (
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full mb-4 animate-pulse" />
                  )}
                  <button className="bg-[#13007D] text-white px-4 md:px-6 py-2 rounded-md text-sm font-medium">
                    Replace
                  </button>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleUpdateProfile}
                  className="flex-1 space-y-4 md:space-y-6"
                >
                  {/* Name */}
                  <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={profile?.firstName || ""}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={profile?.lastName || ""}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-sm"
                      />
                    </div>
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={profile?.username || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <div className="flex">
                      <select className="px-3 py-2 border border-gray-300 rounded-l-md bg-white text-sm">
                        <option>+91</option>
                      </select>
                      <input
                        readOnly
                        type="text"
                        value={maskPhone(profile?.phoneNumber || "")}
                        className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-100 cursor-not-allowed text-sm"
                      />
                    </div>
                  </div>

                  {/* Age & Gender */}
                  <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={profile?.age || ""}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        disabled
                        value={profile?.gender || ""}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-sm"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Address
                    </label>
                    <div className="space-y-3 md:space-y-4">
                      {/* House + Street */}
                      <div className="grid grid-cols-2 gap-3 md:gap-6">
                        <input
                          type="text"
                          value={formData.houseNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              houseNumber: e.target.value,
                            })
                          }
                          placeholder="House No."
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                          type="text"
                          value={formData.locality}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              locality: e.target.value,
                            })
                          }
                          placeholder="Street"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>

                      {/* SubLocality + City */}
                      <div className="grid grid-cols-2 gap-3 md:gap-6">
                        <input
                          type="text"
                          value={formData.subLocality}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subLocality: e.target.value,
                            })
                          }
                          placeholder="Sub Locality"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="City"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>

                      {/* State + Pincode */}
                      <div className="grid grid-cols-2 gap-3 md:gap-6">
                        <select
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                          className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
                        >
                          <option value="" disabled>
                            State
                          </option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="delhi">Delhi</option>
                        </select>
                        <input
                          type="text"
                          value={formData.pincode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              pincode: e.target.value,
                            })
                          }
                          placeholder="Pincode"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* About Me */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About me
                    </label>
                    <textarea
                      placeholder="Write a small bio"
                      value={formData.bio}
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none text-sm"
                    />
                  </div>

                  {Message && <p className="text-green-600 mb-2">{Message}</p>}
                  <button
                    type="submit"
                    disabled={isUpdating}
                    className={`mt-4 px-4 py-2 rounded-md font-medium text-white flex items-center gap-2 ${
                      isUpdating
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#131A55] hover:bg-[#0F1440]"
                    }`}
                  >
                    {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isUpdating ? "Updating..." : "Update"}
                  </button>
                </form>
              </div>
            </div>

            {/* Account */}
            <div id="account">
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6">
                Account
              </h3>
              <div className="space-y-4">
                <button
                  className="block w-full text-left py-3 text-gray-900 border-b border-gray-200 text-sm md:text-base"
                  onClick={handleDeactivateAccount}
                >
                  Deactivate account
                </button>
                <button
                  className="block w-full text-left py-3 text-gray-900 border-b border-gray-200 text-sm md:text-base"
                  onClick={handleDeleteAccount}
                >
                  Delete account
                </button>
                <button
                  className="block w-full text-left py-3 text-gray-900 border-b border-gray-200 text-sm md:text-base"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
