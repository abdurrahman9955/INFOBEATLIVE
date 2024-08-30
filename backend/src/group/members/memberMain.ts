import { Router } from 'express';
import GroupMemberController from './members';
import { authenticate } from '../createGroup/authMiddleware';

const router = Router();

// Route to add a member to a group
router.post('/groups/:groupId/members/:userId',authenticate, GroupMemberController.addMember);

// Route to remove a member from a group
router.delete('/groups/:groupId/members/:userId',authenticate, GroupMemberController.removeMember);

// Route to get all members of a group
router.get('/groups/:groupId/members',authenticate, GroupMemberController.getMembers);

export default router;
