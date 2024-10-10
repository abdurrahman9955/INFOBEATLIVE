// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassHomeTextController } from './homeText';

const academyHomeTextRouter = Router();
const homeTextController = new ClassHomeTextController();

academyHomeTextRouter.get('/', homeTextController.getAll);
academyHomeTextRouter.get('/:id', homeTextController.getById);
academyHomeTextRouter.post('/', homeTextController.create);
academyHomeTextRouter.put('/:id', homeTextController.update);
academyHomeTextRouter.delete('/:id', homeTextController.delete);

export default academyHomeTextRouter;
