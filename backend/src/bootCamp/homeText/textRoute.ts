// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassHomeTextController } from './homeText';

const bootcampTextRouter = Router();
const homeTextController = new ClassHomeTextController();

bootcampTextRouter.get('/', homeTextController.getAll);
bootcampTextRouter.get('/:id', homeTextController.getById);
bootcampTextRouter.post('/', homeTextController.create);
bootcampTextRouter.put('/:id', homeTextController.update);
bootcampTextRouter.delete('/:id', homeTextController.delete);

export default bootcampTextRouter;
