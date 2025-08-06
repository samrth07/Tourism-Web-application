import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import TravelPlan from "./ui/TravelPlan";

const FindTravelmate = () => {

  const token = localStorage.getItem('token')

  const [travelDate, setTravelDate] = useState("");
  const [destination, setDestination] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [allPlans, setAllPlans] = useState([]);
  const [plan, setPlan] = useState([]);

  const { user  , loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if ( !loading &&  !user ) {
      toast.success("Login is required.");
      navigate("/signin");
    }
  }, [user, navigate , loading]);


useEffect(() => {
  let token = localStorage.getItem("token");

  async function fetchUser() {
    try {
      const response = await axios.get("http://localhost:3000/plans", {
        headers: {
          authorization: token,
        },
      });
      toast.success("User data fetched successfully!");
      setPlan(response.data.notJoinedPlans);
      setAllPlans(response.data.notJoinedPlans);
    } catch (err) {
      console.error(
        "Failed to fetch users:",
        err.response?.data || err.message
      );
    }
  }

  if (user) {
    fetchUser();
  }
}, [user]);

  const handleApplyFilters = () => {
  const filtered = allPlans.filter((p) => {
    const destinationMatch =
      !destination || p.destination.toLowerCase() === destination.toLowerCase();

    const dateMatch =
      !travelDate ||
      new Date(p.travelDate).toISOString().split("T")[0] === travelDate;
    return destinationMatch && dateMatch;
  });

  setPlan(filtered);
};


const handleReset = () => {
  setDestination("");
  setTravelDate("");
  setPlan(allPlans);
};


const HandleJoinPlan = async (planId) => {

  const response = await axios.post(`http://localhost:3000/plans/join/${planId}` , {} , {
    headers : {
      authorization : token
    }
  });

  if(response) toast.success("Request of joining set successfully");
  else alert("somwthing went wrong !!!!");
}


if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Checking authentication...
    </div>
  );
}



  return (
    <div className="min-h-screen pt-32 px-6 py-12 bg-gradient-to-br from-[#000814] via-[#003049] to-[#001d3d] text-white font-sans">
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
        {/* <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 items-center">
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
        </div> */}
      </div>

      <div className="text-xl font-semibold text-white mb-4 text-center">
        Filters
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-5xl mx-auto mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">
              Destination
            </label>
         
             <input type="text" className=" border-1 h-9 mt-2 p-3.5 rounded-2xl text-center text-white"
           onChange={e => {setDestination(e.target.value)}}
           placeholder="Enter Destination"/>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-white">
              Trip Duration
            </label>
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
            <label className="block text-sm font-semibold mb-2 text-white">
              Group Size
            </label>
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
            <label className="block text-sm font-semibold mb-2 text-white">
              Travel Date
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/20 text-white"
            />
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

      <div className="px-6 py-10 bg-gray-900 min-h-screen mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plan.length > 0 ? (
            plan.map((plan, idx) => <TravelPlan key={idx} plan={plan} JoinPlan={HandleJoinPlan} msg={"Join Plan"}/>)
          ) : (
            <div className="col-span-full text-center text-white text-lg font-medium">
              No plan found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindTravelmate;
