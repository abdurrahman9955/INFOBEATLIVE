
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../../account/authenticate/authenticate';

const bootcampAdvanceClassIcon = Router();

bootcampAdvanceClassIcon.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

bootcampAdvanceClassIcon.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

bootcampAdvanceClassIcon.get('/:classId/icon',authenticate, ClassController.getIcon);

export default bootcampAdvanceClassIcon;
