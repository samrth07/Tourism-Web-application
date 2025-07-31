import {  clearRoomMessages, getRoomMessages } from "../../prisma/services/messageService.js";
import { getRoomByRoomId } from "../../prisma/services/roomService.js";

export const getMessages = async (req, res) => {

    try {
        const roomId = req.params.roomId;
        const messages = getRoomMessages(roomId)

        res.json({
            messages: messages
        })
    }
    catch(e) {
        res.status(500).json ({
            message: "error fetching messages",
            error: e
        })
    }
}

export const clearRoom = async(req, res) => {
    const roomId = req.body.roomId;
    const userId = req.id;

    const admin = getRoomByRoomId(roomId);
    if(admin.userId !== userId) {
        res.status(403).json ({
            success: false,
            message: "Only admin can delete messages"
        })
    } 

    clearRoomMessages(roomId);
    res.json({
        success :true,
        message: "All messages cleared succesfully"
    })
}
