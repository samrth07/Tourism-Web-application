import prisma from "../index.js";

export const addFriend = async (senderId, recieverId) => {
  return await prisma.friend.create({
    data: {
      senderId: senderId,
      receiverId: recieverId,
    },
  });
};

export const acceptReq = async (senderId, recieverId) => {
  await prisma.friend.update({
    where: {
      senderId_receiverId: {
        senderId: senderId,
        receiverId: recieverId,
      },
    },
    data: {
      isAccepted: true,
    },
  });

  const response = await prisma.friendship.createMany({
    data: [
      { userId: senderId, friendId: recieverId },
      { userId: recieverId, friendId: senderId },
    ],
  });

  return response;
};

export const removeFriend = async (senderId, recieverId) => {
  await prisma.friend.deleteMany({
    where: {
      OR: [
        {
          senderId: senderId,
          receiverId: recieverId,
        },
        { senderId: recieverId, receiverId: senderId },
      ],
    },
  });

  await prisma.friendship.deleteMany({
    where: {
      OR: [
        {
          userId: recieverId,
          friendId: senderId,
        },
        {
          userId: senderId,
          friendId: recieverId,
        },
      ],
    },
  });
};

export const getAllFriend = async (userId) => {
  const friend = await prisma.friendship.findMany({
    where: {
      userId: userId,
    },
    select: {
      friend: true,
    },
  });

  const result = [];

  for (const f of friend) {
    const friendId = f.friend.id;

    // 2. Check if conversation already exists (1-to-1 only)
    const conversation = await prisma.conversation.findFirst({
      where: {
        isGroup: false,
        participants: {
          some: { userId },
        },
        AND: {
          participants: {
            some: { userId: friendId },
          },
        },
      },
    });

    if (!conversation) return;

    // 4. Push final result
    result.push({
      conversationId: conversation.id,
      friendInformation: f.friend,
    });
  }

  return result;
};

export const getPendingRequest = async (userID) => {
  return await prisma.friend.findMany({
    where: {
      senderId: userID,
      isAccepted: false,
    },
    select: {
      receiver: true,
    },
  });
};

export const getNotAccepeted = async (userID) => {
  return await prisma.friend.findMany({
    where: {
      receiverId: userID,
      isAccepted: false,
    },
    select: {
      sender: true,
    },
  });
};

export const crateConversionID = async (groupName, isGrp) => {
  return await prisma.conversation.create({
    data: {
      isGroup: isGrp,
      name: groupName,
    },
  });
};

export const conversionParticipant = async (members) => {
  return await prisma.conversationParticipant.createMany({
    data: members,
    skipDuplicates: true,
  });
};

export const existingConversation = async (senderId, receiverId) => {
  return await prisma.conversation.findFirst({
    where: {
      isGroup: false,
      AND: [
        { participants: { some: { userId: senderId } } },
        { participants: { some: { userId: receiverId } } },
      ],
    },
  });
};
