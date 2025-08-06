import express from 'express'
import { getTravelPlans } from '../routeHandlers/travelHandler.js';
import { middleware } from '../utils/middleware.js';
import { createPlan, getMemebers, joinPlan, leaveRoom } from '../routeHandlers/roomHandler.js';

const travelRouter = express.Router();

travelRouter.get('/:planId/members' , getMemebers)

travelRouter.use(middleware);

travelRouter.get('/', getTravelPlans);
travelRouter.post('/create', createPlan);
travelRouter.post('/join/:planId', joinPlan);
travelRouter.post('/leave', leaveRoom);

export default travelRouter;