// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const classContactRouter = Router();
const contactController = new ClassContactController();

classContactRouter.get('/contact', contactController.getAll);
classContactRouter.get('/contact/:id', contactController.getById);
classContactRouter.post('/contact', contactController.create);
classContactRouter.put('/contact/:id', contactController.update);
classContactRouter.delete('/contact/:id', contactController.delete);

export default classContactRouter;
