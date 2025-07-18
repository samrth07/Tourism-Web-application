import React from "react";
import { FaBookmark } from "react-icons/fa";

const offers = [
  {
    title: "Scuba Diving",
    image: "/images/scuba.jpg",
    oldPrice: 4999,
    newPrice: 3499,
    discount: 30,
  },
  {
    title: "Skydiving",
    image: "/images/skydive.jpg",
    oldPrice: 24999,
    newPrice: 17999,
    discount: 28,
  },
  {
    title: "Desert Safari",
    image: "/images/desert.jpg",
    oldPrice: 2999,
    newPrice: 2199,
    discount: 27,
  },
  {
    title: "Hot Air Balloon",
    image: "/images/balloon.jpg",
    oldPrice: 7999,
    newPrice: 5999,
    discount: 25,
  },
  {
    title: "Bungee Jump",
    image: "/images/bungee.jpg",
    oldPrice: 3999,
    newPrice: 2999,
    discount: 25,
  },
];

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000814] via-[#003049] to-[#001d3d] text-white px-6 py-10">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Exclusive Offers</h1>
        <p className="text-gray-300 max-w-xl mx-auto mt-2">
          Limited-time travel experiences at unbeatable prices.
        </p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 xl:px-32 mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-black/20 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out relative"
          >
            {/* Image Section */}
            <div className="relative">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              
              {/* Sale Tag */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                Sale
              </div>

              {/* Bookmark Icon */}
              <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/20">
                <FaBookmark className="text-white text-sm" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{offer.title}</h2>

              {/* Price Section */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-red-500 line-through text-sm">₹{offer.oldPrice}</span>
                <span className="text-white font-bold text-lg">₹{offer.newPrice}</span>
                <span className="text-yellow-400 text-sm font-medium">({offer.discount}% Off)</span>
              </div>

              {/*  Button */}
              <button className="mt-2 bg-[#003049] hover:bg-[#001d3d] text-white px-4 py-2 rounded-full text-base transition duration-300">
                View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
