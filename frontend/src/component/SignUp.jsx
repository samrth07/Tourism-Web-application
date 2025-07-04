import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCalendar } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate(); 

  const handleSignUpClick = () => {
    alert(" Sign Up button clicked!");
    console.log(" Sign Up form triggered!");

    navigate("/signin"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00bf8f] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-white bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2">Create Your Account</h2>
        <p className="text-center text-gray-200 mb-8">
          Join <span className="text-lime-300 font-bold">Trekker</span> to plan your next big trip!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-300" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-300" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-gray-300" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="relative">
            <FaCalendar className="absolute top-3 left-3 text-gray-300" />
            <input
              type="date"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <input
              type="text"
              list="cities"
              placeholder="City"
              className="w-full pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <datalist id="cities">
              <option value="Mumbai" />
              <option value="Delhi" />
              <option value="Pune" />
              <option value="Bangalore" />
            </datalist>
          </div>

          <div>
            <input
              type="text"
              list="countries"
              placeholder="Country"
              className="w-full pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <datalist id="countries">
              <option value="India" />
              <option value="USA" />
              <option value="UK" />
              <option value="Australia" />
            </datalist>
          </div>

          <input
            type="text"
            placeholder="Postal Code"
            className="col-span-1 md:col-span-2 pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-300" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-300" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <input
              type="tel"
              placeholder="Emergency Contact Number"
              className="w-full pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-200 col-span-1 md:col-span-2">
            <input type="checkbox" required className="accent-blue-500 w-5 h-5" />
            <label>
              I agree to the{" "}
              <span className="text-blue-400 hover:text-blue-600 underline cursor-pointer transition">
                Terms and Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSignUpClick}
            className="col-span-1 md:col-span-2 w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-3 rounded-md transition-all shadow-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200 hover:text-green-300 transition">
          Already have an account?{" "}
          <Link to="/signin" className="underline hover:text-blue-300 transition">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
