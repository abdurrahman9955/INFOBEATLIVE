// src/routes/group.routes.ts
import { Router } from 'express';
import GroupController from './group';
import { authenticate } from './authMiddleware';

const router = Router();

router.post('/groups',authenticate, GroupController.createGroup);
router.get('/groups/:id',authenticate, GroupController.getGroupById);
router.put('/groups/:id',authenticate, GroupController.updateGroup);
router.delete('/groups/:id',authenticate, GroupController.deleteGroup);
router.get('/groups', GroupController.getAllGroups);

export default router;
