"use client"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Plane, User, LogOut } from "lucide-react"
import { useAuth } from "../context/Authcontext"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  // Hide navbar on dashboard pages
  const hideNavbar = location.pathname.startsWith("/Dashboard");

  if (hideNavbar) return null;

  return (
<nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 shadow-lg rounded-full w-[1200px] h-17 px-8 py-3">
  <div className="flex justify-between items-center gap-10">
    {/* Logo */}
    <Link
      to="/"
      className="flex items-center gap-2 text-white text-3xl font-bold transition-colors hover:text-green-400"
    >
      <Plane className="w-8 h-8 text-green-500" />
      TravelMate
    </Link>        {/* Main Navigation Links */}
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
              className="px-5 py-2 rounded-full border-2 text-base border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-5 py-2 rounded-full bg-green-600 text-base text-white font-semibold hover:bg-green-500 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-base">
            <button
              onClick={() => {
                logout()
                navigate("/")
              }}
              className="px-5 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
            <button
              onClick={() => navigate("/Dashboard")}
              className="p-2 rounded-full border-2 border-white text-white hover:shadow-[0_0_10px_2px_white] transition-shadow duration-300 flex items-center justify-center"
              aria-label="Go to Profile"
            >
              <User className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
