import React from "react";
import { User, Mail, Contact, EggFriedIcon } from "lucide-react";

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const TravelMateCard = ({ user  , message}) => {
  return (
    <div className="group relative">
      {/* Main card container with glass effect and hover animation */}
      <div className="relative bg-black/20 backdrop-blur-sm text-white shadow-2xl rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:bg-black/25 border border-white/10">
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Header section with avatar and user info */}
        <div className="relative flex items-center gap-4 mb-6">
          <div className="relative">
            {/* Enhanced avatar with multiple rings and shadow */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-lg ring-2 ring-white/20 ring-offset-2 ring-offset-transparent">
              {getInitials(user.name)}
            </div>
            {/* Online status indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-black/20 shadow-sm animate-pulse"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white mb-1 truncate">{user.name}</h3>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {user.Address?.city || "Unknown Location"}
            </p>
          </div>
        </div>

        {/* Email section with enhanced styling */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></div>
          <div className="pl-4 py-3 bg-white/5 rounded-r-xl border-l-0">
            <p className="italic text-sm text-gray-200 leading-relaxed">"{user.email}"</p>
          </div>
        </div>

        {/* Address details with improved layout */}
        <div className="space-y-3 mb-6">
          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Country:</span>
                <span className="text-white font-semibold">{user.Address?.country || "N/A"}</span>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Pincode:</span>
                <span className="text-white font-semibold">{user.Address?.pincode || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className="relative flex gap-3">
          <button className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-green-600 hover:to-emerald-600 active:scale-95">
            <Contact className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            <span>{message}</span>
          </button>
          
          <button className="flex-1 group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-600 hover:to-gray-800 active:scale-95">
            <User className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            <span>Profile</span>
          </button>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 left-3 w-6 h-6 bg-gradient-to-tr from-blue-600/20 to-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default TravelMateCard;