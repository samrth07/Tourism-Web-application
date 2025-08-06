"use client";
import {
  MapPin,
  CalendarDays,
  Clock,
  UserCircle,
  Star,
  Users,
} from "lucide-react";

const TravelPlan = ({ plan , JoinPlan , msg}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };



const HandleJoinPlan = () => { 
    JoinPlan(plan.id);
}

  return (
    <div className="relative bg-[#0b0f1a] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] p-8 border border-gray-700/40">
      {/* Group size top-left */}
      <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-700/40 text-gray-200 backdrop-blur">
        <Users size={14} />
        <span>10</span>
      </div>

      {/* Destination */}
      <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
        <MapPin size={20} className="text-gray-400" />
        {plan.destination}
      </h3>

      {/* Detail Info */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 bg-gray-700/30 p-3 rounded-xl">
          <CalendarDays size={18} className="text-gray-400" />
          <span className="text-sm text-gray-300 font-medium">
            Date: <span className="text-white">{formatDate(plan.travelDate)}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 bg-gray-700/30 p-3 rounded-xl">
          <Clock size={18} className="text-gray-400" />
          <span className="text-sm text-gray-300 font-medium">
            Slot: <span className="text-white">{plan.timeSlot}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 bg-gray-700/30 p-3 rounded-xl">
          <UserCircle size={18} className="text-gray-400" />
          <span className="text-sm text-gray-300 font-medium">
            Admin: <span className="text-white">{plan.user?.name || "Unknown"}</span>
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 text-white font-medium bg-gray-800 hover:bg-gray-700 py-2.5 rounded-xl transition duration-200 shadow">
          View Details
        </button>
        <button className="flex-1 text-white font-medium bg-gray-700 hover:bg-gray-600 py-2.5 rounded-xl transition duration-200 shadow"
        onClick={HandleJoinPlan}>
          {msg}
        </button>
      </div>
    </div>
  );
};

export default TravelPlan;
