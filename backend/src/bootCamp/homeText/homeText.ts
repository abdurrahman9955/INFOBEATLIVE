// src/controllers/classContactController.ts
import { Request, Response, NextFunction } from 'express';
import { ClassHomeTextService } from './createText';

const homeTextService = new ClassHomeTextService();

export class ClassHomeTextController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {

      const bootcampId = req.params.classId
      
      const home = await homeTextService.getAllHomeTexts(bootcampId);
      res.status(200).json(home);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId
      
      const home = await homeTextService.getHomeTextById(id, userId);
      if (!home) return res.status(404).json({ message: 'Contact not found' });
      res.status(200).json(home);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newHomeText = await homeTextService.createHomeText(req.body);
      res.status(201).json(newHomeText);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      const updatedHomeText = await homeTextService.updateHomeText(id, userId, req.body);
      res.status(200).json(updatedHomeText);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      await homeTextService.deleteHomeText(id, userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}


export default new ClassHomeTextController();