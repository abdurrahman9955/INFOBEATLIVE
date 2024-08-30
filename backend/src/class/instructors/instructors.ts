import { Request, Response } from 'express';
import ClassInstructorService from './createInstructors';

class InstructorController {

  async addInstructor(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params; 
      const { classId } = req.params; 

      const instructor = await ClassInstructorService.addInstructors(userId, classId);
      res.status(201).json(instructor);
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to add Instructor', error: typedError.message });
    }
  }

  async removeInstructor(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params; 
      const { classId } = req.params; 

      await ClassInstructorService.removeInstructor(userId, classId);
      res.status(204).end();
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to remove Instructor', error: typedError.message });
    }
  }

  async getInstructors(req: Request, res: Response): Promise<void> {
    try {
      const { classId } = req.params; 
      const instructors = await ClassInstructorService.getInstructors(classId);
      res.status(200).json(instructors);
    } catch (error) {
      const typedError = error as Error;
      res.status(500).json({ message: 'Failed to get Instructors', error: typedError.message });
    }
  }
}

export default new InstructorController();
