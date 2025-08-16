"use client";
import React, { useState } from "react";

// Types
type ArtistProfile = {
  firstName: string;
  lastName: string;
  stageName: string;
  email: string;
  phone: string;
  genre: string;
  city: string;
  state: string;
  country: string;
  website: string;
  instagram: string;
  facebook: string;
  bio: string;
};

type ProfilePlatform = {
  label: string;
  type: "connect" | "username";
  connected?: boolean;
  username?: string;
};

type LinkItem = {
  title: string;
  url: string;
};

const initialProfile: ArtistProfile = {
  firstName: "",
  lastName: "",
  stageName: "",
  email: "",
  phone: "",
  genre: "",
  city: "",
  state: "",
  country: "",
  website: "",
  instagram: "",
  facebook: "",
  bio: "",
};

const initialPlatforms: ProfilePlatform[] = [
  { label: "Linkedin", type: "connect", connected: true },
  { label: "Instagram", type: "connect", connected: false },
  { label: "Youtube", type: "username" },
  { label: "Facebook", type: "username" },
  { label: "Dribbles", type: "username" },
];

const ArtistSettings: React.FC = () => {
  const [profile, setProfile] = useState<ArtistProfile>(initialProfile);
  const [platforms, setPlatforms] = useState<ProfilePlatform[]>(initialPlatforms);
  const [editingUsername, setEditingUsername] = useState<string | null>(null);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [linkInput, setLinkInput] = useState({ title: "", url: "" });

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoUpload = () => alert("Profile photo upload clicked!");
  const handleDeactivate = () => alert("Account deactivated!");
  const handleDelete = () => alert("Account deleted!");
  const handleLogout = () => alert("Logged out!");

  // "On the Web" actions
  const handleConnectAccount = (platform: string) => alert(`Connect ${platform} clicked!`);
  const handleEditAccount = (platform: string) => alert(`Edit ${platform} clicked!`);
  const handleUsernameEdit = (label: string) => {
    setEditingUsername(label);
    setUsernameInput("");
  };
  const handleUsernameSubmit = (label: string) => {
    setPlatforms((prev) =>
      prev.map((p) =>
        p.label === label ? { ...p, username: usernameInput } : p
      )
    );
    setEditingUsername(null);
    setUsernameInput("");
  };

  // Links section
  const handleLinkInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLinkInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddLink = () => {
    if (linkInput.title && linkInput.url) {
      setLinks([...links, linkInput]);
      setLinkInput({ title: "", url: "" });
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
      {/* Sidebar */}
      <aside className="flex flex-col justify-between border-r border-gray-200 min-w-[200px]">
        <nav className="flex flex-col gap-5 py-8 px-6">
          <button className="font-semibold text-black cursor-default text-left">
            Basic information
          </button>
          <button className="text-gray-700 hover:underline text-left">
            On The Web
          </button>
          <button className="text-gray-700 hover:underline text-left">
            Links
          </button>
          <button className="text-gray-700 hover:underline text-left">
            Account
          </button>
        </nav>
        {/* Account Actions */}
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

      {/* Main Content */}
      <main className="flex-1 px-12 py-12 flex flex-col gap-14">
        {/* Basic Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Basic information</h2>
          <div className="flex items-start gap-12">
            {/* Avatar & Replace */}
            <div className="flex flex-col items-center mr-2">
              <div className="w-28 h-28 rounded-full bg-gray-300" />
              <button
                onClick={handlePhotoUpload}
                className="mt-5 px-6 py-2 rounded-full font-semibold transition"
                style={{ backgroundColor: "#13007D", color: "#fff" }}
                type="button"
              >
                Replace
              </button>
            </div>
            {/* Fields: 2-column grid */}
            <form className="flex-1 grid grid-cols-2 gap-x-7 gap-y-5">
              <input
                name="firstName"
                placeholder="First Name"
                value={profile.firstName}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={profile.lastName}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="stageName"
                placeholder="Stage Name"
                value={profile.stageName}
                onChange={handleProfileChange}
                className="col-span-2 px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="phone"
                placeholder="Phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="genre"
                placeholder="Genre"
                value={profile.genre}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="city"
                placeholder="City"
                value={profile.city}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="state"
                placeholder="State"
                value={profile.state}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="country"
                placeholder="Country"
                value={profile.country}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="website"
                placeholder="Website"
                value={profile.website}
                onChange={handleProfileChange}
                className="col-span-2 px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="instagram"
                placeholder="Instagram"
                value={profile.instagram}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <input
                name="facebook"
                placeholder="Facebook"
                value={profile.facebook}
                onChange={handleProfileChange}
                className="px-3 py-2 rounded-md border border-gray-300 text-sm"
              />
              <textarea
                name="bio"
                placeholder="Bio (visible on profile page)"
                value={profile.bio}
                onChange={handleProfileChange}
                className="col-span-2 px-3 py-2 rounded-md border border-gray-300 text-sm min-h-[80px]"
              />
            </form>
          </div>
        </section>

        {/* On the Web Section */}
        <section>
          <h2 className="text-xl font-medium mb-5">On the Web</h2>
          {/* Connect Account */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Connect Account</h3>
            <div className="flex flex-col gap-4 max-w-lg">
              {/* Connect/Edit Buttons for Socials */}
              {platforms
                .filter((p) => p.type === "connect")
                .map((platform) => (
                  <div key={platform.label} className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                      {/* Placeholder for network icon */}
                      <span className="text-xs text-gray-600 font-bold">
                        {platform.label[0]}
                      </span>
                    </span>
                    <span className="w-28 text-black">{platform.label}</span>
                    {platform.connected ? (
                      <button
                        onClick={() => handleEditAccount(platform.label)}
                        className="border border-[#13007D] text-[#13007D] text-xs rounded-full px-4 py-1 mx-9"
                        type="button"
                      >
                        Edit Account
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConnectAccount(platform.label)}
                        className="bg-[#13007D] text-white text-xs rounded-full px-4 py-1 mx-9"
                        type="button"
                      >
                        Connect Account
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
          {/* Enter Profiles */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Enter Profiles</h3>
            <div className="flex flex-col gap-2 max-w-lg">
              {platforms
                .filter((p) => p.type === "username")
                .map((platform) => (
                  <div key={platform.label} className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                      {/* Placeholder for network icon */}
                      <span className="text-xs text-gray-600 font-bold ">
                        {platform.label[0]}
                      </span>
                    </span>
                    <span className="w-28 text-black">{platform.label}</span>
                    {editingUsername === platform.label ? (
                      <>
                        <input
                          type="text"
                          value={usernameInput}
                          onChange={(e) => setUsernameInput(e.target.value)}
                          className="px-2 py-1 border rounded text-xs"
                          placeholder="Enter username"
                        />
                        <button
                          onClick={() => handleUsernameSubmit(platform.label)}
                          className="text-xs ml-1 text-[#13007D]"
                          type="button"
                        >
                          Submit
                        </button>
                        <button
                          onClick={() => setEditingUsername(null)}
                          className="text-xs ml-1 text-gray-400 mx-9"
                          type="button"
                        >
                          ×
                        </button>
                      </>
                    ) : platform.username ? (
                      <span className="text-xs text-gray-700 mx-9">
                        {platform.username}
                      </span>
                    ) : (
                      <button
                        onClick={() => handleUsernameEdit(platform.label)}
                        className="border border-[#13007D] text-[#13007D] text-xs rounded-full px-4 py-1 mx-9"
                        type="button"
                      >
                        Add username
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section>
          <h2 className="text-xl font-medium mb-3">Links</h2>
          <div className="flex items-center gap-2 max-w-xl mb-4">
            <input
              name="title"
              placeholder="Enter your Title"
              value={linkInput.title}
              onChange={handleLinkInputChange}
              className="flex-1 border rounded px-3 py-2 text-sm mx-9"
            />
            <input
              name="url"
              placeholder="Enter url"
              value={linkInput.url}
              onChange={handleLinkInputChange}
              className="flex-1 border rounded px-3 py-2 text-sm mx-9"
            />
            <button
              onClick={handleAddLink}
              className="bg-[#13007D] px-5 py-2 text-white rounded-full text-3sm mx-9 px-10"
              type="button"
            >
              Add
            </button>
          </div>
          {/* Display added links */}
          <div className="flex flex-col gap-2">
            {links.map((l, idx) => (
              <div
                key={idx}
                className="flex gap-2 items-center text-sm text-black"
              >
                <span className="font-medium">{l.title}</span>
                <span className="text-gray-500">{l.url}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtistSettings;
