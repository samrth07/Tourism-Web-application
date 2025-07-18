import { useEffect, useState } from "react"
import {
  FaUser,
  FaMapMarkerAlt,
  FaEdit,
  FaCamera,
  FaPlane,
  FaHeart,
  FaStar,
  FaCalendar,
  FaGlobe,
  FaCog,
  FaUpload,
  FaEye,
  FaLock,
  FaBell,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
} from "react-icons/fa"

const getInitials = (name) =>
  typeof name === "string"
    ? name
        .trim()
        .split(" ")
        .map((n) => n[0]?.toUpperCase())
        .join("")
    : "";


const Profile = () => {

  const [ user , setUser] = useState(null);
  const [ loading , setLoading] = useState(true);
  

 useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
     setLoading(false);
  }, []);


  const currentUser = {
    name: "Sarah Mitchell",
    email: "sarah.mitchell@email.com",
    phone: "+1 (555) 987-6543",
    location: "Los Angeles, CA",
    bio: "Adventure enthusiast and culture explorer. I love discovering hidden gems, trying authentic local food, and connecting with fellow travelers. Currently planning my next big adventure!",
    joinDate: "January 2023",
    profileViews: 156,
    stats: {
      trips: 18,
      countries: 9,
      connections: 45,
      rating: 4.9,
    },
    interests: ["Photography", "Hiking", "Food Tours", "Museums", "Beach", "Adventure Sports"],
    upcomingTrips: [
      { destination: "Iceland", date: "March 2024", status: "Planning" },
      { destination: "Morocco", date: "June 2024", status: "Booked" },
    ],
    recentTrips: [
      { destination: "New Zealand", date: "Dec 2023", image: "/placeholder.svg?height=100&width=150", rating: 5 },
      { destination: "Thailand", date: "Sep 2023", image: "/placeholder.svg?height=100&width=150", rating: 5 },
      { destination: "Greece", date: "Jul 2023", image: "/placeholder.svg?height=100&width=150", rating: 4 },
    ],
    privacy: {
      profileVisibility: "Public",
      showEmail: false,
      showPhone: false,
    },
  }

    if( loading || !user){
      return (
        <div>
              Loding Page..........
        </div>
      )
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar Section */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-600 flex items-center justify-center text-4xl font-bold shadow-2xl ring-4 ring-blue-500/20">
                   {getInitials(user.name)}
              </div>
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group">
                <FaCamera className="text-sm" />
              </button>
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/20 to-cyan-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {user.name}
                </h1>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                    <FaEdit className="text-sm" />
                    Edit Profile
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                    <FaCog className="text-sm" />
                    Settings
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400" />
                  <span>{user.Address?.city || "Unkonwn"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-blue-400" />
                  <span>Member since {(user.createdAt).slice(0 , 4)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="text-cyan-400" />
                  <span>{currentUser.profileViews} profile views</span>
                </div>
              </div>

              <p className="text-gray-200 max-w-2xl leading-relaxed">{currentUser.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <FaPlane className="text-3xl text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentUser.stats.trips}</div>
                <div className="text-gray-400 text-sm">My Trips</div>
              </div>

              <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <FaGlobe className="text-3xl text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentUser.stats.countries}</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>

              <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <FaUser className="text-3xl text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentUser.stats.connections}</div>
                <div className="text-gray-400 text-sm">Connections</div>
              </div>

              <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <FaStar className="text-3xl text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentUser.stats.rating}</div>
                <div className="text-gray-400 text-sm">My Rating</div>
              </div>
            </div>

            {/* Upcoming Trips */}
            <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaCalendar className="text-purple-400" />
                  Upcoming Adventures
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-sm">
                  <FaPlus className="text-xs" />
                  Add Trip
                </button>
              </div>
              <div className="space-y-4">
                {currentUser.upcomingTrips.map((trip, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-white">{trip.destination}</h4>
                      <p className="text-gray-300 text-sm">{trip.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          trip.status === "Booked"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {trip.status}
                      </span>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <FaEdit className="text-sm text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Interests */}
            <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaHeart className="text-red-400" />
                  My Travel Interests
                </h3>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaEdit />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {currentUser.interests.map((interest, index) => (
                  <div key={index} className="group relative">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-pointer">
                      {interest}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaTrash className="text-xs text-red-400" />
                      </button>
                    </span>
                  </div>
                ))}
                <button className="px-4 py-2 border-2 border-dashed border-gray-500 hover:border-blue-400 rounded-full text-sm text-gray-400 hover:text-blue-400 transition-all duration-300">
                  + Add Interest
                </button>
              </div>
            </div>

            {/* Recent Trips */}
            <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaPlane className="text-blue-400" />
                  My Recent Adventures
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-sm">
                  <FaUpload className="text-xs" />
                  Add Photos
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentUser.recentTrips.map((trip, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.destination}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white">{trip.destination}</h4>
                          <p className="text-gray-300 text-sm">{trip.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(trip.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <FaEdit className="text-xs text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Account Settings */}
            <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaCog className="text-blue-400" />
                Account Settings
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 bg-black/20 hover:bg-black/30 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaUser className="text-purple-400" />
                    <span className="text-sm">Edit Personal Info</span>
                  </div>
                  <FaEdit className="text-gray-400 text-sm" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-black/20 hover:bg-black/30 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaLock className="text-green-400" />
                    <span className="text-sm">Privacy Settings</span>
                  </div>
                  <FaEdit className="text-gray-400 text-sm" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-black/20 hover:bg-black/30 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaBell className="text-yellow-400" />
                    <span className="text-sm">Notifications</span>
                  </div>
                  <FaEdit className="text-gray-400 text-sm" />
                </button>
              </div>
            </div>

            {/* Privacy Status */}
            <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaLock className="text-green-400" />
                Privacy Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Profile Visibility</span>
                  <span className="text-sm text-green-400 font-medium">{currentUser.privacy.profileVisibility}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Show Email</span>
                  <span
                    className={`text-sm font-medium ${currentUser.privacy.showEmail ? "text-green-400" : "text-red-400"}`}
                  >
                    {currentUser.privacy.showEmail ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Show Phone</span>
                  <span
                    className={`text-sm font-medium ${currentUser.privacy.showPhone ? "text-green-400" : "text-red-400"}`}
                  >
                    {currentUser.privacy.showPhone ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                  <FaPlus />
                  Create New Trip
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                  <FaUser />
                  Find Travel Mates
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
