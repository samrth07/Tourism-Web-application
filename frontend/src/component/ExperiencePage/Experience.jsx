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
  <div className="min-h-screen bg-white pt-32 px-6 py-10 text-stone-900">
    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200 text-transparent bg-clip-text text-5xl font-extrabold tracking-tight ">
        Explore Experiences
      </h1>
      <p className="text-stone-700 max-w-xl mx-auto mt-2 text-lg">
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
        className="w-full px-4 py-2 rounded-xl bg-white/50 border border-lime-950/30 backdrop-blur-md text-stone-900 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
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
              className="w-full cursor-pointer group"
            >
              <div className="w-full h-64 sm:h-72 md:h-80 xl:h-96 rounded-3xl mb-4 overflow-hidden relative border border-lime-950/20 shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-lime-950/40 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-4xl">
                😍
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange-600/50 text-white text-xl font-black  opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {/* <div className=" text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform"> */}
                    View More
                  
                </div>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-stone-900 text-center mt-2">
              {title}
            </h2>
          </div>
        );
      })}
      {filteredExperiences.length === 0 && (
        <p className="text-center text-lime-950 col-span-full">
          No experiences found.
        </p>
      )}
    </div>
  </div>
);
}
