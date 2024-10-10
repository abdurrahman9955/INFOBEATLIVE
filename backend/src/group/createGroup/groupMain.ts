// src/routes/group.routes.ts
import { Router } from 'express';
import GroupController from './group';
import { authenticate } from './authMiddleware';

const groupRouter = Router();

groupRouter.post('/groups',authenticate, GroupController.createGroup);
groupRouter.get('/groups/:id',authenticate, GroupController.getGroupById);
groupRouter.put('/groups/:id',authenticate, GroupController.updateGroup);
groupRouter.delete('/groups/:id',authenticate, GroupController.deleteGroup);
groupRouter.get('/groups', GroupController.getAllGroups);

export default groupRouter;
