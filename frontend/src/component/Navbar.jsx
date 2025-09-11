"use client"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Plane, User, Menu, X } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const hideNavbar = location.pathname.startsWith("/Dashboard")
  if (hideNavbar) return null

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[90vw] rounded-full bg-black px-6 py-3 shadow-lg border-2 border-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-green-400 md:text-3xl"
        >
          <Plane className="h-7 w-7 text-green-500 md:h-8 md:w-8" />
          TravelMate
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-4 font-semibold md:flex">
          {[
            { to: "/experience", label: "Experience" },
            { to: "/destinations", label: "Destinations" },
            { to: "/offers", label: "Offers" },
            { to: "/find-travel-mate", label: "Find Travel Mate" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative rounded-full px-4 py-2 text-gray-300 transition-colors hover:text-white group"
            >
              <span className="absolute inset-0 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 text-sm md:flex">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="rounded-full border-2 border-white px-5 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-full bg-green-600 px-5 py-2 text-base font-semibold text-white transition-colors duration-300 hover:bg-green-500"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/Dashboard")}
              aria-label="Go to Profile"
              className="flex items-center justify-center rounded-full border-2 border-white p-2 text-white transition-shadow duration-100 hover:shadow-[0_0_10px_2px_white]"
            >
              <User className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-xl bg-gray-700 px-4 py-4 text-base font-medium text-white md:hidden">
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
              className="rounded-full px-4 py-2 text-center transition-colors hover:bg-white/20"
            >
              {label}
            </Link>
          ))}

          {!user ? (
            <>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  navigate("/signin")
                }}
                className="rounded-full border-2 border-white px-4 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  navigate("/signup")
                }}
                className="rounded-full bg-green-600 px-4 py-2 font-semibold transition-colors hover:bg-green-500"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                navigate("/Dashboard")
              }}
              aria-label="Go to Profile"
              className="flex items-center justify-center rounded-full border-2 border-white p-2 transition-shadow duration-100 hover:shadow-[0_0_10px_2px_white]"
            >
              <User className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
