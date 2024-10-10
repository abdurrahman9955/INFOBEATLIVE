// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const academyAdvanceClassAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

academyAdvanceClassAnnouncement.get('/', announcementController.getAll);
academyAdvanceClassAnnouncement.get('/:id', announcementController.getById);
academyAdvanceClassAnnouncement.post('/', announcementController.create);
academyAdvanceClassAnnouncement.put('/:id', announcementController.update);
academyAdvanceClassAnnouncement.delete('/:id', announcementController.delete);
academyAdvanceClassAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default academyAdvanceClassAnnouncement;
