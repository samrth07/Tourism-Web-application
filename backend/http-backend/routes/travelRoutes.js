import express from 'express'
import { getTravelPlans } from '../routeHandlers/travelHandler.js';
import { middleware } from '../utils/middleware.js';
import { createPlan, getMemebers, joinPlan, leaveRoom } from '../routeHandlers/roomHandler.js';

const travelRouter = express.Router();

travelRouter.get('/:filter', getTravelPlans);
travelRouter.get('/:planId/members' , getMemebers)

travelRouter.use(middleware);

travelRouter.post('/create', createPlan);
travelRouter.post('/join/:planId', joinPlan);
travelRouter.post('/leave', leaveRoom);

export default travelRouter;