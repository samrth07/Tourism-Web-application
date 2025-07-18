import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import TravelMateCard from "./TravelMateCard";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const travelMates = [
  {
    name: "Sarah Chen",
    age: 28,
    location: "San Francisco, CA",
    destination: "Tokyo",
    travelStyle: "Adventure",
    duration: "1 Month",
    groupSize: "small",
    experience: "first-timer",
    bio: "Excited to explore Tokyo and find like-minded travel buddies."
  },
  {
    name: "David Park",
    age: 35,
    location: "Seoul, South Korea",
    destination: "Bali",
    travelStyle: "Relaxation",
    duration: "1 Week",
    groupSize: "medium",
    experience: "experienced",
    bio: "Seasoned traveler looking to unwind in Bali."
  },
  {
    name: "Alex Thompson",
    age: 26,
    location: "New York, USA",
    destination: "Iceland",
    travelStyle: "Adventure",
    duration: "Weekend",
    groupSize: "solo",
    experience: "first-timer",
    bio: "Ready for my first solo trip into the wild beauty of Iceland."
  },
  {
    name: "Priya Sharma",
    age: 32,
    location: "Mumbai, India",
    destination: "Tokyo",
    travelStyle: "Cultural",
    duration: "1 Week",
    groupSize: "medium",
    experience: "experienced",
    bio: "History buff looking to explore Tokyo’s ancient and modern culture."
  },
  {
    name: "Liam Nguyen",
    age: 30,
    location: "Hanoi, Vietnam",
    destination: "Nepal",
    travelStyle: "Adventure",
    duration: "1 Month",
    groupSize: "small",
    experience: "experienced",
    bio: "Mountaineering enthusiast heading for the Himalayas."
  },
  {
    name: "Emily Clark",
    age: 27,
    location: "London, UK",
    destination: "Patagonia",
    travelStyle: "Adventure",
    duration: "1 Month",
    groupSize: "medium",
    experience: "first-timer",
    bio: "Seeking thrill and peace in Patagonia’s vastness."
  }
];

const FindTravelmate = () => {
  const [destination, setDestination] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [filteredMates, setFilteredMates] = useState(travelMates);
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
    const filtered = travelMates.filter((mate) => {
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
    setFilteredMates(travelMates);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

console.log("Token being sent:", token);


    async function fetchUser() {
      try {
        const response = await axios.get("http://localhost:3000/user/getUsers" , {
          headers : {
            authorization : token
          }
        });
        toast.success("User data fetched successfully!");
        console.log("Backend response:", response.data.res);
        setUsers(response.data.res);
      } catch (err) {
        console.error("Failed to fetch users:", err.response?.data || err.message);
      }
    }

    if (user) {
      fetchUser();
    }
  }, [user]);


  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#000814] via-[#003049] to-[#001d3d] text-white font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Discover Your Next{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Adventure Partner
          </span>
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Connect with like-minded travelers, share incredible experiences, and
          create memories that last a lifetime.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 items-center">
          <input
            type="text"
            placeholder="Where do you want to go? (e.g., Tokyo, Bali...)"
            className="px-5 py-3 w-full max-w-md text-white rounded-full bg-black/30 shadow focus:outline-none focus:ring-4 ring-green-400 placeholder:text-gray-300"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button
            className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            onClick={handleApplyFilters}
          >
            <FaSearch className="inline mr-2" /> Find Matches
          </button>
        </div>
      </div>

      <div className="text-xl font-semibold text-white mb-4 text-center">Filters</div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-5xl mx-auto mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Destination</label>
            <select
              className="w-full p-3 rounded-xl bg-white/20 text-black"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Any Destination</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Bali">Bali</option>
              <option value="Iceland">Iceland</option>
              <option value="Nepal">Nepal</option>
              <option value="Patagonia">Patagonia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Trip Duration</label>
            <select
              className="w-full p-3 rounded-xl bg-white/20 text-white"
              value={tripDuration}
              onChange={(e) => setTripDuration(e.target.value)}
            >
              <option value="">Any Duration</option>
              <option value="Weekend">Weekend</option>
              <option value="1 Week">1 Week</option>
              <option value="1 Month">1 Month</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Group Size</label>
            <select
              className="w-full p-3 rounded-xl bg-white/20 text-white"
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
            >
              <option value="">Any Size</option>
              <option value="solo">Solo</option>
              <option value="small">2-4 people</option>
              <option value="medium">5-8 people</option>
              <option value="large">9+ people</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Age Group</label>
            <select
              className="w-full p-3 rounded-xl bg-white/20 text-white"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="">Any Age</option>
              <option value="18-25">18 - 25</option>
              <option value="26-35">26 - 35</option>
              <option value="36-45">36 - 45</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:scale-105 transition"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
          <button
            className="px-6 py-2 rounded-xl bg-white/20 text-white font-semibold hover:scale-105 transition"
            onClick={handleReset}
          >
            Reset All
          </button>
        </div>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {users.length > 0 ? (
                users.map((user, idx) => (
                  <TravelMateCard key={idx} user={user} />
                ))
              ) : (
                <div className="col-span-full text-center text-white text-lg font-medium">
                  No users found.
                </div>
              )}
          </div>

    </div>
  );
};

export default FindTravelmate;
