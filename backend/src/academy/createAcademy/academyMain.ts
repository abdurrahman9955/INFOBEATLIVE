import { Router } from 'express';
import {
  createAcademy,
  getAllAcademies,
  getAcademyById,
  updateAcademy,
  deleteAcademy,
} from './create';
import { authenticate } from '../../group/createGroup/authMiddleware';

const createAcademyRouter = Router();

createAcademyRouter.post('/academy',authenticate, createAcademy);
createAcademyRouter.get('/academies', getAllAcademies);
createAcademyRouter.get('/academy/:id',authenticate, getAcademyById);
createAcademyRouter.put('/academy/:id',authenticate, updateAcademy);
createAcademyRouter.delete('/academy/:id',authenticate, deleteAcademy);

export default createAcademyRouter;
