import { Router } from 'express';
import {
    createAdvanced,
    getAllAdvanced,
    getAdvancedById,
    updateAdvanced,
    deleteAdvanced,
    getAdvanceClassesByBootcampCreator
} from './class';
import { authenticate } from '../../../account/authenticate/authenticate';

const createAcademyAdvanceClass = Router();

// Routes for Advanced Class
createAcademyAdvanceClass.post('/advanced-class', authenticate, createAdvanced);
createAcademyAdvanceClass.get('/advanced-class', getAllAdvanced);
createAcademyAdvanceClass.get('/advanced-class/:id', authenticate, getAdvancedById);
createAcademyAdvanceClass.put('/advanced-class/:id', authenticate, updateAdvanced);
createAcademyAdvanceClass.delete('/advanced-class/:id', authenticate, deleteAdvanced);
createAcademyAdvanceClass.get('/advance-class/by-bootcamp-and-creator', authenticate, getAdvanceClassesByBootcampCreator);

export default createAcademyAdvanceClass;
