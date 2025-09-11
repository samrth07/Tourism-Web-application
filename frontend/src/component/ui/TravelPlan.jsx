"use client";
import {
  MapPin,
  CalendarDays,
  Clock,
  UserCircle,
  Users,
} from "lucide-react";

const TravelPlan = ({ plan, JoinPlan, msg }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const HandleJoinPlan = () => {
    JoinPlan(plan.id);
  };

  return (
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300 p-8 overflow-hidden">

      {/* Decorative background glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent blur-2xl opacity-50 z-0" />

      {/* Group Size Badge */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/80 text-white flex items-center gap-1 shadow-md">
        <Users size={14} />
        <span>10</span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 space-y-6">

        {/* Destination */}
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <MapPin size={22} className="text-green-400" />
          {plan.destination}
        </h3>

        {/* Info Rows */}
        <div className="grid gap-4">
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <CalendarDays size={20} className="text-green-400" />
            <span className="text-sm text-white/90 font-medium">
              Date: <span className="text-white">{formatDate(plan.travelDate)}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <Clock size={20} className="text-green-400" />
            <span className="text-sm text-white/90 font-medium">
              Slot: <span className="text-white">{plan.timeSlot}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
            <UserCircle size={20} className="text-green-400" />
            <span className="text-sm text-white/90 font-medium">
              Admin: <span className="text-white">{plan.user?.name || "Unknown"}</span>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold shadow-md transition-all duration-200">
            View Details
          </button>
          <button
            onClick={HandleJoinPlan}
            className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold shadow-md transition-all duration-200"
          >
            {msg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlan;
