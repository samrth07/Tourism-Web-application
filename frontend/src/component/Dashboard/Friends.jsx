import React from "react";
import TravelMateCard from "../TravelMateCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Friends = () => {
  const token = localStorage.getItem("token");

  const [AcceptedFrd, setAcceptedFrdData] = useState([]);
  const [pendingFrd, setPendingFrdData] = useState([]);

  const getAllfriends = async () => {
    const response = await axios.get("http://localhost:3000/friend", {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data.friends.acceptedFriends);
    setAcceptedFrdData(response.data.friends.acceptedFriends);
    setPendingFrdData(response.data.friends.pendingRequests);
  };

  const handelFrdrequest = async () => {
      
  }

  useEffect(() => {
    getAllfriends();
  }, []);

  return (
    <div className="">
      <div className="text-3xl text-amber-50 ">My friends </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
  
        {AcceptedFrd.length > 0 ? (

        AcceptedFrd.map( (user , ind) => (
          <TravelMateCard key={ind} user={user} message={"friends"}/>
        ))
        
        ) : (
        
        <div className="mb-7"> Empty data</div>)
        }
        </div>

      <div className="text-3xl text-amber-50 m-2.5">Pending Request</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6 mb-7">
  
        {pendingFrd.length > 0 ? (

        pendingFrd.map( (user , ind) => (
          <TravelMateCard key={ind} user={user}  message={"Accept"} handelFrdrequest={handelFrdrequest}/>
        ))
        
        ) : (
        
        <div className="mb-7"> Empty data</div>)
        }
        </div>
    </div>
  );
};

export default Friends;
