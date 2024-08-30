import { Request, Response } from 'express';
import ClassService from './createClass'

class ClassController {
  async createClass(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const group = await ClassService.createClass(req.body, userId);
      res.status(201).json(group);
    } catch (error) {
      const typedError = error as Error; 
      res.status(500).json({ message: 'Failed to create class', error: typedError.message });
    }
  }

  async getClassById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const group = await ClassService.getClassById(id);
      if (!group) {
        res.status(404).json({ message: 'Group not found' });
      } else {
        res.status(200).json(group);
      }
    } catch (error) {
      const typedError = error as Error; 
      res.status(500).json({ message: 'Failed to fetch class', error: typedError.message });
    }
  }

  async updateClass(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = (req as any).user.id;
      const group = await ClassService.updateClass(id, req.body, userId);
      res.status(200).json(group);
    } catch (error) {
      const typedError = error as Error; 
      res.status(500).json({ message: 'Failed to update class', error: typedError.message });
    }
  }

  async deleteClass(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = (req as any).user.id;
      await ClassService.deleteClass(id, userId);
      res.status(204).end();
    } catch (error) {
      const typedError = error as Error; 
      res.status(500).json({ message: 'Failed to delete class', error: typedError.message });
    }
  }

  async getAllClasses(req: Request, res: Response): Promise<void> {
    try {
      const groups = await ClassService.getAllClasses();
      res.status(200).json(groups);
    } catch (error) {
      const typedError = error as Error; 
      res.status(500).json({ message: 'Failed to fetch classes', error: typedError.message });
    }
  }
}

export default new ClassController();
