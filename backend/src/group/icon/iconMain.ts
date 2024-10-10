
import { Router } from 'express';
import GroupIconController from './icon';
import { upload } from './multer';
import { authenticate } from '../../group/createGroup/authMiddleware';

const groupIconRouter = Router();

groupIconRouter.post('/:classId/icon',authenticate, upload.single('icon'), GroupIconController.updateGroupIcon);

groupIconRouter.delete('/:classId/icon',authenticate, GroupIconController.deleteGroupIcon);

groupIconRouter.get('/:classId/icon',authenticate, GroupIconController.getGroupIcon);

export default groupIconRouter;
