import { User, UserPlus, Users, Check, X, MapPin, MessageSquare, Plane } from "lucide-react"

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const Friends = () => {
  const friendsList = [
    { id: 1, name: "John Doe", location: "New York, USA", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Jane Smith", location: "London, UK", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Mike Johnson", location: "Sydney, AUS", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Emily White", location: "Paris, FRA", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const pendingRequests = [
    { id: 1, name: "Chris Green", location: "Berlin, GER", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Anna Brown", location: "Rome, ITA", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const travelGroups = [
    { id: 1, name: "Europe Backpackers", members: 15, trips: 3, icon: <Plane className="w-5 h-5 text-blue-400" /> },
    { id: 2, name: "Asian Foodies", members: 8, trips: 1, icon: <Users className="w-5 h-5 text-green-400" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-white mb-6">My Connections</h1>

        {/* My Friends Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-green-500" /> My Friends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {friendsList.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-lg ring-2 ring-white/20 ring-offset-2 ring-offset-transparent">
                                {getInitials(friend.name)}
                         </div>
                  <div>
                    <h3 className="font-medium">{friend.name}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {friend.location}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded-md text-sm transition-colors flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" /> Chat
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Requests Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-yellow-500" /> Pending Requests
          </h2>
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <img
                    src={request.avatar || "/placeholder.svg"}
                    alt={request.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{request.name}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {request.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-green-600 hover:bg-green-500 rounded-md transition-colors">
                    <Check className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-red-600 hover:bg-red-500 rounded-md transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Travel Groups Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" /> My Travel Groups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelGroups.map((group) => (
              <div key={group.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{group.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {group.members} members • {group.trips} trips
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded-md text-sm transition-colors">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends
