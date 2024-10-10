import { Router } from 'express';
import {
    createIntermediate,
    getAllIntermediate,
    getIntermediateById,
    updateIntermediate,
    deleteIntermediate,
    getIntermediateClassesByClassCreator
} from './class';
import { authenticate } from '../../../account/authenticate/authenticate';

const createAcademyIntermediateClass = Router();

// Routes for Intermediate Class
createAcademyIntermediateClass.post('/intermediate-class', authenticate, createIntermediate);
createAcademyIntermediateClass.get('/intermediate-class', getAllIntermediate);
createAcademyIntermediateClass.get('/intermediate-class/:id', authenticate, getIntermediateById);
createAcademyIntermediateClass.put('/intermediate-class/:id', authenticate, updateIntermediate);
createAcademyIntermediateClass.delete('/intermediate-class/:id', authenticate, deleteIntermediate);
createAcademyIntermediateClass.get('/beginner-class/by-bootcamp-and-creator', authenticate, getIntermediateClassesByClassCreator);

export default createAcademyIntermediateClass;
