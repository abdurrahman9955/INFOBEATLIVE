import { Request, Response } from 'express';
import ClassInstructorService from './createInstructors';

class ClassInstructorController {
  // Add an Instructor to a group
  async addInstructor(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params; // Get userId from URL parameters
      const { classId } = req.params; // Get classId from URL parameters

      // Ensure you have proper authorization here if needed
      const admin = await ClassInstructorService.addInstructor(userId, classId);
      res.status(201).json(admin);
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to add Instructor', error: typedError.message });
    }
  }

  // Remove an Instructor from a group
  async removeInstructor(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params; // Get userId from URL parameters
      const { classId } = req.params; // Get classId from URL parameters

      // Ensure you have proper authorization here if needed
      await ClassInstructorService.removeInstructor(userId, classId);
      res.status(204).end();
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to remove Instructor', error: typedError.message });
    }
  }

  // Get all Instructor of a group
  async getInstructors(req: Request, res: Response): Promise<void> {
    try {
      const { classId } = req.params; // Get classId from URL parameters
      const instructors = await ClassInstructorService.getInstructors(classId);
      res.status(200).json(instructors);
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to get Instructor', error: typedError.message });
    }
  }
}

export default new ClassInstructorController();
