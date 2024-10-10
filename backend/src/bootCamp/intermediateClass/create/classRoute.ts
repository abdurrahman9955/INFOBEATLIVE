import { Router } from 'express';
import {
    createIntermediate,
    getAllIntermediate,
    getIntermediateById,
    updateIntermediate,
    deleteIntermediate,
    getIntermediateClassesByBootcampCreator
} from './class';
import { authenticate } from '../../../account/authenticate/authenticate';

const createIntermediateClass = Router();

// Routes for Intermediate Class
createIntermediateClass.post('/intermediate-class', authenticate, createIntermediate);
createIntermediateClass.get('/intermediate-class', getAllIntermediate);
createIntermediateClass.get('/intermediate-class/:id', authenticate, getIntermediateById);
createIntermediateClass.put('/intermediate-class/:id', authenticate, updateIntermediate);
createIntermediateClass.delete('/intermediate-class/:id', authenticate, deleteIntermediate);
createIntermediateClass.get('/beginner-class/by-bootcamp-and-creator', authenticate, getIntermediateClassesByBootcampCreator);

export default createIntermediateClass;
