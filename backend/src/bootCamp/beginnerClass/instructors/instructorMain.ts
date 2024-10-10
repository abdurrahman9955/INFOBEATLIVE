import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../../account/authenticate/authenticate';

const bootcampBeginnerClassInstructors = Router();

// Route to add an Instructor to a class
bootcampBeginnerClassInstructors.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
bootcampBeginnerClassInstructors.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
bootcampBeginnerClassInstructors.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default bootcampBeginnerClassInstructors;
