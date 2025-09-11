import client from "../index.js";

export const sendRequest = async (senderId, recieverId ) => {
  return client.friend.create({
    data: {
      senderID: senderId,
      recieverId: recieverId,
    },
  });
};

export const acceptRequest = async (senderID, recieverId , ) => {
  return client.friend.update({
    where: {
      senderID_recieverId : {
         senderID,
        recieverId,
      }
    },
    data: {
      isAccepted: true,
    },
  });
};

export const getAllFriends = async (userId) => {
  
  const allFriendRelations = await client.friend.findMany({
    where: {
      isAccepted: true,
      OR: [
        { senderID: userId },
        { recieverId: userId }
      ]
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
          createdAt: true,
          Address: true
        }
      },
      recievedBy: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
          createdAt: true,
          Address: true
        }
      }
    }
  });

  // Get the other user (not the current user) from each accepted friendship
  const accepted = allFriendRelations.map(f => {
    return f.senderID === userId ? f.recievedBy : f.sender;
  });

  // Remove duplicates if any
  const uniqueAccepted = Array.from(
    new Map(accepted.map(user => [user.id, user])).values()
  );

  // Pending received
  const pending = await client.friend.findMany({
    where: {
      recieverId: userId,
      isAccepted: false
    },
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
          createdAt: true,
          Address: true
        }
      }
    }
  });

  const pendingRequests = pending.map(r => r.sender);

  // Pending sent
  const sentNotAccepted = await client.friend.findMany({
    where: {
      senderID: userId,
      isAccepted: false
    },
    include: {
      recievedBy: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
          createdAt: true,
          Address: true
        }
      }
    }
  });

  const notYetaccepted = sentNotAccepted.map(r => r.recievedBy);

  return {
    acceptedFriends: uniqueAccepted,
    pendingRequests,
    notYetaccepted
  };
};


