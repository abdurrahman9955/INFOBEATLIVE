import { Router } from 'express';
import {
    createBeginner,
    getAllBeginner,
    getBeginnerById,
    updateBeginner,
    deleteBeginner,
    getBeginnerClassesByAcademyCreator
} from './class';
import { authenticate } from '../../../account/authenticate/authenticate';

const createAcademyBeginnerClass = Router();

// Routes for Beginner Class
createAcademyBeginnerClass.post('/beginner-class', authenticate, createBeginner);
createAcademyBeginnerClass.get('/beginner-class', getAllBeginner);
createAcademyBeginnerClass.get('/beginner-class/:id', authenticate, getBeginnerById);
createAcademyBeginnerClass.put('/beginner-class/:id', authenticate, updateBeginner);
createAcademyBeginnerClass.delete('/beginner-class/:id', authenticate, deleteBeginner);
createAcademyBeginnerClass.get('/beginner-class/by-bootcamp-and-creator', authenticate, getBeginnerClassesByAcademyCreator);

export default createAcademyBeginnerClass;
