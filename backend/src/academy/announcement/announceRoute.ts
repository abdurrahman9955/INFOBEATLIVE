// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const academyAnnouncementRouter = Router();
const announcementController = new ClassAnnouncementController();

academyAnnouncementRouter.get('/', announcementController.getAll);
academyAnnouncementRouter.get('/:id', announcementController.getById);
academyAnnouncementRouter.post('/', announcementController.create);
academyAnnouncementRouter.put('/:id', announcementController.update);
academyAnnouncementRouter.delete('/:id', announcementController.delete);
academyAnnouncementRouter.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default academyAnnouncementRouter;
