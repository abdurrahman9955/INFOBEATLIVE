import { Request, Response } from 'express';
import ClassService from './createIcon'; 

class ClassController {

  async createClass(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const iconFile = req.file?.buffer;
      const mimeType = req.file?.mimetype;

      if (!iconFile || !mimeType) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
      }

      const newClass = await ClassService.createClass(name, description, iconFile, mimeType);
      return res.status(201).json(newClass);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  
  async updateIcon(req: Request, res: Response) {
    try {
      const { academyId } = req.params;
      const iconFile = req.file?.buffer;
      const mimeType = req.file?.mimetype;

      if (!iconFile || !mimeType) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const iconUrl = await ClassService.updateClassIcon(academyId, iconFile, mimeType);
      return res.status(200).json({ iconUrl });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async deleteIcon(req: Request, res: Response) {
    try {
      const { academyId } = req.params;

      await ClassService.deleteClassIcon(academyId);
      return res.status(204).send();
    } catch (error) {
      
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async getIcon(req: Request, res: Response) {
    try {
      const { academyId } = req.params;

      const iconUrl = await ClassService.getClassIcon(academyId);
      if (!iconUrl) {
        return res.status(404).json({ error: 'Icon not found' });
      }

      return res.status(200).json({ iconUrl });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
       
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }
}

export default new ClassController();
