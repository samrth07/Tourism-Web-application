import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const middleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        let verification = jwt.verify(token, process.env.JWT_SECRET);
        
        if(verification) {
            req.id = verification.id;   
            next();
        }
        else {
            res.status(403).json({
                message: "Unauthorized access"
            })
        }
    }
catch(e) {
    res.status(500).json({
        message: "Something went wrong"
    })
}
}