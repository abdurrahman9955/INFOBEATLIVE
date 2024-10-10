import { Router } from 'express';
import {
  createBootcamp,
  getAllBootcamps,
  getBootcampById,
  updateBootcamp,
  deleteBootcamp,
} from './create';
import { authenticate } from '../../group/createGroup/authMiddleware';

const createBootcampRouter = Router();

createBootcampRouter.post('/bootcamps',authenticate, createBootcamp);
createBootcampRouter.get('/bootcamps', getAllBootcamps);
createBootcampRouter.get('/bootcamps/:id',authenticate, getBootcampById);
createBootcampRouter.put('/bootcamps/:id',authenticate, updateBootcamp);
createBootcampRouter.delete('/bootcamps/:id',authenticate, deleteBootcamp);

export default createBootcampRouter;
