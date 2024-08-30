import { Request, Response } from 'express';
import GroupService from './createIcon'; // Make sure this import path is correct

class GroupController {
  // Update group icon
  async updateIcon(req: Request, res: Response) {
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
      // Type assertion to check if error is an instance of Error
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        // If error is not an instance of Error, handle it gracefully
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  // Delete group icon
  async deleteIcon(req: Request, res: Response) {
    try {
      const { groupId } = req.params;

      await GroupService.deleteGroupIcon(groupId);
      return res.status(204).send();
    } catch (error) {
      // Type assertion to check if error is an instance of Error
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        // If error is not an instance of Error, handle it gracefully
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  // Get group icon
  async getIcon(req: Request, res: Response) {
    try {
      const { groupId } = req.params;

      const iconUrl = await GroupService.getGroupIcon(groupId);
      if (!iconUrl) {
        return res.status(404).json({ error: 'Icon not found' });
      }

      return res.status(200).json({ iconUrl });
    } catch (error) {
      // Type assertion to check if error is an instance of Error
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        // If error is not an instance of Error, handle it gracefully
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  }
}

export default new GroupController();
