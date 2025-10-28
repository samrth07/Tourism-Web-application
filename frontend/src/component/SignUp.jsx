import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCalendar } from "react-icons/fa";
import axios from 'axios'


const SignUp = () => {

  console.log(import.meta.env.VITE_API_URL);

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: "",
    mob_num: "",
    city: "",
    country: "",
    pincode: "",  
  });

  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    console.log(formData);

        const responce =   await axios.post(`${import.meta.env.VITE_API_URL}/user/signup` , formData);
    if(responce){
      console.log(responce);
      alert("Signup successfully")
    }
    else{
        alert("somthing went wrong")
    }
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00bf8f] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-white bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2">Create Your Account</h2>
        <p className="text-center text-gray-200 mb-8">
          Join <span className="text-lime-300 font-bold">Trekker</span> to plan your next big trip!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSignUpClick}>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-300" />
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
              required
              onChange={HandleOnchange}
              value={formData.username}
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={HandleOnchange}
              value={formData.email}
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-gray-300" />
            <input
              type="tel"
              name="mob_num"
              placeholder="Phone Number"
              maxLength={10}
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              onChange={HandleOnchange}
              value={formData.mob_num}
            />
          </div>

          <div className="relative">
            <FaCalendar className="absolute top-3 left-3 text-gray-300" />
            <input
              type="date"
              name="dob"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
              onChange={HandleOnchange}
              value={formData.dob}
            />
          </div>

          <div>
            <input
              type="text"
              name="city"
              list="cities"
              placeholder="City"
              className="w-full pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={HandleOnchange}
              value={formData.city}
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
              name="country"
              list="countries"
              placeholder="Country"
              className="w-full pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={HandleOnchange}
              value={formData.country}
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
            name="pincode"
            placeholder="Postal Code"
            className="col-span-1 md:col-span-2 pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
            onChange={HandleOnchange}
            value={formData.pincode}
          />

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-300" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
              onChange={HandleOnchange}
              value={formData.password}
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
              name="emergencyContact"
              placeholder="Emergency Contact Number"
              maxLength={10}
              className="w-full pl-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              onChange={HandleOnchange}
              value={formData.emergencyContact}
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
