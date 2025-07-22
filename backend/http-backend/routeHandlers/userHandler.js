import { getCreatedRoomsByUserId } from "../../../db/prisma/services/roomService.js";
import { CreateUserSchema } from "../utils/zodValidation.js";
import { hashPassword, verifyPassword } from '../utils/bcrypt.js';
import { generateToken } from '../utils/jwt.js'
import { createAddress, createUser, getUser, getUserByEmail , getMyinformation} from "../../../db/prisma/services/userService.js";

export const signup = async(req, res) => {

    try {
       console.log(req.body.email);
        const result =  CreateUserSchema.safeParse(req.body);
        
        
        if(!result.success) {
            res.status(403).json ({
                message: result.error.message
            })
            return;
        }
       
        const email = req.body.email;
        const password = req.body.password;
        const name    =  req.body.name
        const city = req.body.city
        const profileImage = req.body.profileImage;
        const country = req.body.country
        const pincode = req.body.pincode

        const hashedPassword = await hashPassword(password);

        let user = await createUser(email, hashedPassword , name , profileImage);
        if(!user) res.json({msg : "no user is created "});

        console.log("user is +" + user.id);

        const userID = user.id;

        const addEntry = await createAddress( city , country , pincode , userID);

          if(!user){
            res.json({
              msg : "Something went wrong"
            })
          }
        console.log(user);
        res.json({
            message: "user created succesfully!",
            id: user.id
        })
    }
    catch(e) {
      console.log(e);

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
        console.log(email + password)
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
        const userInfo = await getMyinformation( user.id )

        res.json({
            token: token,
            user : userInfo
        })
    } 
    catch(e) {
      console.log(e);
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

export const getUsers = async(req , res) => {

      try{
        const userId = req.id;

         const data = await getUser( userId );

         if(data){
            res.json({
              res : data
            })
         }else{
            res.json({
              res : "Unble fetch users"
            })
         }

      }catch(e){
          res.json({
            msg : e
          })
      }
}