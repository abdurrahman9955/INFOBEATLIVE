import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../../account/authenticate/authenticate';

const academyIntermediateClassInstructors = Router();

// Route to add an Instructor to a class
academyIntermediateClassInstructors.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
academyIntermediateClassInstructors.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
academyIntermediateClassInstructors.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default academyIntermediateClassInstructors;
