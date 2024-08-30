import { Router } from 'express';
import ClassController from './class';
import { authenticate } from '../../group/createGroup/authMiddleware';

const router = Router();

router.post('/class',authenticate, ClassController.createClass);
router.get('/class/:id',authenticate, ClassController.getClassById);
router.put('/class/:id',authenticate, ClassController.updateClass);
router.delete('/class/:id',authenticate, ClassController.deleteClass);
router.get('/classes', ClassController.getAllClasses);

export default router;
