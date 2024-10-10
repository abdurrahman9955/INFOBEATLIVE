import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../../account/authenticate/authenticate';

const academyAdvanceClassInstructors = Router();

// Route to add an Instructor to a class
academyAdvanceClassInstructors.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
academyAdvanceClassInstructors.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
academyAdvanceClassInstructors.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default academyAdvanceClassInstructors;
