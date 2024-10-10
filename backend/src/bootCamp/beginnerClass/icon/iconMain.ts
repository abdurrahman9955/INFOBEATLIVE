
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../../account/authenticate/authenticate';

const bootcampBeginnerClassIcon = Router();

bootcampBeginnerClassIcon.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

bootcampBeginnerClassIcon.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

bootcampBeginnerClassIcon.get('/:classId/icon',authenticate, ClassController.getIcon);

export default bootcampBeginnerClassIcon;
