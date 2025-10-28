import client from "../index.js";

export const createPlan = async ( destination, travelDate, timeSlot ,userId) => {
  return await client.travelPlan.create({
    data: {
      destination,
      travelDate,
      timeSlot,
      createdById : userId
    },
  });
};

export const getPlanById = async (planId) => {
  return await client.travelPlan.findFirst({
    where: {
      id: planId,
    },
  });
};

export const getRoomsByUserId = async (userId) => {
  console.log(userId);
  return await client.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      createdPlans: {
        select: {
          id: true,
          roomname: true,
          createdAt: true,
          members: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      travelPlans: {
        select: {
          id: true,
          roomname: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true, // the admin of the plan
            },
          },
        },
      },
    },
  });
};
// don't understand --samarth
export const getCreatedRoomsByUserId = async (userId) => {
  return await client.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      createdPlans: {
        select: {
          id: true,
          roomName: true,
          createdAt: true,
          members: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
};

export const deleteRoom = async (roomId) => {
  return await client.travelPlan.delete({
    where: { id: roomId },
  });
};

export const removeUserFromRoom = async (roomId, userId) => {
  return await client.travelPlan.update({
    where: { id: roomId },
    data: {
      members: {
        disconnect: { id: userId },
      },
    },
  });
};

export const getPlan = async ( planId ) => {
  return await client.travelPlan.findUnique({
    where: { id: planId },
    include: {
      members: true, // Get all users in the room
      user: true, // Get the admin details
    },
  });
};

export const getRoomIfExists = async (roomId) => {
  return await client.travelPlan.findUnique({
    where: { 
      id: roomId 
    },
  });
};

export const getRoomByRoomId = async (roomId) => {
  return await client.travelPlan.findUnique({
    where: { id: roomId },
    include: { users: true, userId: true },
  });
};



export const addMemberTotravelPlan = async ( planId , user) => {
  return await client.travelPlanMembers.create({
      data : {
        memberId : user,
        travelPlanId : planId
      }
  })
}


export const getMemebers = async (planId) => {

    return await client.travelPlanMembers.findMany({
      where : {
        travelPlanId : planId
      },

    })
}

export const getAllplans = async (viewerId) => {
  return await client.travelPlan.findMany({
    include: {
      user: true, // creator of the plan
      members: {
        select: {
          user: {
            select: {
              id: true,
              name: true,
              profileImage: true,
              Address: true,

              // check friendship with viewer
              sender: {
                where: {
                  recieverId: viewerId
                },
                select: { id: true , isAccepted: true},
              },
              reciever: {
                where: {
                  senderID: viewerId
                },
                select: { id: true , isAccepted : true},
              },
            },
          },
        },
      },
    },
  });
};
