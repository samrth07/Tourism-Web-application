import { CreateRoomSchema } from "../utils/zodValidation.js";
import * as Planservices from "../../prisma/services/roomService.js";
import { uploadImage } from "../utils/ImagesUtils.js";
import { supabase } from "../server.js";


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
    let image  = "";
    if( req.file ){
      image = await uploadImage(supabase , req.file , 'TravelPlan');
    }
    
    const {destination, travelDate, timeSlot , minAge , maxAge , grpSize , decp , Categories , Duration , Difficulty} = parsedData.data;

    const userId = req.id;

    // Create the room
    const plan = await Planservices.createPlan(destination, travelDate, timeSlot ,userId , minAge , maxAge , grpSize , decp , Categories , Duration , Difficulty , image);
    if (!plan) {
      res.status(500).json({
        error: "Failed to create the plan. Please try again .",
      });
      return;
    }

    const planId = plan.id;
    const addMember = await Planservices.addMemberTotravelPlan(planId , userId);

    res.status(200).json({
      message: "Plan Created Successfully",
      plan : plan,
      memberInproject : addMember
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
  console.log(planId)

  if ( !planId ) {
    res.status(403).json({
      message: "SomingThing went wrong",
    });
    return;
  }

  try {
    const plan = await Planservices.getPlan( planId );
     

    if ( !plan ) {
      res.status(404).json({
        success: false,
        error: "Plan doesn't exist",
      });
    }
  const user = req.id;
  const addMember = await Planservices.addMemberTotravelPlan(planId , user);  

    res.json({
      message: "Room joined successfully.",
      member: addMember,
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
    const room = await Planservices.getRoomByRoomId(roomId);

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

// Leaving a plan
export const LeavePlan = async (req, res) => {
  const userId = req.id;
  const  planId = req.params.planId;

  if (!planId) {
    res
      .status(500)
      .json({ success: false, message: "Plan Id is required" });
    return;
  }

  try {
    const plan = await Planservices.getPlanById(planId);
    if (!plan) {
      res
        .status(404)
        .json({ success: false, message: "Plan not found." });
      return;
    }

    const leavePlan = await Planservices.leavePlan(planId , userId);
    res.status(200).json({
      msg : `Plan deleted succussfully ${leavePlan}`
    })
  } catch(e) {
    res
      .status(500)
      .json({ success: false, error: e });
    return;
  }
};

export const getMemebers = async(req , res) => {

    try {
    const planId  = req.params.planId;
    if( !planId ){
          res.status(403).json({msg : "PlanId is missing"});
    } 

      const member = await Planservices.getMemebers(planId);

      res.status(200).json({
        member : member
      })
    
    } catch (error) {
      console.log(error)
        res.status(500).json({msg : "Something went wrong !!!"});
    }
}


