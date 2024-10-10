import { Request, Response } from 'express';
import GroupService from './createIcon'; 

class GroupIconController {

  async createGroupIcon(req: Request, res: Response) {
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

      const newClass = await GroupService.createGroupIcon(name, description, iconFile, mimeType);
      return res.status(201).json(newClass);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }


  async updateGroupIcon(req: Request, res: Response) {
    try {
      const { groupId } = req.params;
      const iconFile = req.file?.buffer;
      const mimeType = req.file?.mimetype;

      if (!iconFile || !mimeType) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const iconUrl = await GroupService.updateGroupIcon(groupId, iconFile, mimeType);
      return res.status(200).json({ iconUrl });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async deleteGroupIcon(req: Request, res: Response) {
    try {
      const { groupId } = req.params;

      await GroupService.deleteGroupIcon(groupId);
      return res.status(204).send();
    } catch (error) {
      
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async getGroupIcon(req: Request, res: Response) {
    try {
      const { groupId } = req.params;

      const iconUrl = await GroupService.getGroupIcon(groupId);
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

export default new GroupIconController();
