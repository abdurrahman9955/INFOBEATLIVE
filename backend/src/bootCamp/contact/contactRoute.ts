// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const bootcampContactRouter = Router();
const contactController = new ClassContactController();

bootcampContactRouter.get('/', contactController.getAll);
bootcampContactRouter.get('/:id', contactController.getById);
bootcampContactRouter.post('/', contactController.create);
bootcampContactRouter.put('/:id', contactController.update);
bootcampContactRouter.delete('/:id', contactController.delete);

export default bootcampContactRouter;
