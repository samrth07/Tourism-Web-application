import client from "../index.js";

export const addMessage = async (roomId, userId,content) => {
  return await client.message.create({
    data: {
      roomId,
      senderId: userId,
      content,
    },
  });
};

export const deleteMessage = async (messageId) => {
  return await client.message.delete({
    where: { id: messageId },
  });
};

export const editMessage = async (messageId, updatedContent) => {
  return await client.message.update({
    where: { id: messageId },
    data: {
      content: updatedContent,
    },
  });
};

export const getMessage = async(messageId) => {
  return await client.message.findUnique({
    where: {
      id: messageId
    }
  })
}

export const clearRoomMessages = async (roomId) => {

  const existingMessages = await client.message.findMany({
    where: { roomId },
  });

  if (existingMessages.length === 0) {
    return null;
  }

  return await client.message.delete({
    where: { roomId },
  });
};

export const getRoomMessages = async (roomId) => {
  return await client.message.findMany({
    where: { roomId },
    take: 100,
    orderBy: { createdAt: "desc" },
  });
};