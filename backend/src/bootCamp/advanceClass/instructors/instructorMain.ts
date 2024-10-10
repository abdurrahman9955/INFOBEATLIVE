import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../../account/authenticate/authenticate';

const bootcampAdvanceClassInstructors = Router();

// Route to add an Instructor to a class
bootcampAdvanceClassInstructors.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
bootcampAdvanceClassInstructors.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
bootcampAdvanceClassInstructors.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default bootcampAdvanceClassInstructors;
