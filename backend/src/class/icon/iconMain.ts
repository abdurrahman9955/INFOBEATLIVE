
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../group/createGroup/authMiddleware';

const classIconRouter = Router();

classIconRouter.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

classIconRouter.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

classIconRouter.get('/:classId/icon',authenticate, ClassController.getIcon);

export default classIconRouter;
