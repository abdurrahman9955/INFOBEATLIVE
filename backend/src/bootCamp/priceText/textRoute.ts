// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassPricingTextController } from './pricingText';

const bootcampPricingRouter = Router();
const pricingTextController = new ClassPricingTextController();

bootcampPricingRouter.get('/', pricingTextController.getAll);
bootcampPricingRouter.get('/:id', pricingTextController.getById);
bootcampPricingRouter.post('/', pricingTextController.create);
bootcampPricingRouter.put('/:id', pricingTextController.update);
bootcampPricingRouter.delete('/:id', pricingTextController.delete);

export default bootcampPricingRouter;
