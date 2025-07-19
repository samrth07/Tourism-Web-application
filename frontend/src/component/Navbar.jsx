import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../context/Authcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
     
      <div className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#001f3f] to-[#00334d] text-white shadow-lg">
        
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold hover:scale-105 transition-transform"
        >
          <FaPlaneDeparture className="text-green-400 text-3xl" />
          <span className="tracking-wide">Trekker</span>
        </Link>

        {/* Desktop Auth Buttons */}
        {!user ? (
          <div className="hidden md:flex items-center gap-4 text-sm">
            <button
              onClick={() => navigate("/signin")}
              className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 px-5 py-2 rounded-full text-white font-semibold hover:bg-green-400 hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4 text-sm">
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Logout
            </button>
            <button
              onClick={() => navigate("/Dashboard")}
              className="text-3xl p-2 rounded-full text-white hover:scale-110 transition-transform"
              title="Profile"
            >
              <CgProfile />
            </button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

 main
      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex justify-center gap-16 px-8 py-3 bg-[#004d40]/90 text-white shadow-md backdrop-blur-md">
        <NavLinks />
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="flex flex-col md:hidden bg-[#004d40] text-white px-6 py-4 gap-4 shadow-md">
          <NavLinks />
          {!user ? (
            <>
              <button
                onClick={() => {
                  navigate("/signin");
                  setIsOpen(false);
                }}
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setIsOpen(false);
                }}
                className="bg-green-500 px-4 py-2 rounded text-white font-semibold hover:bg-green-400"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                  setIsOpen(false);
                }}
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Logout
              </button>
              <button
                onClick={() => {
                  navigate("/Dashboard");
                  setIsOpen(false);
                }}
                className="text-xl text-white"
              >
                <CgProfile />
              </button>
            </>
          )}
=======
        <div className="flex justify-center gap-10 px-6 py-2 bg-[#004d40]/90 text-white text-sm font-semibold shadow-md">
          <Link to="/" className="hover:text-green-300 transition">Experience</Link>
          <Link to="/destinations" className="hover:text-green-300 transition">Destinations</Link>
          <Link to="/offers" className="hover:text-green-300 transition">Offers</Link>
          <Link to="/find-travel-mate" className="hover:text-green-300 transition">Find Travel Mate</Link>
main
        </div>
      )}
    </div>
  );
};

main

const NavLinks = () => (
  <>
    <Link
      to="/"
      className="text-base font-semibold tracking-wide hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200"
    >
      Explore
    </Link>
    <Link
      to="/destinations"
      className="text-base font-semibold tracking-wide hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200"
    >
      Destinations
    </Link>
    <Link
      to="/offers"
      className="text-base font-semibold tracking-wide hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200"
    >
      Offers
    </Link>
    <Link
      to="/find-travel-mate"
      className="text-base font-semibold tracking-wide hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200"
    >
      Find Travel Mate
    </Link>
  </>
);
 main
export default Navbar;
