"use client";
import React, { useState } from "react";

type ProfileInfo = {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  street: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
};

const initialProfile: ProfileInfo = {
  firstName: "",
  lastName: "",
  username: "",
  phone: "",
  age: "",
  gender: "",
  address: "",
  street: "",
  locality: "",
  city: "",
  state: "",
  pincode: "",
};

const ProfileSettings: React.FC = () => {
  const [profile, setProfile] = useState<ProfileInfo>(initialProfile);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mock action handlers
  const handlePhotoUpload = () => alert("Upload photo clicked!");
  const handleDeactivate = () => alert("Account deactivated!");
  const handleDelete = () => alert("Account deleted!");
  const handleLogout = () => alert("Logged out!");

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Sidebar */}
      <aside className="flex flex-col justify-between border-r border-gray-200 min-w-[200px]">
        <nav className="flex flex-col gap-5 py-10 px-6">
          <button className="font-bold text-black cursor-default text-left">
            Basic Information
          </button>
          <button className="text-gray-700 hover:underline text-left">Account</button>
        </nav>
        <div className="border-t border-gray-200 py-8 px-6 flex flex-col gap-2">
          <button
            onClick={handleDeactivate}
            className="text-left text-gray-900 hover:underline"
            type="button"
          >
            Deactivate account
          </button>
          <button
            onClick={handleDelete}
            className="text-left text-gray-900 hover:underline"
            type="button"
          >
            Delete account
          </button>
          <button
            onClick={handleLogout}
            className="text-left text-gray-900 hover:underline"
            type="button"
          >
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 px-12 py-12 flex flex-col">
        <h2 className="text-lg font-semibold mb-9">Basic Information</h2>
        <div className="flex gap-12">
          {/* Avatar and Replace Button */}
          <div className="flex flex-col items-center mr-8">
            <div className="w-28 h-28 rounded-full bg-gray-300" />
            <button
              onClick={handlePhotoUpload}
              className="mt-5 px-6 py-2 rounded-full font-medium transition"
              style={{ backgroundColor: "#13007D", color: "#fff" }}
              type="button"
            >
              Replace
            </button>
          </div>
          {/* Details Inputs */}
          <form className="flex-1 grid grid-cols-2 gap-x-6 gap-y-5">
            {/* First Name */}
            <input
              name="firstName"
              placeholder="First Name"
              value={profile.firstName}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* Last Name */}
            <input
              name="lastName"
              placeholder="Last Name"
              value={profile.lastName}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* Username */}
            <input
              name="username"
              placeholder="Username"
              value={profile.username}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300 col-span-2"
            />
            {/* Phone */}
            <div className="flex gap-2 col-span-2">
              <select className="border border-gray-300 rounded-md px-2 py-2 w-20" disabled>
                <option value="+91">+91</option>
              </select>
              <input
                name="phone"
                placeholder="Enter your phone number"
                value={profile.phone}
                onChange={handleChange}
                className="flex-1 px-3 py-2 rounded-md border border-gray-300"
              />
            </div>
            {/* Age */}
            <input
              name="age"
              placeholder="Enter your age"
              value={profile.age}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* Gender */}
            <input
              name="gender"
              placeholder="Gender"
              value={profile.gender}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* Address fields - 3rd Row */}
            <input
              name="address"
              placeholder="House / Flat No."
              value={profile.address}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            <input
              name="street"
              placeholder="Street"
              value={profile.street}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* Locality */}
            <input
              name="locality"
              placeholder="Locality"
              value={profile.locality}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* City */}
            <input
              name="city"
              placeholder="City"
              value={profile.city}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* State */}
            <input
              name="state"
              placeholder="State"
              value={profile.state}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
            {/* Pincode */}
            <input
              name="pincode"
              placeholder="Pincode"
              value={profile.pincode}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300"
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;
