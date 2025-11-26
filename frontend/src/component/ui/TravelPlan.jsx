import { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Compass,
  TrendingUp,
  Timer,
  Image as ImageIcon,
} from "lucide-react";
import TravelPlanDetailsModal from "./TravelPlanDetailsModal";

const EnhancedTravelPlan = ({ plan, JoinPlan, msg, OpenMemberPage }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
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
    if (member.user?.sender && member.user.sender.length > 0) {
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-700 border-green-300";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "hard":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-stone-100 text-stone-700 border-stone-300";
    }
  };

  const getCategoryIcon = () => {
    return <Compass size={16} className="text-white" />;
  };

  return (
    <>
      <TravelPlanDetailsModal
        plan={plan}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
      <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100 overflow-hidden  w-[36rem] ">
        {/* Hero Image Section */}
        <div className="relative h-56 overflow-hidden">
          {plan.image ? (
            <img
              src={plan.image}
              alt={plan.destination}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center">
              <ImageIcon size={48} className="text-white/40" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
              <span className="text-orange-600 text-xs font-bold">ACTIVE</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
              {plan.destination}
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                <Users size={14} className="text-white" />
                <span className="text-white text-sm font-semibold">
                  {plan.members?.length || 0}/{plan.grpSize}
                </span>
              </div>
              <div
                className={`rounded-full px-3 py-1 text-xs font-semibold border ${getDifficultyColor(
                  plan.Difficulty
                )}`}
              >
                {plan.Difficulty}
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-5 p-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 border border-orange-200">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-500 rounded-lg p-2 mb-2">
                  {getCategoryIcon()}
                </div>
                <p className="text-xs text-stone-500 font-medium">Category</p>
                <p className="text-xs font-bold text-stone-900 mt-0.5">
                  {plan.Categories}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 border border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500 rounded-lg p-2 mb-2">
                  <Timer size={16} className="text-white" />
                </div>
                <p className="text-xs text-stone-500 font-medium">Duration</p>
                <p className="text-xs font-bold text-stone-900 mt-0.5 capitalize">
                  {plan.Duration}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 border border-green-200">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500 rounded-lg p-2 mb-2">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <p className="text-xs text-stone-500 font-medium">Age</p>
                <p className="text-xs font-bold text-stone-900 mt-0.5">
                  {plan.minAge}-{plan.maxAge}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
            <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
              {plan.decp}
            </p>
          </div>

          {/* Date & Time Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
              <div className="flex items-start gap-2">
                <div className="bg-orange-500 rounded-lg p-2">
                  <CalendarDays size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone-500 font-medium">
                    Travel Date
                  </p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">
                    {formatDate(plan.travelDate)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
              <div className="flex items-start gap-2">
                <div className="bg-amber-500 rounded-lg p-2">
                  <Clock size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone-500 font-medium">
                    Time Slot
                  </p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">
                    {plan.timeSlot}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cities Section */}
          {getMemberCities().length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" />
                <span className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                  Departure Cities
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {getMemberCities()
                  .slice(0, 4)
                  .map((city, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-xs rounded-full font-semibold border border-orange-300 shadow-sm"
                    >
                      {city}
                    </span>
                  ))}
                {getMemberCities().length > 4 && (
                  <span className="px-3 py-1 bg-stone-200 text-stone-700 text-xs rounded-full font-semibold">
                    +{getMemberCities().length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Travel Buddies Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Travel Buddies
              </span>
              <span className="text-xs text-stone-500">
                by{" "}
                <span className="font-semibold text-orange-600">
                  {plan.user?.name}
                </span>
              </span>
            </div>

            <button
              className="w-full bg-stone-50 hover:bg-stone-100 rounded-xl p-4 transition-all duration-200 group/members border border-stone-200"
              onClick={OpenMemberPage}
            >
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {plan.members && plan.members.length > 0 ? (
                    <>
                      {plan.members.slice(0, 5).map((member, ind) => {
                        const status = getMemberStatus(member);
                        return (
                          <div key={ind} className="relative">
                            <div className="bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white rounded-full text-white w-10 h-10 flex justify-center items-center font-bold text-sm shadow-lg">
                              {getInitials(member.user?.name || "")}
                            </div>
                            {status === "accepted" && (
                              <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full p-0.5 border-2 border-white">
                                <CheckCircle size={10} className="text-white" />
                              </div>
                            )}
                            {status === "pending" && (
                              <div className="absolute -bottom-0.5 -right-0.5 bg-yellow-500 rounded-full p-0.5 border-2 border-white">
                                <Clock size={10} className="text-white" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                      {plan.members.length > 5 && (
                        <div className="bg-stone-400 border-2 border-white rounded-full text-white w-10 h-10 flex justify-center items-center font-bold text-xs shadow-lg">
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
                  size={18}
                  className="text-stone-400 group-hover/members:text-orange-500 group-hover/members:translate-x-1 transition-all"
                />
              </div>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setIsDetailsOpen(true)}
              className="flex-1 bg-white hover:bg-stone-50 text-stone-700 font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/details border-2 border-stone-200 hover:border-orange-300"
            >
              <Star
                size={16}
                className="group-hover/details:text-orange-500 group-hover/details:fill-orange-500 transition-all"
              />
              <span>Details</span>
            </button>
            <button
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              onClick={HandleJoinPlan}
            >
              {msg}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedTravelPlan;
