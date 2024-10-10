import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../../account/authenticate/authenticate';

const bootcampIntermediateClassInstructors = Router();

// Route to add an Instructor to a class
bootcampIntermediateClassInstructors.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
bootcampIntermediateClassInstructors.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
bootcampIntermediateClassInstructors.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default bootcampIntermediateClassInstructors;
