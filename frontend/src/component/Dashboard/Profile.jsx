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
import { Link } from "react-router-dom"

const getInitials = (name) =>
  typeof name === "string"
    ? name
        .trim()
        .split(" ")
        .map((n) => n[0]?.toUpperCase())
        .join("")
    : ""

const Profile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

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
      {
        destination: "New Zealand",
        date: "Dec 2023",
        image: "/placeholder.svg?height=100&width=150",
        rating: 5,
      },
      {
        destination: "Thailand",
        date: "Sep 2023",
        image: "/placeholder.svg?height=100&width=150",
        rating: 5,
      },
      {
        destination: "Greece",
        date: "Jul 2023",
        image: "/placeholder.svg?height=100&width=150",
        rating: 4,
      },
    ],
    privacy: {
      profileVisibility: "Public",
      showEmail: false,
      showPhone: false,
    },
  }

  if (loading || !user) {
    return <div className="text-stone-900 text-center py-20">Loading Profile...</div>
  }

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <div className="relative bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 border-b border-orange-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl ring-4 ring-orange-500/30">
                {getInitials(user.name)}
              </div>
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <FaCamera className="text-sm text-white" />
              </button>
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-stone-900">{user.name}</h1>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium shadow-md">
                    <FaEdit className="text-sm" />
                    Edit Profile
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-stone-900 rounded-xl transition-all duration-300 hover:scale-105 font-medium border border-gray-200">
                    <FaCog className="text-sm" />
                    Settings
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-stone-600 mb-4">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span>{user.Address?.city || "Unknown"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-orange-500" />
                  <span>Member since {user.createdAt?.slice(0, 4) || "2024"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="text-orange-500" />
                  <span>{currentUser.profileViews} profile views</span>
                </div>
              </div>

              <p className="text-stone-600 max-w-2xl leading-relaxed">{currentUser.bio}</p>
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
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                <FaPlane className="text-3xl text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-stone-900">{user.travelPlans.length}</div>
                <div className="text-stone-500 text-sm">My Trips</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                <FaGlobe className="text-3xl text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-stone-900">{user.createdPlans.length}</div>
                <div className="text-stone-500 text-sm">Created By me</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                <FaUser className="text-3xl text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-stone-900">
                  {Number.parseInt(user.sender.length) + Number.parseInt(user.reciever.length)}
                </div>
                <div className="text-stone-500 text-sm">Connections</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                <FaStar className="text-3xl text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-stone-900">{}</div>
                <div className="text-stone-500 text-sm">My Rating</div>
              </div>
            </div>

            {/* Upcoming Trips */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-stone-900">
                  <FaCalendar className="text-orange-500" />
                  Upcoming Adventures
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium text-sm">
                  <FaPlus className="text-xs" />
                  Add Trip
                </button>
              </div>
              <div className="space-y-4">
                {currentUser.upcomingTrips.map((trip, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-orange-200 transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-stone-900">{trip.destination}</h4>
                      <p className="text-stone-600 text-sm">{trip.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          trip.status === "Booked"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        }`}
                      >
                        {trip.status}
                      </span>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaEdit className="text-sm text-stone-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Interests */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-stone-900">
                  <FaHeart className="text-orange-500" />
                  My Travel Interests
                </h3>
                <button className="text-orange-500 hover:text-orange-600 transition-colors">
                  <FaEdit />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {currentUser.interests.map((interest, index) => (
                  <div key={index} className="group relative">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 text-orange-700 rounded-full text-sm hover:bg-orange-100 transition-all duration-300 cursor-pointer">
                      {interest}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaTrash className="text-xs text-red-500" />
                      </button>
                    </span>
                  </div>
                ))}
                <button className="px-4 py-2 border-2 border-dashed border-gray-300 hover:border-orange-400 text-stone-500 hover:text-orange-500 rounded-full text-sm transition-all duration-300">
                  + Add Interest
                </button>
              </div>
            </div>

            {/* Recent Trips */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-stone-900">
                  <FaPlane className="text-orange-500" />
                  My Recent Adventures
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium text-sm">
                  <FaUpload className="text-xs" />
                  Add Photos
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentUser.recentTrips.map((trip, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200 hover:border-orange-200 transition-all duration-300 hover:scale-105"
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
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-stone-900">
                <FaCog className="text-orange-500" />
                Account Settings
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaUser className="text-orange-500" />
                    <span className="text-sm text-stone-900">Edit Personal Info</span>
                  </div>
                  <FaEdit className="text-stone-500 text-sm" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaLock className="text-orange-500" />
                    <span className="text-sm text-stone-900">Privacy Settings</span>
                  </div>
                  <FaEdit className="text-stone-500 text-sm" />
                </button>

                <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <FaBell className="text-orange-500" />
                    <span className="text-sm text-stone-900">Notifications</span>
                  </div>
                  <FaEdit className="text-stone-500 text-sm" />
                </button>
              </div>
            </div>

            {/* Privacy Status */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-stone-900">
                <FaLock className="text-orange-500" />
                Privacy Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-600">Profile Visibility</span>
                  <span className="text-sm text-green-600 font-medium">{currentUser.privacy.profileVisibility}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-600">Show Email</span>
                  <span
                    className={`text-sm font-medium ${
                      currentUser.privacy.showEmail ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {currentUser.privacy.showEmail ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-600">Show Phone</span>
                  <span
                    className={`text-sm font-medium ${
                      currentUser.privacy.showPhone ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {currentUser.privacy.showPhone ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl p-6 shadow-sm bg-white border border-gray-200   ">
              <h3 className="text-xl font-bold mb-4 text-black">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                  <FaPlus />
                  Create New Trip
                </button>
                <Link
                  to="/find-travel-mate"
                  className="w-full flex items-center gap-3 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                >
                  <FaUser />
                  Find Travel Mates
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-lime-800 hover:bg-lime-700 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium">
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
