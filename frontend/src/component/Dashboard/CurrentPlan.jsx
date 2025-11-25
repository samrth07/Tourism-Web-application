import React from "react";
import TravelPlan from "../ui/TravelPlan";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import Planmember from "../FriendsPage/Planmember";
import LoadingEffect from "../ui/LoadingEffect";

const CurrentPlan = () => {
  const [plan, setPlan] = useState([]);
  const [memberPage, setmemberPage] = useState(false);
  const [members, setMemberData] = useState([]);
  const [loading , setLoading] = useState(true);

  const OpenMemberPage = (members) => {
    setmemberPage(true);
    setMemberData(members);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

    async function fetchUser() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/plans`, {
          headers: {
            authorization: token,
          },
        });
        setLoading(false);
        toast.success("Your current plan!");
        setPlan(response.data.currentPlans);
        
      } catch (err) {
        console.error(
          "Failed to fetch users:",
          err.response?.data || err.message
        );
      }
    }
    fetchUser();
  }, []);

  if( loading ){
    return(
      <LoadingEffect/>
    )
  }

  return (
    <div>
      <div className="px-6 py-5 min-h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plan.length > 0 ? (
            plan.map((plan, idx) => (
              <TravelPlan key={idx} plan={plan} msg={"Leave Plan"} OpenMemberPage={OpenMemberPage}/>
            ))
          ) : (
            <div className="col-span-full text-center text-white text-lg font-medium">
              No plan found
            </div>
          )}
        </div>

        {memberPage && (
          <div
            className="fixed inset-0  backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setmemberPage(false)}
          >
            <Planmember members={members} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentPlan;
