
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../account/authenticate/authenticate';

const bootcampIconRouter = Router();

bootcampIconRouter.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

bootcampIconRouter.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

bootcampIconRouter.get('/:classId/icon',authenticate, ClassController.getIcon);

export default bootcampIconRouter;
