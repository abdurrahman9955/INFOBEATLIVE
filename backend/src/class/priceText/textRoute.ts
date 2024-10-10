// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassPricingTextController } from './pricingText';

const classPricingRouter = Router();
const pricingTextController = new ClassPricingTextController();

classPricingRouter.get('/pricingText', pricingTextController.getAll);
classPricingRouter.get('/pricingText/:id', pricingTextController.getById);
classPricingRouter.post('/pricingText/', pricingTextController.create);
classPricingRouter.put('/pricingText/:id', pricingTextController.update);
classPricingRouter.delete('/pricingText/:id', pricingTextController.delete);

export default classPricingRouter;
