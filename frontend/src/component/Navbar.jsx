"use client";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Plane, User, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideNavbar = location.pathname.startsWith("/Dashboard");
  if (hideNavbar) return null;

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[74vw] rounded-full border-1 border-white bg-stone-900/60  backdrop-blur-md px-4 py-1 shadow-lg text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Plane className="h-6 w-6 text-white transform rotate-45" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">TravelMate</span>
            <div className="text-xs text-stone-300 -mt-1">Explore Together</div>
          </div>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-4 font-semibold md:flex text-base">
          {[
            { to: "/experience", label: "Experience" },
            { to: "/destinations", label: "Destinations" },
            { to: "/offers", label: "Offers" },
            { to: "/find-travel-mate", label: "Find Travel Mate" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative rounded-full px-3 py-2 text-white transition-colors hover:text-white group"
            >
              <span className="absolute inset-0 rounded-full bg-stone-950/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out" />{" "}
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
                className="rounded-full border-1 border-white px-2.5 py-1.5 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-orange-600"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-full bg-orange-600 px-2.5 py-1 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-700 hover:text-white hover:shadow-md hover:scale-105"
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
              className="rounded-full px-4 py-2 text-center transition-colors hover:bg-white/10"
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
                className="rounded-full border-2 border-white px-4 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/signup");
                }}
                className="rounded-full bg-green-600 px-4 py-2 font-semibold transition-colors hover:bg-green-500"
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
              aria-label="Go to Profile"
              className="flex items-center justify-center rounded-full border-2 border-white p-2 transition-shadow duration-100 hover:shadow-[0_0_10px_2px_white]"
            >
              <User className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
