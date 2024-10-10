
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../../account/authenticate/authenticate';

const bootcampIntermediateClassIcon = Router();

bootcampIntermediateClassIcon.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

bootcampIntermediateClassIcon.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

bootcampIntermediateClassIcon.get('/:classId/icon',authenticate, ClassController.getIcon);

export default bootcampIntermediateClassIcon;
