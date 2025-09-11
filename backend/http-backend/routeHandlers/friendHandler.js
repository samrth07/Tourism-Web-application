import * as friendService from "../../prisma/services/frinedService.js";
import { getUserById } from "../../prisma/services/userService.js";



export const addFriend = async (req , res) => {
        const reqSender = req.id;
        const reqReciever = req.params.reqRecieverId
        console.log("constrol reach at addfriend !!!");
        console.log(reqSender + " " + reqReciever)

       if( !reqSender || !reqReciever) res.status(400).json({ msg : "somthing is missing !!!"});

       try {
            const sendRequest = await friendService.sendRequest( reqSender , reqReciever );

            if( sendRequest ){
                res.status(200).json({
                    msg : "Request send succussfully"
                })
            }
            
       } catch (error) {

            res.status.json({
                msg : "something is wrong"
            })
        
       }
}

// export const removeFriend = async (req , res) => {

// }

export const acceptRequest = async ( req , res) => {
    console.log("control reach here !!!")
    const sender  = req.params.senderId;
    const reciever = req.id;

    try {
        const acceptRequest = await friendService.acceptRequest(sender , reciever );

        if( acceptRequest ){
            res.status(200).json({
                msg : "request accepted "
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg : "something went wrong"
        })
    }
}


export const getAllfriend = async ( req , res) => {

    const userId = req.id

    const friends = await friendService.getAllFriends(userId);

    res.json({
        friends
    })
}
