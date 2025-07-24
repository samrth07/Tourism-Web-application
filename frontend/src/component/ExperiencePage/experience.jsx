import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const experiences = [
    "Adventure Park", "Adventure Tours", "ATV Riding", "Backpacking Group Tours",
    "Bike Expedition", "Bungee Jump", "Camping", "Car trips - Self Drive Own Car",
    "Cycling Tours", "Desert Safari", "Flyboarding", "Flying Fox", "Giant Swing",
    "Hot Air Balloon", "Houseboats", "Kayaking", "Paragliding", "Parasailing",
    "River Rafting", "Rock Climbing", "Scuba Diving", "Skiing", "AdventuRush Skydiving",
    "Skydiving", "Speed Boat", "Surfing", "Trekking", "Wildlife Safari", "Zipline"
  ];

  const filteredExperiences = experiences.filter((title) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b pt-32 from-[#000814] via-[#003049] to-[#001d3d] px-6 py-10 text-white">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight">Explore Experiences</h1>
        <p className="text-gray-300 max-w-xl mx-auto mt-2 text-lg">
          Discover unforgettable adventures and thrilling activities curated for every kind of traveler.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search experiences..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-12 xl:px-32">
        {filteredExperiences.map((title) => {
          const slug = title.toLowerCase().replace(/\s+/g, "-");

          return (
            <div key={title} className="flex flex-col items-center">
              <div
                onClick={() => navigate(`/experience/${slug}`)}
                className="w-full cursor-pointer"
              >
                <div className="w-full h-64 sm:h-72 md:h-80 xl:h-96 bg-white/10 rounded-3xl mb-4 flex items-center justify-center text-lg text-gray-400 shadow-none border-none">
                  Image Here
                </div>
              </div>
              <h2 className="text-lg font-semibold text-white text-center mt-2">{title}</h2>
            </div>
          );
        })}
        {filteredExperiences.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No experiences found.
          </p>
        )}
      </div>
    </div>
  );
}
