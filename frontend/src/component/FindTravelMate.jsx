import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import TravelMateCard from "./TravelMateCard";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const FindTravelmate = () => {
  const [destination, setDestination] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [filteredMates, setFilteredMates] = useState([]);
  const [users, setUsers] = useState([]);

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("Login is required.");
      navigate("/signin");
    }
  }, [user, navigate]);

  const handleApplyFilters = () => {
    const filtered = users.filter((mate) => {
      const inAgeGroup =
        ageGroup === "" ||
        (ageGroup === "18-25" && mate.age >= 18 && mate.age <= 25) ||
        (ageGroup === "26-35" && mate.age >= 26 && mate.age <= 35) ||
        (ageGroup === "36-45" && mate.age >= 36 && mate.age <= 45);

      return (
        (!destination || mate.destination === destination) &&
        (!tripDuration || mate.duration === tripDuration) &&
        (!groupSize || mate.groupSize === groupSize) &&
        inAgeGroup
      );
    });

    setFilteredMates(filtered);
  };

  const handleReset = () => {
    setDestination("");
    setTripDuration("");
    setGroupSize("");
    setAgeGroup("");
    setFilteredMates(users);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function fetchUser() {
      try {
        const response = await axios.get("http://localhost:3000/user/getUsers", {
          headers: {
            authorization: token,
          },
        });
 main
=======
        toast.success("User data fetched successfully!");
        console.log("Backend response:", response.data.res);
main
        setUsers(response.data.res);
        setFilteredMates(response.data.res);
      } catch (err) {
        console.error("Failed to fetch users:", err.response?.data || err.message);
      }
    }

    if (user) {
      fetchUser();
    }
  }, [user]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/60 w-full h-full px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Find Your Perfect{" "}
            <span className="text-green-300">Travel Buddy</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto text-gray-300">
            Filter and connect with fellow travelers that match your style and interests.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 items-center">
            <input
              type="text"
              placeholder="Enter destination..."
              className="px-5 py-3 w-full max-w-md rounded-full bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 ring-green-400"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <button
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={handleApplyFilters}
            >
              <FaSearch className="inline mr-2" /> Find
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-black/50 p-6 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <select value={tripDuration} onChange={(e) => setTripDuration(e.target.value)} className="p-3 rounded-xl bg-white/10 text-white">
              <option value="">Trip Duration</option>
              <option value="Weekend">Weekend</option>
              <option value="1 Week">1 Week</option>
              <option value="1 Month">1 Month</option>
            </select>

            <select value={groupSize} onChange={(e) => setGroupSize(e.target.value)} className="p-3 rounded-xl bg-white/10 text-white">
              <option value="">Group Size</option>
              <option value="solo">Solo</option>
              <option value="small">2-4 people</option>
              <option value="medium">5-8 people</option>
              <option value="large">9+ people</option>
            </select>

            <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className="p-3 rounded-xl bg-white/10 text-white">
              <option value="">Age Group</option>
              <option value="18-25">18 - 25</option>
              <option value="26-35">26 - 35</option>
              <option value="36-45">36 - 45</option>
            </select>

            <div className="flex gap-2">
              <button onClick={handleApplyFilters} className="flex-1 bg-green-500 hover:bg-green-600 rounded-xl text-white font-bold px-4 py-2">
                Apply
              </button>
              <button onClick={handleReset} className="flex-1 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold px-4 py-2">
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filteredMates.length > 0 ? filteredMates : []).map((user, idx) => (
              <TravelMateCard key={idx} user={user} />
            ))}
          </div>

          {filteredMates.length === 0 && (
            <div className="text-center text-white text-lg font-medium mt-6">No matching travel mates found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindTravelmate;
