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

const createBootcampAdvanceClass = Router();

// Routes for Advanced Class
createBootcampAdvanceClass.post('/advanced-class', authenticate, createAdvanced);
createBootcampAdvanceClass.get('/advanced-class', getAllAdvanced);
createBootcampAdvanceClass.get('/advanced-class/:id', authenticate, getAdvancedById);
createBootcampAdvanceClass.put('/advanced-class/:id', authenticate, updateAdvanced);
createBootcampAdvanceClass.delete('/advanced-class/:id', authenticate, deleteAdvanced);
createBootcampAdvanceClass.get('/advance-class/by-bootcamp-and-creator', authenticate, getAdvanceClassesByBootcampCreator);

export default createBootcampAdvanceClass;
