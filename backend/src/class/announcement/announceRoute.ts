// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const classAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

classAnnouncement.get('/announcement/', announcementController.getAll);
classAnnouncement.get('/announcement/:id', announcementController.getById);
classAnnouncement.post('/announcement/', announcementController.create);
classAnnouncement.put('/announcement/:id', announcementController.update);
classAnnouncement.delete('/announcement/:id', announcementController.delete);
classAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default classAnnouncement;
