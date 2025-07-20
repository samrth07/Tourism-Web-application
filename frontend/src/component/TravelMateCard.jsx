import React from "react";
import { User, Mail } from "lucide-react";

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const TravelMateCard = ({ user }) => {
  return (
    <div className="group relative">
      {/* Card with navbar gradient background */}
      <div className="relative bg-gradient-to-br from-[#002d2d] to-[#001d3d] backdrop-blur-sm text-white shadow-2xl rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-white/10">

        {/* Hover glow overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Avatar & Info */}
        <div className="relative flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white font-bold text-lg flex items-center justify-center shadow-lg ring-2 ring-white/10 ring-offset-2 ring-offset-black">
              {getInitials(user.name)}
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-black/50 shadow-sm animate-pulse"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white mb-1 truncate">{user.name}</h3>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {user.Address?.city || "Unknown Location"}
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
          <div className="pl-4 py-3 bg-white/5 rounded-r-xl">
            <p className="italic text-sm text-gray-200">"{user.email}"</p>
          </div>
        </div>

        {/* Country & Pincode */}
        <div className="space-y-3 mb-6">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Country:</span>
                <span className="text-white font-semibold">{user.Address?.country || "N/A"}</span>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Pincode:</span>
                <span className="text-white font-semibold">{user.Address?.pincode || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative flex gap-3">
          <button className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-600 active:scale-95">
            <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Connect</span>
          </button>
          <button className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-gray-600 hover:to-gray-800 active:scale-95">
            <User className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Profile</span>
          </button>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 left-3 w-6 h-6 bg-gradient-to-tr from-blue-500/20 to-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default TravelMateCard;
