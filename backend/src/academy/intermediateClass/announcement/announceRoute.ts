// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const academyIntermediateClassAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

academyIntermediateClassAnnouncement.get('/', announcementController.getAll);
academyIntermediateClassAnnouncement.get('/:id', announcementController.getById);
academyIntermediateClassAnnouncement.post('/', announcementController.create);
academyIntermediateClassAnnouncement.put('/:id', announcementController.update);
academyIntermediateClassAnnouncement.delete('/:id', announcementController.delete);
academyIntermediateClassAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default academyIntermediateClassAnnouncement;
