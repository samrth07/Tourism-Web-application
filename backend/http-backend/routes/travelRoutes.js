import express from 'express'
import { getTravelPlans } from '../routeHandlers/travelHandler.js';
import { middleware } from '../utils/middleware.js';
import { createPlan, getMemebers, joinPlan, LeavePlan } from '../routeHandlers/roomHandler.js';

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

export default function travelRouter( upload , supabase){
    const router = express.Router();

    router.get('/:planId/members' , getMemebers);
    
    router.use(middleware);
    
    router.get('/', getTravelPlans);
    router.post('/create', upload.single('image') , parseData , createPlan);
    router.post('/join/:planId', joinPlan);
    router.delete('/leave/:planId', LeavePlan);

    return router;
}


