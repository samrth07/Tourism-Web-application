import { CreateRoomSchema } from "../utils/zodValidation.js";
import { getRoomByName,
   createPlan, 
   getPlan,
    getRoomByRoomId,  
    deleteRoom,
    removeUserFromRoom
   } from "../../../db/prisma/services/roomService.js";
import { connectUserWithRoom } from "../../../db/prisma/services/userService.js";


export const createPlan = async (req, res) => {
  try {
    // Validate request body
    const parsedData = CreateRoomSchema.safeParse(req.body);

    if (!parsedData.success) {
      res.status(403).json({
        message: "Invalid Room Name",
      });
      return;
    }
    
    const {destination, travelDate, timeSlot } = parsedData.data;

    const userId = req.id;

    // Create the room
    const user = await createPlan(destination, travelDate, timeSlot ,userId);
    if (!user) {
      res.status(500).json({
        error: "Failed to create the plan. Please try again .",
      });
      return;
    }

    res.status(200).json({
      message: "Plan Created Successfully"
    });
    return;
  }
   catch (error) {
    console.error("Error creating plan:", error);
    res.status(500).json({
      error: "Something went wrong while creating the plan.",
    });
    return;
  }
};

// Joining a Plan

export const joinPlan = async (req, res) => {

  const planId = req.params.planId;

  if ( !planId ) {
    res.status(403).json({
      message: "SomingThing wen wrong",
    });
    return;
  }

  try {
    const plan = await getPlan( planId );

    if ( !plan ) {
      res.status(404).json({
        success: false,
        error: "PLan doesn't exist",
      });
      return;
    }

    // Room logic yet to write 
    // check first the Room name is null or not 
    // If the room name is null then create the room by name of first two user
    // 

    // Check if the user is already a member
    const isAlreadyMember = room.members.some((user) => user.id === userId);

    if (!isAlreadyMember) {
      await connectUserWithRoom(roomId, userId);
    }

    res.json({
      message: "Room joined successfully.",
      roomId,
    });
    return;
  } 
  catch (error) {
    res.status(500).json({
      error: "Failed to join the room.",
    });
    return;
  }
};


export const VerifyUserInRoom = async (req, res) => {
  const userId = req.id;
  const { roomId } = req.body;

  if (!roomId) {
    res
      .status(404)
      .json({ message: "Invalid Room ID" });
    return;
  }

  try {
    const room = await getRoomByRoomId(roomId);

    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    const isUserInRoom = room.users.some((user) => user.id === userId);
    if (!isUserInRoom) {
      res.status(403).json({ message: "Access denied.You're not in this room." });
      return;
    }

    res.json({ 
      message: "User is in the room" 
    });
    return;
  } 
  catch {
    res.status(500).json({ message: "Server error" });
    return;
  }
};

// Leaving a room
export const leaveRoom = async (req, res) => {
  const userId = req.id;
  const { roomId } = req.body;

  if (!roomId) {
    res
      .status(500)
      .json({ success: false, message: "Room ID required" });
    return;
  }

  try {
    const room = await getRoomUsers(roomId);
    if (!room) {
      res
        .status(404)
        .json({ success: false, message: "Room not found." });
      return;
    }

    if (room.userId === userId) {
      await deleteRoom(roomId);
      res
        .status(200)
        .json({ 
          success: true, 
          message: "Room deleted."
         });
      return;
    }

    await removeUserFromRoom(roomId, userId);
    res.json({ 
      success: true,
       message: "Left the room." 
      });
    return;
  } catch(e) {
    res
      .status(500)
      .json({ success: false, error: e });
    return;
  }
};
