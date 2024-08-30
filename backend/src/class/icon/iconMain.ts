
import { Router } from 'express';
import ClassController from './icon';
import upload from './multer';
import { authenticate } from '../../group/createGroup/authMiddleware';

const router = Router();

router.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

router.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

router.get('/:classId/icon',authenticate, ClassController.getIcon);

export default router;
