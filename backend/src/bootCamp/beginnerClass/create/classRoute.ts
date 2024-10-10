import { Router } from 'express';
import {
    createBeginner,
    getAllBeginner,
    getBeginnerById,
    updateBeginner,
    deleteBeginner,
    getBeginnerClassesByBootcampCreator
} from './class';
import { authenticate } from '../../../account/authenticate/authenticate';

const createBeginnerClass = Router();

// Routes for Beginner Class
createBeginnerClass.post('/beginner-class', authenticate, createBeginner);
createBeginnerClass.get('/beginner-class', getAllBeginner);
createBeginnerClass.get('/beginner-class/:id', authenticate, getBeginnerById);
createBeginnerClass.put('/beginner-class/:id', authenticate, updateBeginner);
createBeginnerClass.delete('/beginner-class/:id', authenticate, deleteBeginner);
createBeginnerClass.get('/beginner-class/by-bootcamp-and-creator', authenticate, getBeginnerClassesByBootcampCreator);

export default createBeginnerClass;
