import client from "../index.js";

export const sendRequest = async (senderId, recieverId) => {
  return client.friend.create({
    data: {
      senderID: senderId,
      recieverId: recieverId,
    },
  });
};

export const acceptRequest = async (senderID, recieverId) => {
  return client.friend.update({
    where: {
      senderID_recieverId : {
        senderID,
        recieverId,
      },
    },
    data: {
      isAccepted: true,
    },
  });
};

export const getAllFriends = async (userId) => {

  const sentRequests = await client.friend.findMany({
    where: {
      senderID: userId
    },
    include: {
      recievedBy:{
        select : {
          name : true,
          email : true,
          profileImage : true,
          createdAt : true,
          Address : true
        }
      }
    }
  });

  const receivedRequests = await client.friend.findMany({
    where: {
      recieverId: userId
    },
    include: {
      sender:{
        select :{
          name : true,
          email : true,
          profileImage : true,
          createdAt : true,
          Address : true
        }
      }
    }
  });

  // Separate accepted and pending
  const accepted = [
    ...sentRequests.filter(r => r.isAccepted).map(r => r.recievedBy),
    ...receivedRequests.filter(r => r.isAccepted).map(r => r.sender),
  ];

  const pending = [
    ...sentRequests.filter(r => !r.isAccepted).map(r => r.recievedBy),
    ...receivedRequests.filter(r => !r.isAccepted).map(r => r.sender),
  ];

  return {
    acceptedFriends: accepted,
    pendingRequests: pending
  };
};

