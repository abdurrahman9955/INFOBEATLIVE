import { Router } from 'express';
import ClassInstructorController from './instructors';
import { authenticate } from '../../../account/authenticate/authenticate';

const academyBeginnerClassInstructors = Router();

// Route to add an Instructor to a class
academyBeginnerClassInstructors.post('/:classId/instructors/:userId',authenticate, ClassInstructorController.addInstructor);

// Route to remove an Instructor from a class
academyBeginnerClassInstructors.delete('/:classId/instructor/:userId',authenticate, ClassInstructorController.removeInstructor);

// Route to get all Instructor of a class
academyBeginnerClassInstructors.get('/:classId/instructors',authenticate, ClassInstructorController.getInstructors);

export default academyBeginnerClassInstructors;
