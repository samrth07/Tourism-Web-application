"use client";
import {
  MapPin,
  CalendarDays,
  Clock,
  UserCircle,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  MapPinIcon,
} from "lucide-react";

const EnhancedTravelPlan = ({ plan, JoinPlan, msg, OpenMemberPage }) => {
  console.log(plan.members);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getInitials = (name) =>
    typeof name === "string"
      ? name
          .trim()
          .split(" ")
          .map((n) => n[0]?.toUpperCase())
          .join("")
      : "";

  const HandleJoinPlan = () => {
    JoinPlan(plan.id);
  };

  const getMemberStatus = (member) => {
    if (member.user?.sender?.length > 0) {
      return member.user.sender[0].isAccepted ? "accepted" : "pending";
    }
    return "member";
  };

  const getMemberCities = () => {
    const cities =
      plan.members
        ?.map((member) => member.user?.Address?.city)
        .filter(Boolean) || [];
    return [...new Set(cities)];
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100 overflow-hidden max-w-md">
      {/* Hero Section with Destination */}
      <div className="relative h-24 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative p-6 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                <MapPinIcon size={24} className="text-white" />
                {plan.destination}
              </h3>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-white/80" />
                <span className="text-white/90 text-sm font-medium">
                  {plan.members?.length || 0} travelers
                </span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-xs font-semibold">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 space-y-6">

      {/* Trip Details Section */}
      <div className="p-6 space-y-6">
        {/* Date & Time Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-xl p-2">
                <CalendarDays size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">
                  Travel Date
                </p>
                <p className="text-sm font-bold text-stone-900">
                  {formatDate(plan.travelDate)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lime-50 rounded-2xl p-4 border border-lime-200">
            <div className="flex items-center gap-2">
              <div className="bg-lime-600 rounded-xl p-2">
                <Clock size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">
                  Time Slot
                </p>
                <p className="text-sm font-bold text-stone-900">
                  {plan.timeSlot}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-orange-500" />
            <span className="text-sm font-semibold text-stone-900">
              Departure Cities
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {getMemberCities()
              .slice(0, 4)
              .map((city, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-xs rounded-full font-semibold border border-orange-300"
                >
                  {city}
                </span>
              ))}
            {getMemberCities().length > 4 && (
              <span className="px-3 py-1.5 bg-stone-200 text-stone-700 text-xs rounded-full font-semibold">
                +{getMemberCities().length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Travel Buddies Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCircle size={16} className="text-orange-500" />
              <span className="text-sm font-semibold text-stone-900">
                Travel Buddies
              </span>
            </div>
            <span className="text-xs text-stone-500">
              by{" "}
              <span className="font-semibold text-stone-700">
                {plan.user?.name}
              </span>
            </span>
          </div>

          <button
            className="w-full bg-stone-50 hover:bg-stone-100 rounded-2xl p-4 transition-all duration-200 group/members"
            onClick={() => OpenMemberPage(plan.members)}
          >
            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                {plan.members && plan.members.length > 0 ? (
                  <>
                    {plan.members.slice(0, 5).map((member, ind) => {
                      const status = getMemberStatus(member);
                      return (
                        <div key={ind} className="relative">
                          <div className="bg-gradient-to-br from-orange-400 to-orange-500 border-3 border-white rounded-full text-white w-10 h-10 flex justify-center items-center font-bold text-sm shadow-lg">
                            {getInitials(member.user?.name)}
                          </div>
                          {status === "accepted" && (
                            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                              <CheckCircle size={10} className="text-white" />
                            </div>
                          )}
                          {status === "pending" && (
                            <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
                              <Clock size={10} className="text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {plan.members.length > 5 && (
                      <div className="bg-stone-400 border-3 border-white rounded-full text-white w-12 h-12 flex justify-center items-center font-bold text-sm shadow-lg">
                        +{plan.members.length - 5}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-stone-500 text-sm font-medium">
                    No members yet
                  </div>
                )}
              </div>
              <ArrowRight
                size={16}
                className="text-stone-400 group-hover/members:text-orange-500 transition-colors"
              />
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-4 px-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 group/details">
            <Star
              size={16}
              className="group-hover/details:text-orange-500 transition-colors"
            />
            <span>Details</span>
          </button>
          <button
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={HandleJoinPlan}
          >
            {msg}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EnhancedTravelPlan;
