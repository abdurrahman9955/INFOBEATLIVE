import { Request, Response } from 'express';
import GroupMemberService from './createMembers';

class GroupMemberController {
  // Add a member to a group
  async addMember(req: Request, res: Response): Promise<void> {
    try {
      const { userId, groupId } = req.params;
      // Ensure proper authorization if needed
      const member = await GroupMemberService.addMember(userId, groupId);
      res.status(201).json(member);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to add member', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to add member', error: 'An unknown error occurred' });
      }
    }
  }

  // Remove a member from a group
  async removeMember(req: Request, res: Response): Promise<void> {
    try {
      const { userId, groupId } = req.params;
      // Ensure proper authorization if needed
      await GroupMemberService.removeMember(userId, groupId);
      res.status(204).end();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to remove member', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to remove member', error: 'An unknown error occurred' });
      }
    }
  }

  // Get all members of a group
  async getMembers(req: Request, res: Response): Promise<void> {
    try {
      const { groupId } = req.params;
      const members = await GroupMemberService.getMembers(groupId);
      res.status(200).json(members);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to get members', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to get members', error: 'An unknown error occurred' });
      }
    }
  }
}

export default new GroupMemberController();
