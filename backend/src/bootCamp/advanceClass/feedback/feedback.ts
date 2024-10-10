// src/controllers/classFeedbackController.ts
import { Request, Response, NextFunction } from 'express';
import { ClassFeedbackService } from './createFeedback';

const feedbackService = new ClassFeedbackService();

export class ClassFeedbackController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {

      const classId = req.params.userId

      const feedbacks = await feedbackService.getAllFeedbacks(classId);
      res.status(200).json(feedbacks);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      const feedback = await feedbackService.getFeedbackById(id, userId);
      if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
      res.status(200).json(feedback);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newFeedback = await feedbackService.createFeedback(req.body);
      res.status(201).json(newFeedback);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      const updatedFeedback = await feedbackService.updateFeedback(id, userId, req.body);
      res.status(200).json(updatedFeedback);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      await feedbackService.deleteFeedback(id, userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new ClassFeedbackController();