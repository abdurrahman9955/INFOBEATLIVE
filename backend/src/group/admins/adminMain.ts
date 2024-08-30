import { Router } from 'express';
import GroupAdminController from './admins';
import { authenticate } from '../createGroup/authMiddleware';

const router = Router();

// Route to add an admin to a group
router.post('/:groupId/admins/:userId',authenticate, GroupAdminController.addAdmin);

// Route to remove an admin from a group
router.delete('/:groupId/admins/:userId',authenticate, GroupAdminController.removeAdmin);

// Route to get all admins of a group
router.get('/:groupId/admins',authenticate, GroupAdminController.getAdmins);

export default router;
