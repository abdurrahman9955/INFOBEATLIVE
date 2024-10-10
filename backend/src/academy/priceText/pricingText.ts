// src/controllers/classContactController.ts
import { Request, Response, NextFunction } from 'express';
import { ClassPricingTextService } from './createText';

const pricingTextService = new ClassPricingTextService();

export class ClassPricingTextController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {

      const classId = req.params.classId
      
      const pricing = await pricingTextService.getAllPricingTexts(classId);
      res.status(200).json(pricing);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId
      
      const pricing = await pricingTextService.getPricingTextById(id, userId);
      if (!pricing) return res.status(404).json({ message: 'Contact not found' });
      res.status(200).json(pricing);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newPricingText = await pricingTextService.createPricingText(req.body);
      res.status(201).json(newPricingText);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      const updatedPricingText = await pricingTextService.updatePricingText(id, userId, req.body);
      res.status(200).json(updatedPricingText);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {

      const id = req.params.id
      const userId = req.params.userId

      await pricingTextService.deletePricingText(id, userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}


export default new ClassPricingTextController();