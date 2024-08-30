import { Router } from 'express';
import InstructorController from './instructors';
import { authenticate } from '../../group/createGroup/authMiddleware';

const router = Router();


router.post('/:classId/instructors/:userId',authenticate, InstructorController.addInstructor);

router.delete('/:classId/instructors/:userId',authenticate, InstructorController.removeInstructor);

router.get('/:classId/instructors',authenticate, InstructorController.getInstructors);

export default router;
