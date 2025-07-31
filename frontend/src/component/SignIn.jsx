import React, { useState } from "react";
// import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom"; 
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../context/Authcontext";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";


const SignIn = () => { 


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in both email and password.");
      return;
    }

    setIsLoading(true);
    try {
      const responce = await axios.post("http://localhost:3000/user/signin" , formData);
      if(responce){
        console.log(responce);
        login(responce.data);
        toast.success("Logging successful !!!");
        navigate("/");
      }else{
        alert("Somthing went wrong");
      }
    } catch (error) {
      alert("Somthing went wrong");
    }
    setIsLoading(false);
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00bf8f] px-4">
      <div className="bg-white/10 backdrop-blur-lg text-white shadow-2xl rounded-2xl w-full max-w-lg p-8 md:p-10 border border-white/20">
        <h2 className="text-4xl font-bold text-center mb-3">✈️ Welcome Back!</h2>
        <p className="text-center text-sm text-gray-200 mb-6">
          Sign in to plan your next adventure with Trekker.
        </p>

        {isLoading ? (
           <div className="flex justify-center items-center h-40">
    <ClipLoader color="grey" size={48} />
  </div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-300" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-lime-300 transition"
                  required
                />
              </div>

              <div className="mb-4 relative">
                <FaLock className="absolute left-3 top-3 text-gray-300" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-lime-300 transition"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-lime-300 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-3 rounded-md transition-all duration-300 shadow-md"
              >
                Sign In
              </button>
            </form>

            <div className="flex flex-col gap-3 mb-6 mt-6">
              <button className="flex items-center justify-center gap-3 text-white font-medium py-2 transition hover:text-red-400">
                <FaGoogle className="text-red-500" />
                <span className="border-b border-transparent hover:border-red-400">
                  Sign in with Google
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 text-white font-medium py-2 transition hover:text-blue-400">
                <FaFacebookF className="text-blue-500" />
                <span className="border-b border-transparent hover:border-blue-400">
                  Sign in with Facebook
                </span>
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-200">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-lime-300 hover:underline font-medium"
              >
                Sign up here
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
