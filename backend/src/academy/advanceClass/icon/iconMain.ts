
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../../account/authenticate/authenticate';

const academyAdvanceClassIcon = Router();

academyAdvanceClassIcon.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

academyAdvanceClassIcon.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

academyAdvanceClassIcon.get('/:classId/icon',authenticate, ClassController.getIcon);

export default academyAdvanceClassIcon;
