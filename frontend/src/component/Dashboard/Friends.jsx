import React from "react";
import FriendCard from "../FriendCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Friends = () => {
  const token = localStorage.getItem("token");

  const [AcceptedFrd, setAcceptedFrdData] = useState([]);
  const [pendingFrd, setPendingFrdData] = useState([]);
  const [reqNotyetaccepted, setReqNotyetaccepted] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllfriends = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/friend`, {
      headers: {
        authorization: token,
      },
    });
    setAcceptedFrdData(response.data.friends.acceptedFriends);
    setPendingFrdData(response.data.friends.pendingRequests);
    setReqNotyetaccepted(response.data.friends.notYetaccepted);
    setLoading(false);
  };

  const handelFrdrequest = async (senderId) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/friend/${senderId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response) {
      alert("you are friend now !!!");
    }
  };

  useEffect(() => {
    getAllfriends();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-40 ">
          <div className="text-2xl text-amber-50">Loading....</div>
        <ClipLoader color="grey" size={48} />
      </div>
    );
  }

  return (
    <div className="">
      <div className="text-3xl text-amber-50 ">My friends </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
        {AcceptedFrd.length > 0 ? (
          AcceptedFrd.map((user, ind) => (
            <FriendCard key={ind} user={user} message={"msg"} />
          ))
        ) : (
          <div className="mb-7">
            {" "}
            No Friends Yet you make !!! Make friends now{" "}
          </div>
        )}
      </div>

      <div className="text-3xl text-amber-50 m-2.5">Pending Request</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6 mb-7">
        {pendingFrd.length > 0 ? (
          pendingFrd.map((user, ind) => (
            <FriendCard
              key={ind}
              user={user}
              message={"Accept"}
              handelrequest={handelFrdrequest}
            />
          ))
        ) : (
          <> </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6 mb-7">
        {reqNotyetaccepted.length > 0 ? (
          reqNotyetaccepted.map((user, ind) => (
            <FriendCard key={ind} user={user} message={"Requested"} />
          ))
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default Friends;
