import React from 'react'
import TravelPlan from '../ui/TravelPlan'
import { toast } from 'react-toastify';
import { useState , useEffect} from 'react';
import axios from 'axios';

const CurrentPlan = () => {
  
  const [ plan , setPlan] = useState([])

  useEffect(() => {
  let token = localStorage.getItem("token");
  
  async function fetchUser() {
    try {
      const response = await axios.get("http://localhost:3000/plans", {
        headers: {
          authorization: token,
        },
      });
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

  return (
    <div>
             <div className="px-6 py-10 bg-gray-900 min-h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plan.length > 0 ? (
            plan.map((plan, idx) => <TravelPlan key={idx} plan={plan} msg={"Leave Plan"}/>)
          ) : (
            <div className="col-span-full text-center text-white text-lg font-medium">
              No plan found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrentPlan
     