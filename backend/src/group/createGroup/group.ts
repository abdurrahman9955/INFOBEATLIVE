import { Request, Response } from 'express';
import GroupService from './createGroup';

class GroupController {
  async createGroup(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const group = await GroupService.createGroup(req.body, userId);
      res.status(201).json(group);
    } catch (error) {
      const typedError = error as Error; // Type assertion
      res.status(500).json({ message: 'Failed to create group', error: typedError.message });
    }
  }

  async getGroupById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const group = await GroupService.getGroupById(id);
      if (!group) {
        res.status(404).json({ message: 'Group not found' });
      } else {
        res.status(200).json(group);
      }
    } catch (error) {
      const typedError = error as Error; // Type assertion
      res.status(500).json({ message: 'Failed to fetch group', error: typedError.message });
    }
  }

  async updateGroup(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = (req as any).user.id;
      const group = await GroupService.updateGroup(id, req.body, userId);
      res.status(200).json(group);
    } catch (error) {
      const typedError = error as Error; // Type assertion
      res.status(500).json({ message: 'Failed to update group', error: typedError.message });
    }
  }

  async deleteGroup(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = (req as any).user.id;
      await GroupService.deleteGroup(id, userId);
      res.status(204).end();
    } catch (error) {
      const typedError = error as Error; // Type assertion
      res.status(500).json({ message: 'Failed to delete group', error: typedError.message });
    }
  }

  async getAllGroups(req: Request, res: Response): Promise<void> {
    try {
      const groups = await GroupService.getAllGroups();
      res.status(200).json(groups);
    } catch (error) {
      const typedError = error as Error; // Type assertion
      res.status(500).json({ message: 'Failed to fetch groups', error: typedError.message });
    }
  }
}

export default new GroupController();
