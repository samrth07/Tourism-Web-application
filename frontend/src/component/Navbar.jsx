"use client"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Plane, User, Menu, X } from "lucide-react"
import { useAuth } from "../context/Authcontext"
import { useState } from "react"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide navbar on dashboard pages
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  if (hideNavbar) return null;

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 shadow-lg rounded-full w-[90vw] px-6 py-3">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-2xl md:text-3xl font-bold hover:text-green-400 transition-colors"
        >
          <Plane className="w-7 h-7 md:w-8 md:h-8 text-green-500" />
          TravelMate
        </Link>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Main Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-lg font-semibold">
          {[
            { to: "/experience", label: "Experience" },
            { to: "/destinations", label: "Destinations" },
            { to: "/offers", label: "Offers" },
            { to: "/find-travel-mate", label: "Find Travel Mate" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-300 hover:text-white transition-colors relative group px-4 py-2 rounded-full"
            >
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons / User Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {!user ? (
            <>
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
            </>
          ) : (
            <button
              onClick={() => navigate("/Dashboard")}
              className="p-2 rounded-full border-2 border-white text-white hover:shadow-[0_0_10px_2px_white] transition-shadow duration-100 flex items-center justify-center"
              aria-label="Go to Profile"
            >
              <User className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 text-white text-base font-medium">
          {[
            { to: "/experience", label: "Experience" },
            { to: "/destinations", label: "Destinations" },
            { to: "/offers", label: "Offers" },
            { to: "/find-travel-mate", label: "Find Travel Mate" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 bg-white/10 rounded-full text-center hover:bg-white/20 transition-colors"
            >
              {label}
            </Link>
          ))}

          {!user ? (
            <>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/signin");
                }}
                className="px-4 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/signup");
                }}
                className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-500 transition-colors"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/Dashboard");
              }}
              className="p-2 rounded-full border-2 border-white text-white hover:shadow-[0_0_10px_2px_white] transition-shadow duration-100 flex items-center justify-center"
              aria-label="Go to Profile"
            >
              <User className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar;
