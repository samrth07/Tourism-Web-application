import express from 'express';
import {getMyRooms, getUsers, signin, signup ,updateProfile } from "../routeHandlers/userHandler.js"
import { middleware } from '../utils/middleware.js';

function parseData(req, res , next ) {

  if (req.body.data) {
    try {
      console.log("Body befoere parse" + req.body.data)
      const parse = JSON.parse(req.body.data);
      req.body = parse;
    } catch (e) {
      return res.status(400).json({ message: 'Invalid JSON in projectData field' });
    }
  }
  next();
}

export default function userRouter(upload , supabase){
    
const router  = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.use(middleware);

router.patch('/' , upload.single('image') , parseData , updateProfile)
router.get('/getUsers' , getUsers);
router.get('/rooms', getMyRooms);

return router;
}

