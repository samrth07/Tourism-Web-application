import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import TravelPlan from "./ui/TravelPlan";
import Planmember from "./FriendsPage/Planmember";
import LoadingEffect from "./ui/LoadingEffect";

const FindTravelmate = () => {
  const token = localStorage.getItem("token");

  const [travelDate, setTravelDate] = useState("");
  const [destination, setDestination] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [allPlans, setAllPlans] = useState([]);
  const [plan, setPlan] = useState([]);
  const [memberPage, setmemberPage] = useState(false);
  const [members, setMemberData] = useState([]);
  const [isPlan, setCurPlan] = useState(true);

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      toast.success("Login is required.");
      navigate("/signin");
    }
  }, [user, navigate, loading]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchUser() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/plans`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        toast.success("User data fetched successfully!");
        setPlan(response.data.notJoinedPlans);
        setAllPlans(response.data.notJoinedPlans);
        setCurPlan(false);
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
        !destination ||
        p.destination.toLowerCase() === destination.toLowerCase();

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
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/plans/${planId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response) toast.success("Request of joining set successfully");
    else alert("somwthing went wrong !!!!");
  };

  const OpenMemberPage = (members) => {
    setmemberPage(true);
    setMemberData(members);
  };

  const sendRequest = async (recieverId) => {
    const addFriend = await axios.post(
      `${import.meta.env.VITE_API_URL}/friend/${recieverId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (addFriend) {
      toast.success("Request send succuessFull !!!");
    } else {
      toast.success("Something went wrong!!!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-stone-900">
        Checking authentication...
      </div>
    );
  }

  if (isPlan) {
    return (
        <LoadingEffect/>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-6 py-12 bg-white text-stone-900 font-sans">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
          Discover Your Next{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
            Adventure Partner
          </span>
        </h1>
        <p className="mt-6 text-lg max-w-xl mx-auto text-stone-700 leading-relaxed">
          Connect with like-minded travelers, share incredible experiences, and
          create memories that last a lifetime.
        </p>
      </div>

      <div className="text-xl font-semibold text-stone-900 mb-6 text-center">
        Filters
      </div>

      <div className="bg-white border border-orange-100 shadow-lg p-8 rounded-3xl max-w-5xl mx-auto mb-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <label className="block text-sm font-semibold mb-3 text-stone-900">
              Destination
            </label>
            <input
              type="text"
              className="w-full border border-orange-200 h-12 p-4 rounded-xl text-stone-900 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-stone-500"
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter Destination"
              value={destination}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3 text-stone-900">
              Trip Duration
            </label>
            <select
              className="w-full h-12 p-2 rounded-xl bg-orange-50 border border-orange-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            <label className="block text-sm font-semibold mb-3 text-stone-900">
              Group Size
            </label>
            <select
              className="w-full h-12 p-2 rounded-xl bg-orange-50 border border-orange-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
            <label className="block text-sm font-semibold mb-3 text-stone-900">
              Travel Date
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full h-12 p-4 rounded-xl bg-orange-50 border border-orange-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end gap-6 mt-8">
          <button
            className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
          <button
            className="px-8 py-3 rounded-xl bg-lime-950 text-white font-semibold hover:bg-lime-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            onClick={handleReset}
          >
            Reset All
          </button>
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plan.length > 0 ? (
            plan.map((plan, idx) => (
              <TravelPlan
                key={idx}
                plan={plan}
                JoinPlan={HandleJoinPlan}
                msg={"Join Plan"}
                OpenMemberPage={OpenMemberPage}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-stone-600 text-lg font-medium py-16">
              No plans found matching your criteria
            </div>
          )}
        </div>
      </div>

      {memberPage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setmemberPage(false)}
        >
          <Planmember members={members} sendRequest={sendRequest} />
        </div>
      )}
    </div>
  );
};

export default FindTravelmate;
