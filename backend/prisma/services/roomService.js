import client from "../index.js";

export const createPlan = async (
  destination,
  travelDate,
  timeSlot,
  userId,
  minAge,
  maxAge,
  grpSize,
  decp,
  Categories,
  Duration,
  Difficulty,
  image
) => {
  return await client.travelPlan.create({
    data: {
      destination,
      travelDate,
      timeSlot,
      createdById: userId,
      minAge,
      maxAge,
      grpSize,
      decp,
      Categories,
      Duration,
      Difficulty,
      image
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


export const leavePlan = async (planId ,userId) => {
  return await client.travelPlanMembers.delete({
    where: { 
      memberId_travelPlanId : {
        memberId : userId,
        travelPlanId : planId
      }
     },
  });
};

export const getPlan = async (planId) => {
  return await client.travelPlan.findUnique({
    where: { id: planId },
    include: {
      members: true, // Get all users in the room
      user: true, // Get the admin details
    },
  });
};


export const getRoomByRoomId = async (roomId) => {
  return await client.travelPlan.findUnique({
    where: { id: roomId },
    include: { users: true, userId: true },
  });
};

export const addMemberTotravelPlan = async (planId, user) => {
  return await client.travelPlanMembers.create({
    data: {
      memberId: user,
      travelPlanId: planId,
    },
  });
};

export const getMemebers = async (planId) => {
  return await client.travelPlanMembers.findMany({
    where: {
      travelPlanId: planId,
    },
  });
};

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
                  recieverId: viewerId,
                },
                select: { id: true, isAccepted: true },
              },
              reciever: {
                where: {
                  senderID: viewerId,
                },
                select: { id: true, isAccepted: true },
              },
            },
          },
        },
      },
    },
  });
};
