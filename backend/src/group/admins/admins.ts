import { Request, Response } from 'express';
import GroupAdminService from './createAdmins';

class GroupAdminController {
  // Add an admin to a group
  async addAdmin(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params; // Get userId from URL parameters
      const { groupId } = req.params; // Get groupId from URL parameters

      // Ensure you have proper authorization here if needed
      const admin = await GroupAdminService.addAdmin(userId, groupId);
      res.status(201).json(admin);
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to add admin', error: typedError.message });
    }
  }

  // Remove an admin from a group
  async removeAdmin(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params; // Get userId from URL parameters
      const { groupId } = req.params; // Get groupId from URL parameters

      // Ensure you have proper authorization here if needed
      await GroupAdminService.removeAdmin(userId, groupId);
      res.status(204).end();
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to remove admin', error: typedError.message });
    }
  }

  // Get all admins of a group
  async getAdmins(req: Request, res: Response): Promise<void> {
    try {
      const { groupId } = req.params; // Get groupId from URL parameters
      const admins = await GroupAdminService.getAdmins(groupId);
      res.status(200).json(admins);
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to get admins', error: typedError.message });
    }
  }
}

export default new GroupAdminController();
