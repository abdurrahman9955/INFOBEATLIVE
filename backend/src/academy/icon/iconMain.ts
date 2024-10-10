
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../account/authenticate/authenticate';

const academyIconRouter = Router();

academyIconRouter.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

academyIconRouter.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

academyIconRouter.get('/:classId/icon',authenticate, ClassController.getIcon);

export default academyIconRouter;
