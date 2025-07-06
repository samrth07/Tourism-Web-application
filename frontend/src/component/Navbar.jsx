import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-[#001f3f] text-white shadow-md">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaPlaneDeparture className="text-green-400" />
          Trekker
        </Link>

        {/* Right Side Options */}
        {isLoggedIn ? (
          <div className="flex items-center gap-4 text-sm">
            <Link
              to="/settings"
              className="px-4 py-1 rounded-full hover:bg-white hover:text-black border border-white transition"
            >
              Settings
            </Link>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                navigate("/signin");
              }}
              className="bg-red-500 px-4 py-1 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => navigate("/signin")}
              className="bg-transparent border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navbar - only when not logged in */}
      {!isLoggedIn && (
        <div className="flex justify-center gap-10 px-6 py-2 bg-[#004d40]/90 text-white text-sm font-semibold shadow-md">
          <Link to="/" className="hover:text-green-300 transition">Explore</Link>
          <Link to="/destinations" className="hover:text-green-300 transition">Destinations</Link>
          <Link to="/offers" className="hover:text-green-300 transition">Offers</Link>
          <Link to="/find-travel-mate" className="hover:text-green-300 transition">Find Travel Mate</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
