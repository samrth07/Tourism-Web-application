import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export const generateToken = async(id) => {
    const token = await jwt.sign({
            id
        },
        process.env.JWT_SECRET,{
        expiresIn: '24h' 
    });

    return token;
}

export const verifyToken = async(token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

