// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassContactController } from './contact';

const academyContactRouter = Router();
const contactController = new ClassContactController();

academyContactRouter.get('/', contactController.getAll);
academyContactRouter.get('/:id', contactController.getById);
academyContactRouter.post('/', contactController.create);
academyContactRouter.put('/:id', contactController.update);
academyContactRouter.delete('/:id', contactController.delete);

export default academyContactRouter;
