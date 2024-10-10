import { Router } from 'express';
import {
    createClasses,
    getAllClass,
    getClassesById,
    updateClasses,
    deleteClasses,
    getClassesByCreator
} from './class';
import { authenticate } from '../../account/authenticate/authenticate';

const createClassRouter = Router();

// Routes for Beginner Class
createClassRouter.post('/class', authenticate, createClasses);
createClassRouter.get('/classes', getAllClass);
createClassRouter.get('/class/:id', authenticate, getClassesById);
createClassRouter.put('/class/:id', authenticate, updateClasses);
createClassRouter.delete('/class/:id', authenticate, deleteClasses);
createClassRouter.get('/class/by-creator', authenticate, getClassesByCreator);

export default createClassRouter;
