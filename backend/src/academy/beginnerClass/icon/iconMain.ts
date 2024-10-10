
import { Router } from 'express';
import ClassController from './icon';
import { upload } from './multer';
import { authenticate } from '../../../account/authenticate/authenticate';

const academyBeginnerClassIcon = Router();

academyBeginnerClassIcon.post('/:classId/icon',authenticate, upload.single('icon'), ClassController.updateIcon);

academyBeginnerClassIcon.delete('/:classId/icon',authenticate, ClassController.deleteIcon);

academyBeginnerClassIcon.get('/:classId/icon',authenticate, ClassController.getIcon);

export default academyBeginnerClassIcon;
