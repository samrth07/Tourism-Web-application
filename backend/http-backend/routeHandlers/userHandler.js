import { getCreatedRoomsByUserId } from "../../../db/prisma/services/roomService.js";
import { CreateUserSchema } from "../utils/zodValidation.js";
import { hashPassword, verifyPassword } from '../utils/bcrypt.js';
import { generateToken } from '../utils/jwt.js'
import { createUser, getUserByEmail } from "../../../db/prisma/services/userService.js";

export const signup = async(req, res) => {

    try {
        const result = await CreateUserSchema.safeParse(req.body);

        if(!result.success) {
            res.status(403).json ({
                message: res.error.message
            })
            return;
        }

        const email = req.body.email;
        const password = req.body.password;

        const hashedPassword = await hashPassword(password);

        let user = createUser(email, hashedPassword);

        res.json({
            message: "user created succesfully!",
            id: user.id
        })
    }
    catch(e) {
        res.status(500).json ({
            message: "Error signin up!",
            error: e
        })
    }
}


export const signin = async(req, res) => {

    try {
        const email = req.body.email;
        const password = req.body.password;

        let user = await getUserByEmail(email);

        if(!user) {
            res.status(404).json({
                message: "User does not exist"
            })
            return;
        }

        const validity = await verifyPassword(password, user.password);

        if(!validity) {
            res.status(404).json({
                message: "Incorrect credentials"
            })
            return;
        }

        const token = await generateToken(user.id);

        res.json({
            token: token
        })
    } 
    catch(e) {
        res.status(500).json ({
            message: "Error signing in",
            error: e
        })
    }
}

export const getMyRooms = async (req, res) => {
  try {

    const userId = req.id;
    const user = await getCreatedRoomsByUserId(userId);
    if (!user) {
      res.status(404).json({
        message: "User not found.",
      });
      return;
    }

    if (!user.createdPlans?.length) {
      res.json({
        message: "No rooms available.",
        data: {
          userName: user.name,
          rooms: [],
        },
      });
      return;
    }
    const formattedRooms = user.createdPlans.map((room) => ({
      roomId: room.id,
      roomName: room.roomName,
      createdAt: room.createdAt, // Sending raw timestamp
      participants: room.members.map((participant) => participant.name), // Correct relation key
      noOfParticipants: room.members.length, // Correct relation key
    }));
    res.json({
      message: "Admin rooms fetched successfully.",
      data: {
        userName: user.name,
        rooms: formattedRooms,
      },
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
    });
    return;
  }
};

export const getPlans = (req, res) => {

}