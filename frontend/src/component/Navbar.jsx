"use client"
import { Link, useNavigate } from "react-router-dom"
import { Plane, User, LogOut } from "lucide-react" // Using Lucide React for consistency
import { useAuth } from "../context/Authcontext" // Assuming this path is correct

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-3xl font-bold transition-colors hover:text-green-400"
        >
          <Plane className="w-8 h-8 text-green-500" />
          TravelMate
        </Link>

        {/* Main Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-semibold">
          <Link to="/experience" className="text-gray-300 hover:text-white transition-colors relative group">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors relative group">
            Destinations
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/offers" className="text-gray-300 hover:text-white transition-colors relative group">
            Offers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/find-travel-mate" className="text-gray-300 hover:text-white transition-colors relative group">
            Find Travel Mate
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Auth Buttons / User Actions */}
        {!user ? (
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => navigate("/signin")}
              className="px-5 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => {
                logout()
                navigate("/")
              }}
              className="px-5 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
            <button
              onClick={() => navigate("/Dashboard")}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
              aria-label="Go to Profile"
            >
              <User className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Mobile Menu Button (for future implementation) */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
