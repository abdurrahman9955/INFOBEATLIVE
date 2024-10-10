import { Router } from 'express';
import GroupAdminController from './admins';
import { authenticate } from '../createGroup/authMiddleware';

const groupAdminRouter = Router();

// Route to add an admin to a group
groupAdminRouter.post('/:groupId/admins/:userId',authenticate, GroupAdminController.addAdmin);

// Route to remove an admin from a group
groupAdminRouter.delete('/:groupId/admins/:userId',authenticate, GroupAdminController.removeAdmin);

// Route to get all admins of a group
groupAdminRouter.get('/:groupId/admins',authenticate, GroupAdminController.getAdmins);

export default groupAdminRouter;
