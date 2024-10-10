import { Router } from 'express';
import GroupMemberController from './members';
import { authenticate } from '../createGroup/authMiddleware';

const groupMembersRouter = Router();

// Route to add a member to a group
groupMembersRouter.post('/groups/:groupId/members/:userId',authenticate, GroupMemberController.addMember);

// Route to remove a member from a group
groupMembersRouter.delete('/groups/:groupId/members/:userId',authenticate, GroupMemberController.removeMember);

// Route to get all members of a group
groupMembersRouter.get('/groups/:groupId/members',authenticate, GroupMemberController.getMembers);

export default groupMembersRouter;
