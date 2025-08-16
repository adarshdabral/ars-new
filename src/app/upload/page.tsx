'use client';

import { Upload, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function UploadArtworkPage() {
  const [formData, setFormData] = useState({
    title: '',
    medium: '',
    style: '',
    length: '',
    breadth: '',
    price: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = () => {
    console.log('Uploading:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back & Title */}
      <div className="flex items-center gap-2 mb-1">
        <ArrowLeft className="w-4 h-4 text-[#13007D]" />
        <h1 className="text-lg sm:text-xl font-semibold text-[#13007D]">Upload a New Artwork</h1>
      </div>
      <p className="text-sm text-gray-500 mb-6">Please provide the necessary details below</p>

      {/* Upload Box */}
      <div className="w-full bg-gray-100 border border-gray-300 rounded-md h-48 flex flex-col justify-center items-center mb-8">
        <Upload className="w-6 h-6 text-gray-500 mb-2" />
        <p className="text-sm text-gray-600">Upload your artwork</p>
      </div>

      {/* Section Title */}
      <h2 className="text-md font-semibold mb-4">Add Details of your Artwork</h2>

      {/* Row 1: Title / Medium / Style */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Title of your artwork"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />
        <input
          type="text"
          name="medium"
          placeholder="Medium of your artwork"
          value={formData.medium}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />
        <input
          type="text"
          name="style"
          placeholder="Style of your artwork"
          value={formData.style}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />
      </div>

      {/* Row 2: Length / Breadth / Price */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="length"
          placeholder="Length of artwork"
          value={formData.length}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />
        <input
          type="text"
          name="breadth"
          placeholder="Breadth of artwork"
          value={formData.breadth}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />
        <input
          type="text"
          name="price"
          placeholder="Enter an amount"
          value={formData.price}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
        />
      </div>

      {/* Description */}
      <textarea
        name="description"
        placeholder="Short Description of your artwork"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-6"
      />

      {/* Upload Button Centered */}
      <div className="flex justify-center">
        <button
          onClick={handleUpload}
          className="bg-[#13007D] text-white text-sm font-medium px-10 py-2 rounded-full hover:opacity-90 transition"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
