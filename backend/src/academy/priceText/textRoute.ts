// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassPricingTextController } from './pricingText';

const academyPricingRouter = Router();
const pricingTextController = new ClassPricingTextController();

academyPricingRouter.get('/', pricingTextController.getAll);
academyPricingRouter.get('/:id', pricingTextController.getById);
academyPricingRouter.post('/', pricingTextController.create);
academyPricingRouter.put('/:id', pricingTextController.update);
academyPricingRouter.delete('/:id', pricingTextController.delete);

export default academyPricingRouter;
