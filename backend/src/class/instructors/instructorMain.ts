import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../account/authenticate/authenticate';

const classInstructorsRouter = Router();

// Route to add an Instructor to a class
classInstructorsRouter.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
classInstructorsRouter.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
classInstructorsRouter.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default classInstructorsRouter;
