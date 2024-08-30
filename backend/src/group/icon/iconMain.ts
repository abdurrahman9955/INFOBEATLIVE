// src/routes/groupRoutes.ts
import { Router } from 'express';
import GroupController from './icon';
import upload from './multer';
import { authenticate } from '../createGroup/authMiddleware';

const router = Router();

// Route to update group icon
router.post('/:groupId/icon',authenticate, upload.single('icon'), GroupController.updateIcon);

// Route to delete group icon
router.delete('/:groupId/icon',authenticate, GroupController.deleteIcon);

// Route to get group icon
router.get('/:groupId/icon',authenticate, GroupController.getIcon);

export default router;
