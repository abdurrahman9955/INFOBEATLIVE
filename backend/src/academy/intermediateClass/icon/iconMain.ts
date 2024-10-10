
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../../account/authenticate/authenticate';

const academyIntermediateClassIcon = Router();

academyIntermediateClassIcon.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

academyIntermediateClassIcon.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

academyIntermediateClassIcon.get('/:classId/icon',authenticate, ClassController.getIcon);

export default academyIntermediateClassIcon;
