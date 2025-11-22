import * as chatServises from "../../prisma/services/chatServices.js";
import prisma from "../../prisma/index.js";

export const getMessage = async (req, res) => {
  try {
    const conversationId = parseInt(req.params.conversationId);
    if (!conversationId)
      return res.status(401).json({ msg: "NO conversin id exists" });

    const message = await chatServises.getMessage(conversationId);
    res.status(200).json({
      message,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export const seenMessage = async (req, res) => {
  const userId = req.id; // from middleware
  const conversationId = parseInt(req.params.conversationId);

  try {
    // Find all messages that the user has NOT seen
    const unseenMessages = await prisma.message.findMany({
      where: {
        conversationId,
        seenBy: {
          none: {
            userId: userId,
          },
        },
        senderId: { not: userId }, // Do NOT mark user’s own message as seen
      },
      select: { id: true },
    });

    if (unseenMessages.length === 0) {
      return res.status(200).json({ updated: 0 });
    }

    // Create seen records
    await prisma.messageSeen.createMany({
      data: unseenMessages.map((msg) => ({
        messageId: msg.id,
        userId: userId,
      })),
      skipDuplicates: true,
    });

    res.status(200).json({
      updated: unseenMessages.length,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};
